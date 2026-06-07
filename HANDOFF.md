# CS Dashboard — Claude Code Handoff Document
**Project:** KNOW CS Dashboard (Anushka Silambu)
**Handed off:** June 7, 2026
**Purpose:** Pick up this project exactly where it left off in a new Claude session

---

## 1. What This Project Is

A standalone local web app — a Customer Success Dashboard for Anushka, a CSM at KNOW (Loctoc Pte Ltd), a frontline workforce management SaaS. It tracks ~33 clients across paid tiers, pilots, and churned accounts. No backend, no database. Everything runs locally in the browser.

**Stack:** Vanilla HTML + CSS + JS, Chart.js for graphs, Python for local servers.

**How it runs:**
- Double-click `Launch Dashboard.command` in the CS Dashboard folder
- This starts two Python servers:
  - Port 8080 — serves the dashboard files (python3 -m http.server)
  - Port 8081 — local Claude API proxy (proxy.py) to avoid CORS
- Chrome opens automatically at `http://localhost:8080`

---

## 2. File Structure

All files live in a folder called `CS Dashboard` on Anushka's Desktop:

```
CS Dashboard/
├── index.html               # App shell, all views and modals
├── app.js                   # All logic (~3400 lines)
├── style.css                # All styles (~2150 lines)
├── proxy.py                 # Local Claude API proxy on port 8081
└── Launch Dashboard.command # Double-click launcher (starts both servers)
```

No npm, no build step, no node_modules. Everything is plain files.

---

## 3. Data Architecture

### Client Data
- Storage key: `cs_dashboard_v2` in localStorage
- Loaded on init from localStorage; falls back to hardcoded seed data in app.js if empty
- Auto-saved on every edit with a 2-second debounce

### Task Data
- Storage key: `cs_dashboard_tasks_v1` in localStorage
- Separate from client data, loaded/saved independently
- Exported/imported together with client data via the Export/Import buttons

### Redash (WAU) Data
- Hardcoded as `const REDASH_DATA` at the top of app.js (line 6)
- A large JSON object with weekly WAU + activity data per client
- Updated by: sidebar → "Update WAU" button → paste Redash JSON
- Covers weeks from 2025-12-15 to 2026-03-09

### Jira Data
- Imported via CSV drag-and-drop (sidebar → "Update Jira")
- Parsed and merged into client objects under `c.jira = { open, inProgress, closed, tickets[] }`
- NOTE: The client name column mapping in the CSV was still unresolved last session — exact column header from the Jira export CSV needs to be confirmed

---

## 4. App Structure (app.js)

### Key global state variables
```js
const STORAGE_KEY = 'cs_dashboard_v2';
const TASKS_KEY   = 'cs_dashboard_tasks_v1';
let allClients = [];       // all client objects
let allTasks = [];         // all task objects
let filteredClients = [];  // currently filtered subset
let currentView = 'overview';
let previousView = 'overview';
let activeClientId = null; // client open in detail view
let pendingEdits = {};     // unsaved edits per clientId
```

### Views (each has a `div#view-{name}` in index.html)
| View ID | Nav item | Render function |
|---|---|---|
| overview | Overview | renderOverview() |
| tasks | Tasks | renderTasksView() |
| clients | All Clients | renderClientCards() |
| analytics | Analytics | renderAnalytics() |
| renewals | Renewals | renderRenewals() |
| digest | This Week | renderDigest() |
| onboarding-pipeline | Onboarding | renderOnboardingPipeline() |
| detail | (client detail, no nav) | renderDetailContent(c) |

### Key function map
```
initDashboard()               — boots app, loads data, renders overview
computeHealthScore(c)         — auto R/A/G from WAU + checkin + Jira + renewal
renderOverview()              — morning view: stats, attention queue, tasks due today
renderAttentionQueue()        — generates ranked nudges for overview
renderTasksDueToday()         — tasks panel on overview
renderOverviewTable()         — client table with panels (Paid/Pilots/Churned)
showDetail(clientId)          — opens client detail view
renderDetailHeader(c)         — detail page header with health badge, breadcrumb
renderDetailContent(c)        — all detail sections
renderClientTasksSection(id)  — tasks section inside client detail
renderTasksView()             — full task table with all columns
renderTaskList(tasks, group)  — compact task list (used in overview/detail)
openAddTaskModal(clientId?)   — opens add task modal
openEditTaskModal(taskId)     — opens edit task modal
saveTaskFromModal()           — saves new/edited task
toggleTask(taskId)            — marks task done/undone
renderTranscriptActions()     — renders AI-extracted action items
analyseTranscript()           — calls Claude API via proxy, extracts tasks
addSelectedTasksFromTranscript() — adds selected items to allTasks
renderRenewals()              — renewals view
renderAnalytics()             — analytics charts view
renderDigest()                — this week digest view
renderOnboardingPipeline()    — onboarding pipeline view
exportData()                  — downloads JSON backup (clients + tasks)
importData()                  — restores from JSON backup
openRedashImport()            — WAU data paste modal
openJiraImport()              — Jira CSV drag-drop modal
```

### Health Score Formula (computeHealthScore)
Starts at 100, deducts:
- WAU dropped >20% WoW → -25
- WAU dropped 5–20% WoW → -10
- No check-in in >60 days → -35
- No check-in in 30–60 days → -20
- No check-in in 14–30 days → -5
- 3+ open Jira tickets → -20
- 1–2 open Jira tickets → -10
- Renewal overdue → -15
- Renewal within 30 days → -10
- Result: ≥75 = Green, 45–74 = Yellow, <45 = Red

### Task Data Model
```js
{
  id: 'task_' + timestamp + random,
  text: string,           // action item description
  clientId: string|null,  // linked client ID
  workstream: string|null,// e.g. "Onboarding", "L&D migration"
  owner: string|null,     // e.g. "Me", "Client", "Engineering"
  priority: 'high'|'medium'|'low',
  dueDate: 'YYYY-MM-DD'|null,
  type: 'follow-up'|'qbr'|'renewal'|'onboarding'|'escalation'|'other',
  notes: string|null,
  jiraLink: string|null,  // URL to Jira ticket
  slackLink: string|null, // URL to Slack thread
  tags: string|null,      // comma-separated e.g. "renewal, escalation"
  done: boolean,
  createdAt: ISO string,
  updatedAt: ISO string,
  completedAt: ISO string|null,
}
```

### Client Data Model (key fields)
```js
{
  id: string,
  name: string,
  tier: 'Platinum'|'Gold'|'Silver'|'Bronze'|'Pilot'|'Churn',
  accountHealth: 'Green'|'Yellow'|'Red',  // auto-computed each render
  contractValue: number,
  currency: 'USD'|'AED'|'INR'|'THB'|'CAD',
  contractEndDate: string,
  sector: string,
  country: string,
  region: string,
  latestWAU: number,
  wauHistory: [{ week: string, wau: number }],
  jira: { open: number, inProgress: number, closed: number, tickets: [] },
  bau: { months: [{ label, done, date }] },  // check-in calendar
  lastCheckinDate: Date|null,  // computed in normalizeClients()
  notes: string,
  nextActivity: { type, date, description },
  // ... plus Pipedrive deal fields, onboarding fields
}
```

---

## 5. Transcript → Tasks Feature (AI)

- Sidebar button: "Log call"
- User pastes transcript → hits Analyse
- Calls `http://localhost:8081/claude` (local proxy) → forwards to Anthropic API
- API key stored in localStorage as `claude_api_key`
- If key missing or blank, prompts user on first use
- "Reset API key" button in modal footer clears it
- Claude returns JSON: `{ summary, actions: [{ text, owner, priority, type, dueDate }] }`
- User reviews, edits due dates, toggles checkboxes, clicks "Add X tasks"
- Tasks land in allTasks linked to selected client

**If it says "Analysis failed to fetch":**
1. Must be opened via Launch Dashboard.command (not file://)
2. Check proxy is running: `curl http://localhost:8081/claude` should return an error HTML page (that's correct — it only accepts POST)
3. Click "Reset API key" in the modal and re-enter key

---

## 6. What's Built vs What's Not (Audit vs Design Files)

### Design files uploaded by Anushka:
- `csm_morning_view.html` — Screen 1: CSM morning view
- `csm_account_detail.html` — Screen 2: Account detail
- `csm_krish_portfolio_view.html` — Screen 3: Portfolio view (for Krish/leadership)
- `ideal_csm_tool_features.html` — Full feature map by job-to-be-done

### ✅ Fully built
- Attention queue (no check-in, renewal <30d, WAU drop, Jira tickets)
- Auto health score (R/A/G computed from signals)
- Task management — full table with all columns: action item, client/workstream, owner, priority, status, due date, last updated, days until due, tags, Jira link, Slack link
- Transcript → Tasks AI feature
- Stats row (clients, at risk, renewals, open tasks)
- Tasks due today panel on overview
- WAU usage charts in client detail
- Activity timeline / BAU check-in calendar
- Notes section per client
- Jira CSV import
- Renewals view
- Onboarding pipeline view
- Analytics view (WAU trends, activity breakdown)
- This Week digest view
- Export / Import (JSON backup including tasks)
- Update WAU (Redash JSON paste)

### ⚠️ Partially built
- Stats row — missing ARR managed + ARR at risk as headline numbers
- Client table — missing "Last contact" column and "ARR" column (design shows both prominently)
- Account detail KPI row — health badge exists but missing ARR card and "Last contact X days ago" card
- Usage metrics in detail — WAU exists, missing feature adoption %, last active date, sessions this week

### ❌ Not built yet
**High priority (close to the design):**
- Personalised greeting ("Good morning, Anushka") + date/context subtitle
- "Last contact" column in overview client table
- ARR column in overview client table
- ARR at risk as a headline stat
- Stakeholder map (Champion / Buyer / Detractor) in client detail
- Quick action buttons in client detail header (Prep QBR, Log activity, Renewal task)
- Activity type tagging on timeline (Call / Email / QBR badges)

**Medium priority:**
- Portfolio view (Screen 3 — entirely missing, Krish's view)
  - Total ARR headline
  - ARR at risk ($)
  - R/A/G health breakdown bar chart
  - Top risks panel with reason + ARR
  - CSM workload per CSM
  - Renewal pipeline 60-day view
  - Export report button
- Upcoming view (nav item in design, not built)
- Reports nav item

**Lower priority / Phase 2:**
- Playbooks (templated action sequences)
- QBR prep auto-assembly
- Expansion tracking
- Slack notifications (smart nudges via Slack)
- Weekly Slack report
- CSM activity report
- Retention trends (health score over time)

---

## 7. Known Issues / Bugs

1. **Jira CSV client name mapping** — when importing a Jira CSV export, 9621/9622 tickets come back as "unassigned" because the "Client Name" column header in the CSV doesn't match what the parser expects. Fix: open the downloaded CSV in a text editor, find the exact column header name for the client field, and update `parseJiraCSV()` in app.js accordingly.

2. **localStorage empty on first load** — if `cs_dashboard_v2` doesn't exist in localStorage, the app seeds from hardcoded data in app.js. This is intentional. After first load, data persists. Use Export to back up and Import to restore.

3. **Tasks badge** — shows overdue task count in the sidebar next to "Tasks". Only updates when a view renders — not real-time.

---

## 8. Suggested Next Session Priorities

In rough order of value vs effort:

1. **Add Last contact + ARR columns to the overview client table** — quick win, high visibility
2. **Personalised greeting + context line** — 20 lines of code, makes it feel real
3. **Stakeholder map in client detail** — Champion/Buyer/Detractor, stored in client data, editable
4. **Quick action buttons** — Prep QBR / Log activity / Renewal task in detail header
5. **Portfolio view (Screen 3)** — Krish's view, biggest gap, but self-contained so can be built as a new view

---

## 9. How to Start a New Session

Tell Claude:

> "I'm continuing work on my CS Dashboard project. It's a standalone vanilla HTML/CSS/JS web app that runs locally. The files are index.html, app.js, style.css, proxy.py and Launch Dashboard.command. I'll upload the current versions of app.js, index.html and style.css. Please read them carefully before making any changes. We need to [describe what you want to build next]."

Then upload the three files (app.js, index.html, style.css) at the start of the session.

**Important rules Claude must follow for this project:**
- Always run `node --check app.js` after every edit to catch syntax errors before delivering
- Never deliver files with syntax errors — this breaks the entire dashboard silently
- Copy files to a working directory (`/home/claude/`) before editing, then copy back to outputs
- Use `python3` with str_replace and targeted edits — never rewrite entire files from scratch
- Chart.js cannot use CSS variables — always use hardcoded hex colors in chart configs
- All data persists in localStorage — never change `STORAGE_KEY` or `TASKS_KEY`
- The proxy runs on port 8081, file server on port 8080

---

## 10. CSS Variables Reference

Key design tokens (defined in style.css `:root`):
```css
--bg        /* main background */
--bg2       /* card/panel background */
--bg3       /* subtle inset background */
--border    /* default border */
--border2   /* slightly stronger border */
--text      /* primary text */
--text2     /* secondary text */
--text3     /* tertiary / muted text */
--accent    /* primary brand colour (orange-ish) */
--accent2   /* darker accent */
--red       /* danger / Red health */
--yellow    /* warning / Yellow health */
--green     /* success / Green health */
--font      /* main font family */
--mono      /* monospace font */
--radius    /* default border radius */
--radius-sm /* small border radius */
```
