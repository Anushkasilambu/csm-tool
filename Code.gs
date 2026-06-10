// ════════════════════════════════════════════════════════════════════════════
// CS DASHBOARD — Google Apps Script
//
// Spreadsheet tabs:
//   "Client Details"      — managed by the dashboard
//   "CS Summary"          — full WAU+activity history (built up over time)
//   "Client Activity"     — full activity history (built up over time)
//   "WAU"                 — full WAU history (built up over time)
//   "Inbox: CS Summary"   — paste your weekly Redash CS Summary here
//   "Inbox: Activity"     — paste your weekly Redash Client Activity here
//   "Inbox: WAU"          — paste your weekly Redash WAU here
//
// Weekly workflow:
//   1. Paste each Redash export into the matching Inbox tab (select all → paste)
//   2. Click Sync Data on the dashboard  ← that's it!
//      (Apps Script merges new rows into history, ignoring duplicates)
// ════════════════════════════════════════════════════════════════════════════

const SPREADSHEET_ID = '1o5doF31E-Kh8_2NSYm0H8vgUwUlb7O6iFTpfMjxhngU';

const TABS = {
  clients:         'Client Details',
  summary:         'CS Summary',
  activity:        'Client Activity',
  wau:             'WAU',
  jira:            'Jira Tickets',
  inboxSummary:    'Inbox: CS Summary',
  inboxActivity:   'Inbox: Activity',
  inboxWau:        'Inbox: WAU',
};

const CLIENT_COLS = [
  'id','name','locationCount','tier','accountHealth','currency','contractValue',
  'contractStartDate','contractEndDate','nextPaymentDue',
  'contactPerson',
  'sector','country','clientSince','nextActivityDate','nextActivityTitle',
  'notes','externalTracker','internalProcess','status','owner',
  'orgId','environment','modules',
  'bau_January','bau_February','bau_March','bau_April',
  'bau_May','bau_June','bau_July','bau_remarks',
  'ob_Set up org account','ob_Provide features/modules',
  'ob_Client provides user details','ob_Configure permissions',
  'ob_Client provides content','ob_Digitize forms/checklists',
  'ob_Digitize training content','ob_Alignment meeting',
  'ob_Share KNOW guides','ob_Set up support channels',
  'ob_Users/Comms/Ops/Learn/Shifts','ob_Launch',
  'ob_Feedback/Review meeting','ob_Post-launch catch up',
];

const MONTHS   = ['January','February','March','April','May','June','July'];
const OB_STEPS = [
  'Set up org account','Provide features/modules',
  'Client provides user details','Configure permissions',
  'Client provides content','Digitize forms/checklists',
  'Digitize training content','Alignment meeting',
  'Share KNOW guides','Set up support channels',
  'Users/Comms/Ops/Learn/Shifts','Launch',
  'Feedback/Review meeting','Post-launch catch up',
];


// ─── REDASH → DASHBOARD NAME MAPPING ────────────────────────────────────────
const REDASH_NAME_MAP = {
  'Chaska (SCC)':            'Chaska/ La Prep',
  'SAO Group':               'SAO',
  'Rappi (KNOW)':            'Rappi',
  'Rappi - Staging Org':     'Rappi - Staging Org',
  'Shelbys':                 "Shelby's",
  'T2Pan Sourdough Boutique':'T2Pan Sourdough',
  'Creel Coffee':            'Creek Coffee',
  'FBH Group':               'FBH',
  'DPZ Kootenays':           'DPZ',
  'Noon':                    'Noon Food',
};

function mapRedashName(name) {
  return REDASH_NAME_MAP[name] || name;
}

// ─── JIRA → DASHBOARD NAME MAPPING ──────────────────────────────────────────
const JIRA_NAME_MAP = {
  'Dank':                    'DANK',
  'Chaska':                  'Chaska/ La Prep',
  'Dancing Goat Coffee':     'Dancing Goat Coffee',
  'Alamar Dominos':          'Alamar Dominos',
};

function mapJiraName(name) {
  if (!name) return '';
  const trimmed = String(name).trim();
  return JIRA_NAME_MAP[trimmed] || trimmed;
}

// ─── READ JIRA TICKETS ──────────────────────────────────────────────────────
function readJiraTickets(ss) {
  const sheet = ss.getSheetByName(TABS.jira);
  if (!sheet || sheet.getLastRow() < 2) return {};

  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim().toLowerCase());

  const sumCol    = headers.findIndex(h => h === 'summary');
  const statusCol = headers.findIndex(h => h === 'status');
  const clientCol = headers.findIndex(h => h.includes('client'));
  const assignCol = headers.findIndex(h => h === 'assignee');

  if (clientCol < 0) {
    Logger.log('Jira tab: no client column found. Headers: ' + headers.join(', '));
    return {};
  }

  // Group tickets by client name
  const byClient = {};  // { clientName: { open: N, inProgress: N, resolved: N, tickets: [...] } }

  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    const rawClient = String(row[clientCol] || '').trim();
    if (!rawClient) continue;

    const client  = mapJiraName(rawClient);
    const summary = sumCol >= 0 ? String(row[sumCol] || '') : '';
    const status  = statusCol >= 0 ? String(row[statusCol] || '').trim() : '';
    const assignee = assignCol >= 0 ? String(row[assignCol] || '') : '';

    if (!byClient[client]) byClient[client] = { open: 0, inProgress: 0, resolved: 0, onHold: 0, tickets: [] };

    // Categorize status
    const sl = status.toLowerCase();
    if (sl.includes('resolved') || sl.includes('done') || sl.includes('closed')) {
      byClient[client].resolved++;
    } else if (sl.includes('progress')) {
      byClient[client].inProgress++;
    } else if (sl.includes('hold')) {
      byClient[client].onHold++;
    } else {
      byClient[client].open++;
    }

    byClient[client].tickets.push({ summary, status, assignee });
  }

  return byClient;
}


// ─── DATE HELPER ─────────────────────────────────────────────────────────────
function parseSheetDate(val) {
  if (!val) return null;
  if (val instanceof Date) {
    const y = val.getFullYear();
    const m = String(val.getMonth() + 1).padStart(2, '0');
    const d = String(val.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }
  const s = String(val).substring(0, 10);
  return s.length === 10 ? s : null;
}

// ─── doGet — load everything ──────────────────────────────────────────────────
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    mergeInboxData(ss);
    const clients = readClients(ss);
    const redash  = readRedash(ss);
    const jira    = readJiraTickets(ss);
    return respond({ clients, redash, jira });
  } catch(err) {
    return respond({ error: err.message });
  }
}

// ─── doPost — add / update / delete ──────────────────────────────────────────
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss      = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet   = getOrCreateClientSheet(ss);
    const headers = getSheetHeaders(sheet);

    if      (payload.action === 'update')   updateClient(ss, payload.client);
    else if (payload.action === 'add')      addClient(ss, payload.client);
    else if (payload.action === 'delete')   deleteClient(ss, payload.clientId);
    else if (payload.action === 'inboxWau') writeInboxWau(ss, payload.rows);
    else throw new Error('Unknown action: ' + payload.action);
    return respond({ success: true });
  } catch(err) {
    return respond({ error: err.message });
  }
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ─── writeInboxWau — called by Cowork automation every Monday ─────────────────
function writeInboxWau(ss, rows) {
  if (!rows || !rows.length) return;

  const sheet = ss.getSheetByName(TABS.inboxWau);
  if (!sheet) throw new Error('Inbox: WAU tab not found');

  // Clear existing data below header row
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clearContent();

  // Headers: Client__filter, org, Period, WAU, id, org_id, org_name, country, sector, owner, status, paid
  // We write the columns we have; leave others blank
  const newRows = rows.map(r => [
    r.client || '',  // Client__filter
    r.client || '',  // org
    r.week   || '',  // Period
    r.wau    || 0,   // WAU
    '',              // id
    '',              // org_id
    r.client || '',  // org_name
    '',              // country
    '',              // sector
    'AS',            // owner
    '',              // status
    '',              // paid
  ]);

  sheet.getRange(2, 1, newRows.length, newRows[0].length).setValues(newRows);

  // Trigger the merge so data flows into the main WAU history tab immediately
  mergeInboxTab(ss, TABS.inboxWau, TABS.wau, mergeWauRow);
}

// ════════════════════════════════════════════════════════════════════════════
// INBOX MERGE
// ════════════════════════════════════════════════════════════════════════════
function mergeInboxData(ss) {
  mergeInboxTab(ss, TABS.inboxWau,      TABS.wau,      mergeWauRow);
  mergeInboxTab(ss, TABS.inboxActivity, TABS.activity,  mergeActivityRow);
  mergeInboxTab(ss, TABS.inboxSummary,  TABS.summary,   mergeSummaryRow);
}

function mergeInboxTab(ss, inboxName, historyName, mergeFn) {
  const inbox = ss.getSheetByName(inboxName);
  if (!inbox || inbox.getLastRow() < 2) return;

  const historySheet = getOrCreateHistorySheet(ss, historyName);
  const inboxData    = inbox.getDataRange().getValues();
  const inboxHeaders = inboxData[0].map(h => String(h).toLowerCase().trim());

  const existing    = historySheet.getLastRow() > 1
    ? historySheet.getRange(2, 1, historySheet.getLastRow() - 1, historySheet.getLastColumn()).getValues()
    : [];
  const existingHeaders = historySheet.getRange(1, 1, 1, historySheet.getLastColumn()).getValues()[0]
    .map(h => String(h).toLowerCase().trim());

  const dedupKeys = new Set(existing.map(row => mergeFn.key(row, existingHeaders)));

  const newRows = [];
  for (let r = 1; r < inboxData.length; r++) {
    const row = inboxData[r];
    const key = mergeFn.key(row, inboxHeaders);
    if (!key || dedupKeys.has(key)) continue;
    newRows.push(mergeFn.transform(row, inboxHeaders));
    dedupKeys.add(key);
  }

  if (newRows.length > 0) {
    historySheet.getRange(
      historySheet.getLastRow() + 1, 1, newRows.length, newRows[0].length
    ).setValues(newRows);
    Logger.log(`Merged ${newRows.length} new rows into ${historyName}`);
  }
}

const mergeWauRow = {
  key: function(row, headers) {
    const cli = row[headers.findIndex(h => h.includes('client'))] || '';
    const per = row[headers.findIndex(h => h === 'period')] || '';
    if (!cli || !per) return null;
    return String(cli).trim() + '|' + String(per).substring(0, 10);
  },
  transform: function(row, headers) {
    const get = (name) => {
      const i = headers.findIndex(h => h.includes(name));
      return i >= 0 ? row[i] : '';
    };
    return [
      get('client'), '', parseSheetDate(get('period')) || String(get('period')).substring(0, 10),
      get('wau'), '', '', get('org_name') || get('org') || '',
      get('country'), get('sector'), get('owner'), get('status'), get('paid')
    ];
  }
};

const mergeActivityRow = {
  key: function(row, headers) {
    const cli = row[headers.findIndex(h => h.includes('client'))] || '';
    const per = row[headers.findIndex(h => h === 'period')] || '';
    const act = row[headers.findIndex(h => h === 'activity')] || '';
    if (!cli || !per) return null;
    return String(cli).trim() + '|' + String(per).substring(0, 10) + '|' + String(act).trim();
  },
  transform: function(row, headers) {
    const get = (name) => {
      const i = headers.findIndex(h => h.includes(name));
      return i >= 0 ? row[i] : '';
    };
    return [
      get('client'), get('org'), parseSheetDate(get('period')) || String(get('period')).substring(0, 10),
      get('activity'), get('activity_count'), get('nugget_count'),
      get('active_users'), get('id'), get('org_id'), get('org_name'),
      get('country'), get('sector'), get('owner'), get('status'), get('paid')
    ];
  }
};

const mergeSummaryRow = {
  key: function(row, headers) {
    const wk  = row[headers.findIndex(h => h.includes('week'))] || '';
    const cli = row[headers.findIndex(h => h === 'client')] || '';
    const act = row[headers.findIndex(h => h === 'activity')] || '';
    if (!cli || !wk) return null;
    return String(wk).substring(0, 10) + '|' + String(cli).trim() + '|' + String(act).trim();
  },
  transform: function(row, headers) {
    const get = (name) => {
      const i = headers.findIndex(h => h.includes(name));
      return i >= 0 ? row[i] : '';
    };
    return [
      parseSheetDate(get('week')) || String(get('week')).substring(0, 10),
      get('client'), get('activity'),
      get('activity_count'), get('active_users')
    ];
  }
};

function getOrCreateHistorySheet(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (sheet) return sheet;

  sheet = ss.insertSheet(name);
  let headers;
  if (name === TABS.wau) {
    headers = ['Client__filter','org','Period','WAU','id','org_id','org_name','country','sector','owner','status','paid'];
  } else if (name === TABS.activity) {
    headers = ['Client__filter','org','Period','Activity','Activity_Count','Nugget_Count','Active_Users','id','org_id','org_name','country','sector','owner','status','paid'];
  } else {
    headers = ['Week::filter','Client','Activity','Activity_Count','Active_Users'];
  }
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#0891b2').setFontColor('#ffffff').setFontWeight('bold');
  sheet.setFrozenRows(1);
  return sheet;
}

function setupInboxSheets(ss) {
  const inboxDefs = [
    { name: TABS.inboxWau,      headers: ['Client__filter','org','Period','WAU','id','org_id','org_name','country','sector','owner','status','paid'],
      note: 'Paste your Redash WAU export here each week.' },
    { name: TABS.inboxActivity, headers: ['Client__filter','org','Period','Activity','Activity_Count','Nugget_Count','Active_Users','id','org_id','org_name','country','sector','owner','status','paid'],
      note: 'Paste your Redash "Client activity" export here each week.' },
    { name: TABS.inboxSummary,  headers: ['Week::filter','Client','Activity','Activity_Count','Active_Users'],
      note: 'Paste your Redash "CS Summary" export here each week.' },
  ];

  inboxDefs.forEach(def => {
    let sheet = ss.getSheetByName(def.name);
    if (!sheet) {
      sheet = ss.insertSheet(def.name);
      sheet.getRange(1, 1, 1, def.headers.length).setValues([def.headers]);
      sheet.getRange(1, 1, 1, def.headers.length)
        .setBackground('#ca8a04').setFontColor('#ffffff').setFontWeight('bold');
      sheet.setFrozenRows(1);
      sheet.getRange('A1').setNote(def.note);
    }
  });
}

// ─── READ clients ─────────────────────────────────────────────────────────────
function readClients(ss) {
  const sheet = getOrCreateClientSheet(ss);
  const data  = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0].map(String);
  const clients = [];
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    if (!row[0] && !row[1]) continue;
    const c = {};
    headers.forEach((h, i) => { c[h] = row[i] === '' ? '' : row[i]; });

    // Parse BAU months from flat columns — each stores a date string (or boolean for legacy)
    c.bau = {
      months: MONTHS.map(m => {
        const val = c['bau_' + m];
        let date = '';
        if (val instanceof Date) date = parseSheetDate(val);
        else if (typeof val === 'string' && val.length >= 10) date = val.substring(0, 10);
        else if (val === true || val === 'TRUE') date = ''; // legacy boolean — done but no date
        return { month: m, date: date, done: !!date || val === true || val === 'TRUE' };
      }),
      remarks: String(c['bau_remarks'] || '')
    };
    MONTHS.forEach(m => delete c['bau_' + m]);
    delete c['bau_remarks'];

    // Parse onboarding from flat columns into nested object
    c.onboarding = {};
    OB_STEPS.forEach(s => { c.onboarding[s] = !!c['ob_' + s]; delete c['ob_' + s]; });

    c.contractValue   = parseFloat(c.contractValue) || 0;

    // Convert date fields from Date objects to YYYY-MM-DD strings
    ['contractStartDate','contractEndDate','nextPaymentDue','clientSince','nextActivityDate'].forEach(f => {
      if (c[f] instanceof Date) c[f] = parseSheetDate(c[f]);
      else if (c[f] && typeof c[f] === 'string') c[f] = c[f].substring(0, 10);
      else c[f] = '';
    });

    // Compute lastCheckin from BAU months (last month marked done)
    const lastDone = [...c.bau.months].reverse().find(m => m.done);
    c.lastCheckin = lastDone ? lastDone.month : '';

    c.latestWAU       = 0;
    c.wauHistory      = [];
    c.activityHistory = [];
    c.usage           = {};
    clients.push(c);
  }
  return clients;
}

// ─── READ redash ──────────────────────────────────────────────────────────────
function readRedash(ss) {
  const out = { weeks: [], latestWeek: null, wau: {}, activity: {}, latestWeekSummary: {} };

  const wauSheet = ss.getSheetByName(TABS.wau);
  if (wauSheet && wauSheet.getLastRow() > 1) {
    const rows    = wauSheet.getDataRange().getValues();
    const h       = rows[0].map(x => String(x).toLowerCase());
    const cliCol  = h.findIndex(x => x.includes('client'));
    const perCol  = h.findIndex(x => x === 'period');
    const wauCol  = h.findIndex(x => x === 'wau');
    const weekSet = new Set();
    for (let r = 1; r < rows.length; r++) {
      const rawClient = String(rows[r][cliCol] || '').trim();
      const client = mapRedashName(rawClient);
      const date   = parseSheetDate(rows[r][perCol]);
      const wau    = parseInt(rows[r][wauCol]) || 0;
      if (!client || !date) continue;
      weekSet.add(date);
      if (!out.wau[client]) out.wau[client] = {};
      out.wau[client][date] = wau;
    }
    out.weeks      = [...weekSet].sort();
    out.latestWeek = out.weeks[out.weeks.length - 1] || null;
  }

  const actSheet = ss.getSheetByName(TABS.activity);
  if (actSheet && actSheet.getLastRow() > 1) {
    const rows   = actSheet.getDataRange().getValues();
    const h      = rows[0].map(x => String(x).toLowerCase());
    const cliCol = h.findIndex(x => x.includes('client'));
    const perCol = h.findIndex(x => x === 'period');
    const typCol = h.findIndex(x => x === 'activity');
    const cntCol = h.findIndex(x => x === 'activity_count');
    const usrCol = h.findIndex(x => x === 'active_users');
    for (let r = 1; r < rows.length; r++) {
      const client = mapRedashName(String(rows[r][cliCol] || '').trim());
      const date   = parseSheetDate(rows[r][perCol]);
      const type   = String(rows[r][typCol] || '').trim();
      const count  = parseInt(rows[r][cntCol]) || 0;
      const users  = parseInt(rows[r][usrCol]) || 0;
      if (!client || !date || !type) continue;
      if (!out.activity[client]) out.activity[client] = {};
      if (!out.activity[client][date])
        out.activity[client][date] = { totalActivity: 0, activeUsers: 0, byType: {} };
      out.activity[client][date].totalActivity += count;
      out.activity[client][date].activeUsers    = Math.max(out.activity[client][date].activeUsers, users);
      out.activity[client][date].byType[type]   = (out.activity[client][date].byType[type] || 0) + count;
    }
  }

  const sumSheet = ss.getSheetByName(TABS.summary);
  if (sumSheet && sumSheet.getLastRow() > 1) {
    const rows   = sumSheet.getDataRange().getValues();
    const h      = rows[0].map(x => String(x).toLowerCase());
    const wkCol  = h.findIndex(x => x.includes('week'));
    const cliCol = h.findIndex(x => x === 'client');
    const typCol = h.findIndex(x => x === 'activity');
    const cntCol = h.findIndex(x => x === 'activity_count');
    const usrCol = h.findIndex(x => x === 'active_users');
    const weeks  = new Set();
    for (let r = 1; r < rows.length; r++) {
      const d = parseSheetDate(rows[r][wkCol]);
      if (d) weeks.add(d);
    }
    const latestWeek = [...weeks].sort().pop();
    for (let r = 1; r < rows.length; r++) {
      const date   = parseSheetDate(rows[r][wkCol]);
      if (date !== latestWeek) continue;
      const client = mapRedashName(String(rows[r][cliCol] || '').trim());
      const type   = String(rows[r][typCol] || '').trim();
      const count  = parseInt(rows[r][cntCol]) || 0;
      const users  = parseInt(rows[r][usrCol]) || 0;
      if (!client) continue;
      if (!out.latestWeekSummary[client])
        out.latestWeekSummary[client] = { totalActivity: 0, activeUsers: 0, byActivity: {} };
      out.latestWeekSummary[client].totalActivity += count;
      out.latestWeekSummary[client].activeUsers    = Math.max(out.latestWeekSummary[client].activeUsers, users);
      out.latestWeekSummary[client].byActivity[type] = count;
    }
  }

  return out;
}

// ─── WRITE helpers ────────────────────────────────────────────────────────────
function clientToValue(c, col) {
  const bau = c.bau || {};
  const monthData = {};
  (bau.months || []).forEach(m => { monthData[m.month] = m.date || ''; });
  const ob = c.onboarding || {};

  if (col.startsWith('bau_')) {
    const k = col.slice(4);
    return k === 'remarks' ? (bau.remarks || '') : (monthData[k] || '');
  }
  if (col.startsWith('ob_')) return !!ob[col.slice(3)];

  const v = c[col];
  if (v === undefined || v === null) return '';
  if (typeof v === 'object') return '';
  return v;
}

function clientToRow(c, headers) {
  // If headers provided, write values aligned to actual sheet headers
  // If not, fall back to CLIENT_COLS order
  const cols = headers || CLIENT_COLS;
  return cols.map(col => clientToValue(c, col));
}

function getOrCreateClientSheet(ss) {
  let sheet = ss.getSheetByName(TABS.clients);
  if (!sheet) {
    sheet = ss.insertSheet(TABS.clients, 0);
    sheet.getRange(1, 1, 1, CLIENT_COLS.length).setValues([CLIENT_COLS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, CLIENT_COLS.length)
      .setBackground('#4f46e5').setFontColor('#ffffff').setFontWeight('bold');
    CLIENT_COLS.forEach((_, i) => sheet.autoResizeColumn(i + 1));
  }
  return sheet;
}

function getSheetHeaders(sheet) {
  if (sheet.getLastColumn() < 1) return [];
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String);
}

function findClientRow(sheet, clientId) {
  const vals = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  for (let r = 1; r < vals.length; r++) {
    if (String(vals[r][0]) === String(clientId)) return r + 1;
  }
  return -1;
}

function addClient(ss, client) {
  const sheet = getOrCreateClientSheet(ss);
  const headers = getSheetHeaders(sheet);
  // For new clients, write a full row aligned to actual sheet headers
  const rowData = headers.map(col => clientToValue(client, col));
  sheet.appendRow(rowData);
}

function updateClient(ss, client) {
  const sheet   = getOrCreateClientSheet(ss);
  const headers = getSheetHeaders(sheet);
  const rowNum  = findClientRow(sheet, client.id);

  Logger.log('updateClient: ' + client.id + ' (' + client.name + ')');
  Logger.log('Sheet headers count: ' + headers.length);
  Logger.log('First 10 headers: ' + headers.slice(0,10).join(', '));

  if (rowNum < 0) {
    // New client — append
    sheet.appendRow(headers.map(col => clientToValue(client, col)));
    Logger.log('Appended new row');
    return;
  }

  Logger.log('Updating row: ' + rowNum);

  // Existing client — update each cell individually by column name
  for (let i = 0; i < headers.length; i++) {
    const col = headers[i];
    if (!col || col === 'undefined' || col === 'null') continue;
    const val = clientToValue(client, col);
    sheet.getRange(rowNum, i + 1).setValue(val);
  }

  Logger.log('Done updating ' + headers.length + ' cells');
}

function deleteClient(ss, clientId) {
  const sheet  = getOrCreateClientSheet(ss);
  const rowNum = findClientRow(sheet, clientId);
  if (rowNum > 0) sheet.deleteRow(rowNum);
}

// ════════════════════════════════════════════════════════════════════════════
// RUN ONCE — creates the 3 inbox tabs
// ════════════════════════════════════════════════════════════════════════════
function createInboxTabs() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  setupInboxSheets(ss);
  Logger.log('✅ Inbox tabs created.');
}
