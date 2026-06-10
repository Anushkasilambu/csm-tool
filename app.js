// ─── CONFIG ───────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'cs_dashboard_v2';
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxpE8ZsrUD0DIxWNgJa23qJYnd5hfu6dD6tFEv419NW3ep_CH3EkV8BqsdNqUmZ6sodlw/exec';

// ─── REDASH DATA (inlined — regenerate by re-uploading CSVs) ────────────────────
const REDASH_DATA = {"weeks":["2025-12-15","2025-12-22","2025-12-29","2026-01-05","2026-01-12","2026-01-19","2026-01-26","2026-02-02","2026-02-09","2026-02-16","2026-02-23","2026-03-02","2026-03-09"],"latestWeek":"2026-03-09","wau":{"Address Cafe":{"2025-12-15":394,"2025-12-22":391,"2025-12-29":370,"2026-01-05":169,"2026-01-12":148,"2026-01-19":144,"2026-01-26":138,"2026-02-02":136,"2026-02-09":132,"2026-02-16":66,"2026-02-23":9,"2026-03-02":90,"2026-03-09":86},"Anjappar":{"2026-01-05":2},"Beat The Bomb":{"2025-12-15":1,"2026-01-19":1},"Chaska":{"2025-12-15":4,"2025-12-22":2,"2026-01-05":4,"2026-01-12":3,"2026-01-19":3,"2026-01-26":3,"2026-02-02":18,"2026-02-09":16,"2026-02-16":14,"2026-02-23":15,"2026-03-02":15,"2026-03-09":14},"Coca Cola":{"2025-12-15":460,"2025-12-22":438,"2025-12-29":469,"2026-01-05":122,"2026-01-12":401,"2026-01-19":427,"2026-01-26":429,"2026-02-02":423,"2026-02-09":194,"2026-02-16":431,"2026-02-23":407,"2026-03-02":437,"2026-03-09":422},"Creek Coffee":{"2026-01-12":1,"2026-01-19":2,"2026-02-02":2},"DANK":{"2025-12-15":71,"2025-12-22":69,"2025-12-29":91,"2026-01-05":63,"2026-01-12":95,"2026-01-19":66,"2026-01-26":62,"2026-02-02":92,"2026-02-09":92,"2026-02-16":71,"2026-02-23":72,"2026-03-02":90,"2026-03-09":73},"DPZ Kootenays":{"2025-12-15":174,"2025-12-22":159,"2025-12-29":175,"2026-01-05":179,"2026-01-12":173,"2026-01-19":153,"2026-01-26":171,"2026-02-02":183,"2026-02-09":165,"2026-02-16":202,"2026-02-23":179,"2026-03-02":205,"2026-03-09":153},"Dancing Goat Coffee":{"2025-12-15":30,"2025-12-22":28,"2025-12-29":29,"2026-01-05":27,"2026-01-12":25,"2026-01-19":26,"2026-01-26":28,"2026-02-02":28,"2026-02-09":28,"2026-02-16":29,"2026-02-23":28,"2026-03-02":32,"2026-03-09":30},"Drive Coffee":{"2026-03-09":1},"FBH Group":{"2025-12-15":70,"2025-12-22":59,"2025-12-29":73,"2026-01-05":93,"2026-01-12":99,"2026-01-19":92,"2026-01-26":88,"2026-02-02":260,"2026-02-09":98,"2026-02-16":87,"2026-02-23":83,"2026-03-02":78,"2026-03-09":72},"HomePro":{"2025-12-15":3624,"2025-12-22":5182,"2025-12-29":5897,"2026-01-05":5355,"2026-01-12":5788,"2026-01-19":4894,"2026-01-26":5663,"2026-02-02":4298,"2026-02-09":4007,"2026-02-16":4003,"2026-02-23":5569,"2026-03-02":5582,"2026-03-09":4811},"Maestro Pizza KSA":{"2025-12-15":599,"2025-12-22":613,"2025-12-29":596,"2026-01-05":616,"2026-01-12":620,"2026-01-19":427,"2026-01-26":334,"2026-02-02":320,"2026-02-09":312,"2026-02-16":295,"2026-02-23":293,"2026-03-02":270,"2026-03-09":276},"Maestro Pizza UAE":{"2025-12-15":22,"2025-12-22":17,"2025-12-29":19,"2026-01-05":12,"2026-01-12":12,"2026-01-19":12,"2026-01-26":27,"2026-02-02":37,"2026-02-09":36,"2026-02-16":27,"2026-02-23":34,"2026-03-02":25,"2026-03-09":19},"Main Squeeze Juice":{"2025-12-15":55,"2025-12-22":72,"2025-12-29":162,"2026-01-05":101,"2026-01-12":56,"2026-01-19":89,"2026-01-26":50,"2026-02-02":55,"2026-02-09":35,"2026-02-16":28,"2026-02-23":34,"2026-03-02":36,"2026-03-09":55},"MyGym":{"2025-12-15":42,"2025-12-22":30,"2025-12-29":38,"2026-01-05":44,"2026-01-12":43,"2026-01-19":42,"2026-01-26":40,"2026-02-02":38,"2026-02-09":39,"2026-02-16":41,"2026-02-23":41,"2026-03-02":43,"2026-03-09":45},"Noon":{"2025-12-15":11441,"2025-12-22":11213,"2025-12-29":12061,"2026-01-05":11221,"2026-01-12":11678,"2026-01-19":10976,"2026-01-26":11412,"2026-02-02":11060,"2026-02-09":11325,"2026-02-16":11935,"2026-02-23":11133,"2026-03-02":10987,"2026-03-09":10650},"Noon Minutes":{"2025-12-15":1215,"2025-12-22":314,"2025-12-29":131,"2026-01-05":1096,"2026-01-12":1152,"2026-01-19":542,"2026-01-26":125,"2026-02-02":511,"2026-02-09":1066,"2026-02-16":409,"2026-02-23":949,"2026-03-02":1093,"2026-03-09":109},"Noon Minutes Last Mile":{"2025-12-15":226,"2025-12-22":222,"2025-12-29":171,"2026-01-05":149,"2026-01-12":146,"2026-01-19":133,"2026-01-26":120,"2026-02-02":116,"2026-02-09":127,"2026-02-16":100,"2026-02-23":1445,"2026-03-02":1656,"2026-03-09":1574},"Rappi":{"2025-12-15":14,"2025-12-22":1785,"2025-12-29":1732,"2026-01-05":200,"2026-01-12":144,"2026-01-19":279,"2026-01-26":71,"2026-02-02":77,"2026-02-09":1511,"2026-02-16":157,"2026-02-23":1705,"2026-03-02":273,"2026-03-09":177},"Rappi - Staging Org":{"2026-02-23":2,"2026-03-02":1,"2026-03-09":0},"SAO":{"2025-12-15":8,"2025-12-22":9,"2025-12-29":10,"2026-01-05":12,"2026-01-12":11,"2026-01-19":11,"2026-01-26":9,"2026-02-02":13,"2026-02-09":12,"2026-02-16":10,"2026-02-23":12,"2026-03-02":12,"2026-03-09":11},"Shelby's":{"2025-12-15":1,"2025-12-29":1,"2026-01-26":1},"Swish":{"2026-02-09":0,"2026-02-16":0,"2026-02-23":1},"T2Pan Sourdough":{"2026-01-12":2,"2026-02-02":1,"2026-02-09":1,"2026-02-16":1},"Tabur":{"2026-01-19":3,"2026-01-26":6,"2026-02-02":5,"2026-02-09":5,"2026-02-16":3,"2026-02-23":1},"The Dugout":{"2025-12-15":3,"2025-12-22":2,"2025-12-29":2,"2026-01-05":1,"2026-01-12":1,"2026-01-19":3,"2026-01-26":1,"2026-02-02":1,"2026-03-09":1},"Tiki Taco":{"2025-12-29":1,"2026-01-05":14,"2026-01-12":56,"2026-01-19":46,"2026-01-26":64,"2026-02-02":59,"2026-02-09":60,"2026-02-16":65,"2026-02-23":65,"2026-03-02":75,"2026-03-09":70},"Yummy Bee":{"2026-03-02":0,"2026-03-09":13}},"activity":{"Address Cafe":{"2025-12-15":{"totalActivity":10647,"activeUsers":371,"byType":{"Announcements":26,"Forms":9878,"Guides":13,"Issues":583,"Tasks":147}},"2025-12-22":{"totalActivity":10279,"activeUsers":372,"byType":{"Announcements":16,"Forms":9571,"Guides":8,"Issues":580,"Tasks":104}},"2025-12-29":{"totalActivity":6698,"activeUsers":336,"byType":{"Announcements":10,"Forms":6435,"Guides":1,"Issues":215,"Tasks":37}},"2026-01-05":{"totalActivity":3339,"activeUsers":125,"byType":{"Announcements":13,"Forms":3110,"Guides":1,"Issues":215}},"2026-01-12":{"totalActivity":3144,"activeUsers":104,"byType":{"Announcements":3,"Forms":2962,"Guides":0,"Issues":179}},"2026-01-19":{"totalActivity":3071,"activeUsers":104,"byType":{"Announcements":5,"Forms":2954,"Guides":2,"Issues":110,"Tasks":0}},"2026-01-26":{"totalActivity":3237,"activeUsers":92,"byType":{"Announcements":1,"Forms":3079,"Guides":4,"Issues":153}},"2026-02-02":{"totalActivity":3193,"activeUsers":99,"byType":{"Announcements":21,"Forms":2999,"Guides":10,"Issues":162,"Tasks":1}},"2026-02-09":{"totalActivity":3104,"activeUsers":90,"byType":{"Announcements":4,"Forms":2948,"Guides":0,"Issues":152}},"2026-02-16":{"totalActivity":566,"activeUsers":42,"byType":{"Announcements":1,"Forms":552,"Guides":8,"Issues":5}},"2026-02-23":{"totalActivity":583,"activeUsers":9,"byType":{"Forms":583}},"2026-03-02":{"totalActivity":2760,"activeUsers":60,"byType":{"Announcements":8,"Forms":2657,"Guides":1,"Issues":94}},"2026-03-09":{"totalActivity":1947,"activeUsers":59,"byType":{"Announcements":0,"Forms":1896,"Guides":5,"Issues":46}}},"Beat The Bomb":{"2025-12-15":{"totalActivity":0,"activeUsers":1,"byType":{"Announcements":0}},"2026-01-19":{"totalActivity":2,"activeUsers":1,"byType":{"Announcements":0,"Guides":2}}},"Chaska":{"2025-12-15":{"totalActivity":29,"activeUsers":4,"byType":{"Forms":29}},"2025-12-22":{"totalActivity":2,"activeUsers":2,"byType":{"Forms":2}},"2026-01-05":{"totalActivity":25,"activeUsers":4,"byType":{"Announcements":0,"Forms":25}},"2026-01-12":{"totalActivity":27,"activeUsers":3,"byType":{"Forms":27}},"2026-01-19":{"totalActivity":28,"activeUsers":2,"byType":{"Announcements":0,"Forms":28}},"2026-01-26":{"totalActivity":15,"activeUsers":2,"byType":{"Announcements":0,"Forms":15}},"2026-02-02":{"totalActivity":86,"activeUsers":14,"byType":{"Announcements":4,"Forms":82}},"2026-02-09":{"totalActivity":118,"activeUsers":16,"byType":{"Announcements":0,"Forms":118}},"2026-02-16":{"totalActivity":91,"activeUsers":14,"byType":{"Forms":91}},"2026-02-23":{"totalActivity":134,"activeUsers":14,"byType":{"Forms":134}},"2026-03-02":{"totalActivity":100,"activeUsers":12,"byType":{"Forms":100}},"2026-03-09":{"totalActivity":103,"activeUsers":14,"byType":{"Forms":103}}},"Coca Cola":{"2025-12-15":{"totalActivity":624,"activeUsers":460,"byType":{"Announcements":619,"New Learn":5}},"2025-12-22":{"totalActivity":656,"activeUsers":438,"byType":{"Announcements":653,"Guides":2,"New Learn":1}},"2025-12-29":{"totalActivity":1969,"activeUsers":467,"byType":{"Announcements":1853,"Guides":69,"New Learn":47}},"2026-01-05":{"totalActivity":335,"activeUsers":108,"byType":{"Announcements":321,"Guides":9,"New Learn":5}},"2026-01-12":{"totalActivity":406,"activeUsers":400,"byType":{"Announcements":384,"Guides":8,"New Learn":14}},"2026-01-19":{"totalActivity":763,"activeUsers":427,"byType":{"Announcements":760,"Guides":1,"New Learn":2}},"2026-01-26":{"totalActivity":715,"activeUsers":429,"byType":{"Announcements":714,"Guides":1}},"2026-02-02":{"totalActivity":689,"activeUsers":422,"byType":{"Announcements":686,"Guides":3}},"2026-02-09":{"totalActivity":519,"activeUsers":146,"byType":{"Announcements":516,"Guides":3}},"2026-02-16":{"totalActivity":1704,"activeUsers":431,"byType":{"Announcements":1698,"Guides":6}},"2026-02-23":{"totalActivity":602,"activeUsers":405,"byType":{"Announcements":595,"Compliments":2,"Guides":5}},"2026-03-02":{"totalActivity":1882,"activeUsers":437,"byType":{"Announcements":1875,"Guides":7}},"2026-03-09":{"totalActivity":785,"activeUsers":422,"byType":{"Announcements":776,"Guides":9}}},"Creek Coffee":{"2026-01-12":{"totalActivity":6,"activeUsers":1,"byType":{"Announcements":1,"Forms":3,"New Learn":1,"Tasks":1}},"2026-01-19":{"totalActivity":3,"activeUsers":1,"byType":{"Announcements":1,"Forms":1,"Issues":0,"New Learn":1,"Tasks":0}},"2026-02-02":{"totalActivity":1,"activeUsers":1,"byType":{"Announcements":1,"Tasks":0}}},"DANK":{"2025-12-15":{"totalActivity":1538,"activeUsers":58,"byType":{"Announcements":0,"Forms":1469,"Issues":10,"Tasks":59}},"2025-12-22":{"totalActivity":1582,"activeUsers":56,"byType":{"Announcements":0,"Forms":1502,"Issues":30,"Tasks":50}},"2025-12-29":{"totalActivity":1589,"activeUsers":54,"byType":{"Announcements":0,"Forms":1469,"Issues":20,"Tasks":100}},"2026-01-05":{"totalActivity":1523,"activeUsers":50,"byType":{"Announcements":0,"Forms":1492,"Issues":3,"Tasks":28}},"2026-01-12":{"totalActivity":1543,"activeUsers":56,"byType":{"Announcements":1,"Forms":1474,"Issues":5,"Tasks":63}},"2026-01-19":{"totalActivity":1634,"activeUsers":57,"byType":{"Forms":1605,"Issues":6,"Tasks":23}},"2026-01-26":{"totalActivity":1813,"activeUsers":55,"byType":{"Forms":1782,"Issues":1,"Tasks":30}},"2026-02-02":{"totalActivity":1639,"activeUsers":59,"byType":{"Announcements":0,"Forms":1613,"Issues":1,"Tasks":25}},"2026-02-09":{"totalActivity":1683,"activeUsers":58,"byType":{"Announcements":0,"Forms":1646,"Issues":2,"Tasks":35}},"2026-02-16":{"totalActivity":1506,"activeUsers":57,"byType":{"Forms":1481,"Issues":2,"Tasks":23}},"2026-02-23":{"totalActivity":1802,"activeUsers":62,"byType":{"Announcements":1,"Forms":1771,"Issues":6,"Tasks":24}},"2026-03-02":{"totalActivity":1459,"activeUsers":55,"byType":{"Announcements":1,"Forms":1452,"Issues":2,"Tasks":4}},"2026-03-09":{"totalActivity":1656,"activeUsers":64,"byType":{"Announcements":0,"Forms":1632,"Issues":6,"Tasks":18}}},"DPZ Kootenays":{"2025-12-15":{"totalActivity":1260,"activeUsers":169,"byType":{"Announcements":451,"Forms":807,"Issues":2}},"2025-12-22":{"totalActivity":1040,"activeUsers":154,"byType":{"Announcements":329,"Forms":709,"Guides":1,"Issues":1}},"2025-12-29":{"totalActivity":1239,"activeUsers":172,"byType":{"Announcements":493,"Forms":743,"Issues":3}},"2026-01-05":{"totalActivity":1467,"activeUsers":175,"byType":{"Announcements":523,"Forms":940,"Issues":4}},"2026-01-12":{"totalActivity":1216,"activeUsers":170,"byType":{"Announcements":258,"Forms":958}},"2026-01-19":{"totalActivity":1403,"activeUsers":149,"byType":{"Announcements":385,"Forms":1005,"Guides":13}},"2026-01-26":{"totalActivity":1471,"activeUsers":168,"byType":{"Announcements":446,"Forms":1007,"New Learn":13,"Tasks":5}},"2026-02-02":{"totalActivity":1610,"activeUsers":181,"byType":{"Announcements":510,"Forms":1080,"Guides":0,"New Learn":19,"Tasks":1}},"2026-02-09":{"totalActivity":1565,"activeUsers":161,"byType":{"Announcements":472,"Forms":1091,"New Learn":2,"Tasks":0}},"2026-02-16":{"totalActivity":1784,"activeUsers":200,"byType":{"Announcements":662,"Forms":1116,"Guides":1,"Issues":1,"New Learn":1,"Tasks":3}},"2026-02-23":{"totalActivity":1613,"activeUsers":176,"byType":{"Announcements":451,"Forms":1146,"Guides":15,"Tasks":1}},"2026-03-02":{"totalActivity":1800,"activeUsers":205,"byType":{"Announcements":641,"Forms":1121,"Guides":31,"Tasks":7}},"2026-03-09":{"totalActivity":1469,"activeUsers":146,"byType":{"Announcements":458,"Forms":986,"Guides":23,"Tasks":2}}},"Dancing Goat Coffee":{"2025-12-15":{"totalActivity":315,"activeUsers":24,"byType":{"Forms":287,"Issues":28}},"2025-12-22":{"totalActivity":279,"activeUsers":24,"byType":{"Forms":259,"Issues":20}},"2025-12-29":{"totalActivity":286,"activeUsers":23,"byType":{"Announcements":0,"Forms":250,"Issues":36}},"2026-01-05":{"totalActivity":257,"activeUsers":23,"byType":{"Forms":250,"Issues":7}},"2026-01-12":{"totalActivity":258,"activeUsers":22,"byType":{"Announcements":0,"Forms":254,"Issues":4}},"2026-01-19":{"totalActivity":299,"activeUsers":22,"byType":{"Forms":252,"Issues":47}},"2026-01-26":{"totalActivity":253,"activeUsers":23,"byType":{"Announcements":0,"Forms":227,"Issues":26}},"2026-02-02":{"totalActivity":247,"activeUsers":22,"byType":{"Announcements":0,"Forms":219,"Issues":28}},"2026-02-09":{"totalActivity":291,"activeUsers":23,"byType":{"Forms":227,"Issues":64}},"2026-02-16":{"totalActivity":263,"activeUsers":23,"byType":{"Announcements":1,"Forms":234,"Issues":28}},"2026-02-23":{"totalActivity":247,"activeUsers":20,"byType":{"Forms":216,"Issues":31}},"2026-03-02":{"totalActivity":227,"activeUsers":24,"byType":{"Announcements":0,"Forms":200,"Issues":27}},"2026-03-09":{"totalActivity":240,"activeUsers":25,"byType":{"Announcements":0,"Forms":218,"Issues":22}}},"Drive Coffee":{"2026-03-09":{"totalActivity":2,"activeUsers":1,"byType":{"Forms":1,"Tasks":1}}},"FBH Group":{"2025-12-15":{"totalActivity":6255,"activeUsers":47,"byType":{"Announcements":3,"Forms":6149,"Guides":9,"Issues":53,"New Learn":41}},"2025-12-22":{"totalActivity":6217,"activeUsers":49,"byType":{"Announcements":3,"Forms":6170,"Guides":11,"Issues":28,"New Learn":4,"Polls":0,"Tasks":1}},"2025-12-29":{"totalActivity":5988,"activeUsers":51,"byType":{"Announcements":2,"Forms":5922,"Guides":2,"Issues":29,"New Learn":33,"Tasks":0}},"2026-01-05":{"totalActivity":5995,"activeUsers":58,"byType":{"NaN":0,"Announcements":2,"Forms":5862,"Guides":1,"Issues":55,"New Learn":6,"Polls":1,"Tasks":68}},"2026-01-12":{"totalActivity":6338,"activeUsers":56,"byType":{"Announcements":3,"Forms":6090,"Guides":2,"Issues":61,"New Learn":33,"Polls":5,"Tasks":144}},"2026-01-19":{"totalActivity":6672,"activeUsers":57,"byType":{"Announcements":2,"Forms":6212,"Guides":2,"Issues":307,"New Learn":16,"Polls":3,"Tasks":130}},"2026-01-26":{"totalActivity":6454,"activeUsers":62,"byType":{"NaN":0,"Announcements":1,"Forms":6180,"Guides":3,"Issues":206,"New Learn":6,"Polls":0,"Tasks":58}},"2026-02-02":{"totalActivity":6506,"activeUsers":258,"byType":{"Announcements":44,"Forms":6139,"Guides":1,"Issues":253,"Tasks":69}},"2026-02-09":{"totalActivity":6485,"activeUsers":68,"byType":{"Announcements":12,"Forms":6128,"Guides":0,"Issues":217,"New Learn":5,"Polls":0,"Tasks":123}},"2026-02-16":{"totalActivity":4320,"activeUsers":62,"byType":{"Announcements":2,"Forms":4213,"Guides":1,"Issues":81,"New Learn":1,"Polls":0,"Tasks":22}},"2026-02-23":{"totalActivity":3708,"activeUsers":57,"byType":{"Announcements":2,"Forms":3584,"Guides":1,"Issues":116,"New Learn":1,"Tasks":4}},"2026-03-02":{"totalActivity":3768,"activeUsers":58,"byType":{"Announcements":4,"Forms":3601,"Guides":3,"Issues":137,"New Learn":2,"Tasks":21}},"2026-03-09":{"totalActivity":3252,"activeUsers":54,"byType":{"Announcements":0,"Forms":3152,"Issues":100,"Polls":0,"Tasks":0}}},"HomePro":{"2025-12-15":{"totalActivity":16907,"activeUsers":3137,"byType":{"Announcements":474,"Forms":16400,"Issues":2,"Tasks":31}},"2025-12-22":{"totalActivity":19557,"activeUsers":4116,"byType":{"Announcements":3565,"Forms":15968,"Polls":1,"Tasks":23}},"2025-12-29":{"totalActivity":20995,"activeUsers":5833,"byType":{"Announcements":5633,"Forms":15340,"Issues":1,"Tasks":21}},"2026-01-05":{"totalActivity":21592,"activeUsers":3561,"byType":{"Announcements":4019,"Forms":17540,"Issues":1,"Tasks":32}},"2026-01-12":{"totalActivity":23307,"activeUsers":5731,"byType":{"Announcements":5310,"Forms":17963,"Issues":2,"Tasks":32}},"2026-01-19":{"totalActivity":21667,"activeUsers":3192,"byType":{"Announcements":3690,"Forms":17961,"Issues":1,"Tasks":15}},"2026-01-26":{"totalActivity":23374,"activeUsers":5619,"byType":{"NaN":0,"Announcements":6137,"Forms":17221,"Issues":5,"Tasks":11}},"2026-02-02":{"totalActivity":22220,"activeUsers":3256,"byType":{"NaN":0,"Announcements":2983,"Forms":19199,"Tasks":38}},"2026-02-09":{"totalActivity":21711,"activeUsers":3254,"byType":{"NaN":0,"Announcements":2579,"Forms":19119,"Tasks":13}},"2026-02-16":{"totalActivity":20675,"activeUsers":3251,"byType":{"Announcements":1124,"Forms":19519,"Tasks":32}},"2026-02-23":{"totalActivity":25830,"activeUsers":5433,"byType":{"Announcements":7102,"Forms":18713,"Issues":0,"Tasks":15}},"2026-03-02":{"totalActivity":53410,"activeUsers":4659,"byType":{"Announcements":7288,"Forms":45711,"Tasks":411}},"2026-03-09":{"totalActivity":21706,"activeUsers":3404,"byType":{"Announcements":3163,"Forms":18513,"Issues":2,"Tasks":28}}},"Maestro Pizza KSA":{"2025-12-15":{"totalActivity":7400,"activeUsers":553,"byType":{"Forms":7156,"Tasks":244}},"2025-12-22":{"totalActivity":10502,"activeUsers":565,"byType":{"Announcements":2,"Forms":10213,"Tasks":287}},"2025-12-29":{"totalActivity":11094,"activeUsers":562,"byType":{"Forms":10808,"Tasks":286}},"2026-01-05":{"totalActivity":12022,"activeUsers":572,"byType":{"Announcements":1,"Forms":11869,"Tasks":152}},"2026-01-12":{"totalActivity":13825,"activeUsers":576,"byType":{"Forms":13367,"Tasks":458}},"2026-01-19":{"totalActivity":13653,"activeUsers":347,"byType":{"Announcements":0,"Forms":13483,"Tasks":170}},"2026-01-26":{"totalActivity":13726,"activeUsers":263,"byType":{"Forms":13549,"Tasks":177}},"2026-02-02":{"totalActivity":14107,"activeUsers":263,"byType":{"Forms":13865,"Tasks":242}},"2026-02-09":{"totalActivity":13833,"activeUsers":259,"byType":{"Forms":13670,"Tasks":163}},"2026-02-16":{"totalActivity":10315,"activeUsers":261,"byType":{"Forms":10200,"Tasks":115}},"2026-02-23":{"totalActivity":9965,"activeUsers":256,"byType":{"Forms":9802,"Tasks":163}},"2026-03-02":{"totalActivity":9552,"activeUsers":255,"byType":{"Forms":9411,"Tasks":141}},"2026-03-09":{"totalActivity":8652,"activeUsers":261,"byType":{"Forms":8433,"Tasks":219}}},"Maestro Pizza UAE":{"2025-12-15":{"totalActivity":37,"activeUsers":15,"byType":{"Announcements":0,"Forms":37,"Tasks":0}},"2025-12-22":{"totalActivity":34,"activeUsers":10,"byType":{"Forms":32,"Tasks":2}},"2025-12-29":{"totalActivity":25,"activeUsers":11,"byType":{"Forms":17,"Tasks":8}},"2026-01-05":{"totalActivity":12,"activeUsers":8,"byType":{"Forms":11,"Tasks":1}},"2026-01-12":{"totalActivity":33,"activeUsers":7,"byType":{"Forms":17,"Tasks":16}},"2026-01-19":{"totalActivity":15,"activeUsers":8,"byType":{"Forms":14,"Tasks":1}},"2026-01-26":{"totalActivity":41,"activeUsers":26,"byType":{"Forms":25,"Tasks":16}},"2026-02-02":{"totalActivity":181,"activeUsers":28,"byType":{"Forms":146,"Tasks":35}},"2026-02-09":{"totalActivity":224,"activeUsers":31,"byType":{"Forms":216,"Tasks":8}},"2026-02-16":{"totalActivity":169,"activeUsers":22,"byType":{"Forms":150,"Tasks":19}},"2026-02-23":{"totalActivity":239,"activeUsers":29,"byType":{"Forms":225,"Tasks":14}},"2026-03-02":{"totalActivity":192,"activeUsers":23,"byType":{"Announcements":0,"Forms":191,"Tasks":1}},"2026-03-09":{"totalActivity":137,"activeUsers":19,"byType":{"Forms":137,"Tasks":0}}},"Main Squeeze Juice":{"2025-12-15":{"totalActivity":1247,"activeUsers":35,"byType":{"Announcements":55,"Forms":1126,"New Learn":38,"Tasks":28}},"2025-12-22":{"totalActivity":1003,"activeUsers":53,"byType":{"Announcements":61,"Forms":886,"New Learn":37,"Tasks":19}},"2025-12-29":{"totalActivity":1362,"activeUsers":151,"byType":{"Announcements":121,"Forms":1084,"Guides":2,"New Learn":147,"Tasks":8}},"2026-01-05":{"totalActivity":1369,"activeUsers":87,"byType":{"Announcements":101,"Forms":1086,"New Learn":173,"Tasks":9}},"2026-01-12":{"totalActivity":1072,"activeUsers":34,"byType":{"Announcements":63,"Forms":958,"New Learn":43,"Tasks":8}},"2026-01-19":{"totalActivity":740,"activeUsers":27,"byType":{"Announcements":11,"Forms":685,"New Learn":36,"Tasks":8}},"2026-01-26":{"totalActivity":750,"activeUsers":29,"byType":{"Announcements":18,"Forms":655,"New Learn":74,"Tasks":3}},"2026-02-02":{"totalActivity":842,"activeUsers":33,"byType":{"Announcements":45,"Forms":698,"Guides":1,"New Learn":95,"Tasks":3}},"2026-02-09":{"totalActivity":817,"activeUsers":23,"byType":{"Announcements":12,"Forms":698,"New Learn":106,"Tasks":1}},"2026-02-16":{"totalActivity":680,"activeUsers":23,"byType":{"Announcements":8,"Forms":646,"New Learn":17,"Tasks":9}},"2026-02-23":{"totalActivity":680,"activeUsers":24,"byType":{"Announcements":26,"Forms":653,"Tasks":1}},"2026-03-02":{"totalActivity":762,"activeUsers":22,"byType":{"Announcements":6,"Forms":666,"Guides":1,"New Learn":84,"Tasks":5}},"2026-03-09":{"totalActivity":623,"activeUsers":37,"byType":{"Announcements":53,"Forms":551,"New Learn":17,"Tasks":2}}},"MyGym":{"2025-12-15":{"totalActivity":171,"activeUsers":37,"byType":{"Announcements":19,"Attendance":140,"Forms":8,"New Learn":4}},"2025-12-22":{"totalActivity":86,"activeUsers":24,"byType":{"Announcements":6,"Attendance":73,"Forms":1,"New Learn":3,"Tasks":3}},"2025-12-29":{"totalActivity":111,"activeUsers":32,"byType":{"Announcements":7,"Attendance":85,"New Learn":10,"Tasks":9}},"2026-01-05":{"totalActivity":192,"activeUsers":37,"byType":{"Announcements":20,"Attendance":161,"Forms":5,"New Learn":3,"Tasks":3}},"2026-01-12":{"totalActivity":175,"activeUsers":34,"byType":{"Announcements":13,"Attendance":145,"Forms":1,"New Learn":8,"Tasks":8}},"2026-01-19":{"totalActivity":199,"activeUsers":36,"byType":{"Announcements":27,"Attendance":144,"New Learn":22,"Tasks":6}},"2026-01-26":{"totalActivity":165,"activeUsers":32,"byType":{"Announcements":17,"Attendance":135,"Forms":8,"New Learn":4,"Tasks":1}},"2026-02-02":{"totalActivity":198,"activeUsers":35,"byType":{"Announcements":15,"Attendance":144,"Forms":10,"New Learn":22,"Tasks":7}},"2026-02-09":{"totalActivity":183,"activeUsers":33,"byType":{"Announcements":28,"Attendance":136,"Compliments":3,"Forms":2,"New Learn":8,"Tasks":6}},"2026-02-16":{"totalActivity":174,"activeUsers":33,"byType":{"Announcements":10,"Attendance":142,"Forms":4,"New Learn":9,"Tasks":9}},"2026-02-23":{"totalActivity":193,"activeUsers":31,"byType":{"Announcements":38,"Attendance":139,"Forms":4,"New Learn":7,"Tasks":5}},"2026-03-02":{"totalActivity":184,"activeUsers":38,"byType":{"Announcements":17,"Attendance":152,"Forms":1,"New Learn":11,"Tasks":3}},"2026-03-09":{"totalActivity":186,"activeUsers":34,"byType":{"Announcements":23,"Attendance":136,"Forms":16,"New Learn":9,"Tasks":2}}},"Noon":{"2025-12-15":{"totalActivity":90180,"activeUsers":10148,"byType":{"Announcements":29665,"Attendance":345,"Forms":60094,"Issues":5,"New Learn":57,"Polls":14}},"2025-12-22":{"totalActivity":87517,"activeUsers":9779,"byType":{"Announcements":22607,"Attendance":312,"Forms":64542,"Issues":8,"New Learn":45,"Polls":3}},"2025-12-29":{"totalActivity":93746,"activeUsers":10968,"byType":{"Announcements":28232,"Attendance":326,"Forms":65068,"Issues":18,"New Learn":95,"Polls":7}},"2026-01-05":{"totalActivity":80934,"activeUsers":10578,"byType":{"Announcements":9167,"Attendance":301,"Forms":71386,"Issues":10,"New Learn":65,"Polls":5}},"2026-01-12":{"totalActivity":85026,"activeUsers":10570,"byType":{"Announcements":11190,"Attendance":325,"Forms":73443,"Issues":19,"New Learn":46,"Polls":3}},"2026-01-19":{"totalActivity":79875,"activeUsers":10300,"byType":{"Announcements":6770,"Attendance":298,"Forms":72763,"Issues":5,"New Learn":37,"Polls":2}},"2026-01-26":{"totalActivity":89757,"activeUsers":10473,"byType":{"Announcements":14837,"Attendance":302,"Forms":74364,"Issues":10,"New Learn":235,"Polls":9}},"2026-02-02":{"totalActivity":78009,"activeUsers":10454,"byType":{"Announcements":2529,"Attendance":320,"Forms":74157,"Issues":6,"New Learn":949,"Polls":48}},"2026-02-09":{"totalActivity":106998,"activeUsers":10481,"byType":{"Announcements":29989,"Attendance":309,"Forms":76185,"Issues":3,"New Learn":509,"Polls":3}},"2026-02-16":{"totalActivity":99707,"activeUsers":11131,"byType":{"Announcements":25423,"Attendance":318,"Forms":73427,"Issues":7,"New Learn":525,"Polls":7}},"2026-02-23":{"totalActivity":83368,"activeUsers":10143,"byType":{"Announcements":11607,"Attendance":307,"Forms":71382,"Issues":4,"New Learn":67,"Polls":1}},"2026-03-02":{"totalActivity":80504,"activeUsers":10029,"byType":{"Announcements":8181,"Attendance":325,"Forms":71936,"Issues":5,"New Learn":32,"Old Learn":1,"Polls":24}},"2026-03-09":{"totalActivity":69743,"activeUsers":9832,"byType":{"Announcements":5328,"Attendance":281,"Forms":63850,"Issues":5,"New Learn":277,"Polls":2}}},"Noon Minutes":{"2025-12-15":{"totalActivity":2164,"activeUsers":1177,"byType":{"Announcements":1076,"Compliments":1,"Guides":17,"New Learn":1070}},"2025-12-22":{"totalActivity":2951,"activeUsers":307,"byType":{"Announcements":1184,"Guides":11,"New Learn":1756}},"2025-12-29":{"totalActivity":1014,"activeUsers":116,"byType":{"Announcements":358,"Guides":15,"New Learn":641}},"2026-01-05":{"totalActivity":1563,"activeUsers":1093,"byType":{"Announcements":658,"Guides":17,"New Learn":888}},"2026-01-12":{"totalActivity":1381,"activeUsers":1148,"byType":{"Announcements":938,"Guides":39,"New Learn":404}},"2026-01-19":{"totalActivity":795,"activeUsers":295,"byType":{"Announcements":761,"Guides":18,"New Learn":16}},"2026-01-26":{"totalActivity":387,"activeUsers":106,"byType":{"Announcements":378,"Guides":9}},"2026-02-02":{"totalActivity":1146,"activeUsers":277,"byType":{"Announcements":1125,"Guides":21}},"2026-02-09":{"totalActivity":597,"activeUsers":1062,"byType":{"Announcements":587,"Guides":10}},"2026-02-16":{"totalActivity":268,"activeUsers":133,"byType":{"Announcements":260,"Guides":8}},"2026-02-23":{"totalActivity":422,"activeUsers":945,"byType":{"Announcements":414,"Guides":8}},"2026-03-02":{"totalActivity":520,"activeUsers":1077,"byType":{"Announcements":392,"Guides":87,"Polls":41}},"2026-03-09":{"totalActivity":203,"activeUsers":100,"byType":{"Announcements":185,"Guides":12,"Polls":6}}},"Noon Minutes Last Mile":{"2025-12-15":{"totalActivity":1325,"activeUsers":225,"byType":{"Announcements":594,"Compliments":1,"Guides":38,"New Learn":692}},"2025-12-22":{"totalActivity":1637,"activeUsers":213,"byType":{"Announcements":558,"Compliments":2,"Guides":41,"New Learn":1036}},"2025-12-29":{"totalActivity":1266,"activeUsers":166,"byType":{"NaN":0,"Announcements":421,"Guides":28,"New Learn":817}},"2026-01-05":{"totalActivity":1040,"activeUsers":145,"byType":{"Announcements":380,"Compliments":1,"Guides":31,"New Learn":628}},"2026-01-12":{"totalActivity":1016,"activeUsers":143,"byType":{"Announcements":310,"Guides":31,"New Learn":675}},"2026-01-19":{"totalActivity":354,"activeUsers":130,"byType":{"Announcements":277,"Guides":18,"New Learn":59}},"2026-01-26":{"totalActivity":338,"activeUsers":116,"byType":{"Announcements":310,"Compliments":1,"Guides":27}},"2026-02-02":{"totalActivity":362,"activeUsers":114,"byType":{"Announcements":332,"Guides":30}},"2026-02-09":{"totalActivity":361,"activeUsers":124,"byType":{"Announcements":325,"Compliments":3,"Guides":33}},"2026-02-16":{"totalActivity":199,"activeUsers":94,"byType":{"Announcements":169,"Guides":30}},"2026-02-23":{"totalActivity":661,"activeUsers":1445,"byType":{"Announcements":641,"Guides":20}},"2026-03-02":{"totalActivity":1236,"activeUsers":1656,"byType":{"Announcements":1200,"Compliments":1,"Guides":35}},"2026-03-09":{"totalActivity":1573,"activeUsers":1574,"byType":{"Announcements":1553,"Guides":20}}},"Rappi":{"2025-12-15":{"totalActivity":629,"activeUsers":142,"byType":{"Announcements":20,"Guides":2,"Issues":1,"New Learn":606}},"2025-12-22":{"totalActivity":946,"activeUsers":1785,"byType":{"NaN":0,"Announcements":547,"Guides":3,"New Learn":396}},"2025-12-29":{"totalActivity":840,"activeUsers":1731,"byType":{"NaN":0,"Announcements":578,"Guides":1,"New Learn":261}},"2026-01-05":{"totalActivity":813,"activeUsers":188,"byType":{"NaN":0,"Announcements":284,"Guides":3,"New Learn":526}},"2026-01-12":{"totalActivity":480,"activeUsers":141,"byType":{"NaN":0,"Announcements":233,"Guides":3,"New Learn":244}},"2026-01-19":{"totalActivity":1099,"activeUsers":242,"byType":{"NaN":0,"Announcements":447,"Guides":13,"Issues":2,"New Learn":637}},"2026-01-26":{"totalActivity":285,"activeUsers":67,"byType":{"NaN":0,"Announcements":122,"Guides":11,"New Learn":152}},"2026-02-02":{"totalActivity":719,"activeUsers":146,"byType":{"NaN":0,"Announcements":137,"Guides":14,"New Learn":568}},"2026-02-09":{"totalActivity":790,"activeUsers":1511,"byType":{"NaN":0,"Announcements":495,"Guides":28,"New Learn":267}},"2026-02-16":{"totalActivity":473,"activeUsers":152,"byType":{"NaN":0,"Announcements":192,"Guides":4,"New Learn":275,"Tasks":2}},"2026-02-23":{"totalActivity":2124,"activeUsers":1698,"byType":{"NaN":0,"Announcements":1325,"Attendance":3,"Guides":8,"Issues":2,"New Learn":786}},"2026-03-02":{"totalActivity":985,"activeUsers":270,"byType":{"NaN":0,"Announcements":416,"Guides":12,"New Learn":557}},"2026-03-09":{"totalActivity":747,"activeUsers":165,"byType":{"NaN":0,"Announcements":217,"Guides":1,"Issues":0,"New Learn":529}}},"Rappi - Staging Org":{"2026-02-23":{"totalActivity":6,"activeUsers":1,"byType":{"NaN":0,"Announcements":0,"Attendance":1,"Forms":1,"Guides":1,"Issues":1,"New Learn":1,"Polls":0,"Tasks":1}},"2026-03-02":{"totalActivity":16,"activeUsers":1,"byType":{"Announcements":1,"New Learn":15}},"2026-03-09":{"totalActivity":0,"activeUsers":0,"byType":{"Announcements":0}}},"SAO":{"2025-12-15":{"totalActivity":247,"activeUsers":7,"byType":{"Announcements":0,"Forms":219,"Guides":3,"Issues":24,"Tasks":1}},"2025-12-22":{"totalActivity":245,"activeUsers":9,"byType":{"Announcements":2,"Forms":220,"Guides":4,"Issues":18,"New Learn":1}},"2025-12-29":{"totalActivity":268,"activeUsers":9,"byType":{"Announcements":1,"Forms":234,"Issues":33}},"2026-01-05":{"totalActivity":323,"activeUsers":11,"byType":{"Announcements":0,"Forms":259,"Issues":61,"Tasks":3}},"2026-01-12":{"totalActivity":296,"activeUsers":8,"byType":{"Announcements":1,"Forms":269,"Guides":1,"Issues":24,"New Learn":1,"Tasks":0}},"2026-01-19":{"totalActivity":299,"activeUsers":10,"byType":{"Announcements":1,"Forms":268,"Guides":0,"Issues":26,"New Learn":1,"Tasks":3}},"2026-01-26":{"totalActivity":321,"activeUsers":9,"byType":{"Forms":293,"Issues":28,"Tasks":0}},"2026-02-02":{"totalActivity":297,"activeUsers":9,"byType":{"Announcements":0,"Forms":274,"Guides":9,"Issues":14}},"2026-02-09":{"totalActivity":378,"activeUsers":11,"byType":{"Announcements":0,"Forms":300,"Guides":0,"Issues":76,"New Learn":1,"Tasks":1}},"2026-02-16":{"totalActivity":215,"activeUsers":8,"byType":{"Forms":187,"Guides":4,"Issues":24,"Tasks":0}},"2026-02-23":{"totalActivity":175,"activeUsers":11,"byType":{"Forms":130,"Guides":3,"Issues":41,"Tasks":1}},"2026-03-02":{"totalActivity":189,"activeUsers":8,"byType":{"Forms":151,"Guides":4,"Issues":32,"Tasks":2}},"2026-03-09":{"totalActivity":108,"activeUsers":7,"byType":{"Forms":92,"Guides":1,"Issues":14,"Tasks":1}}},"Shelby's":{"2025-12-15":{"totalActivity":3,"activeUsers":1,"byType":{"Announcements":1,"New Learn":2}},"2025-12-29":{"totalActivity":2,"activeUsers":1,"byType":{"Announcements":1,"New Learn":1}},"2026-01-26":{"totalActivity":0,"activeUsers":1,"byType":{"NaN":0}}},"Swish":{"2026-02-09":{"totalActivity":0,"activeUsers":0,"byType":{"Announcements":0}},"2026-02-16":{"totalActivity":0,"activeUsers":0,"byType":{"Announcements":0}},"2026-02-23":{"totalActivity":0,"activeUsers":1,"byType":{"Announcements":0}}},"T2Pan Sourdough":{"2026-01-12":{"totalActivity":11,"activeUsers":1,"byType":{"Announcements":0,"Compliments":1,"Guides":10}},"2026-02-02":{"totalActivity":7,"activeUsers":1,"byType":{"Forms":6,"Tasks":1}},"2026-02-09":{"totalActivity":2,"activeUsers":1,"byType":{"Guides":2}},"2026-02-16":{"totalActivity":2,"activeUsers":1,"byType":{"Forms":1,"New Learn":1}}},"Tabur":{"2026-01-19":{"totalActivity":13,"activeUsers":2,"byType":{"Announcements":2,"Forms":5,"Issues":5,"Tasks":1}},"2026-01-26":{"totalActivity":21,"activeUsers":3,"byType":{"Announcements":1,"Forms":8,"Issues":3,"Tasks":9}},"2026-02-02":{"totalActivity":12,"activeUsers":3,"byType":{"Announcements":0,"Forms":10,"Tasks":2}},"2026-02-09":{"totalActivity":24,"activeUsers":2,"byType":{"Forms":23,"Tasks":1}},"2026-02-16":{"totalActivity":8,"activeUsers":2,"byType":{"Forms":8}},"2026-02-23":{"totalActivity":3,"activeUsers":1,"byType":{"Forms":3}}},"The Dugout":{"2025-12-15":{"totalActivity":30,"activeUsers":2,"byType":{"Forms":30,"Issues":0}},"2025-12-22":{"totalActivity":18,"activeUsers":2,"byType":{"Forms":18}},"2025-12-29":{"totalActivity":10,"activeUsers":2,"byType":{"Forms":10}},"2026-01-05":{"totalActivity":2,"activeUsers":1,"byType":{"Forms":2}},"2026-01-12":{"totalActivity":0,"activeUsers":1,"byType":{"Issues":0}},"2026-01-19":{"totalActivity":29,"activeUsers":2,"byType":{"Forms":29}},"2026-01-26":{"totalActivity":2,"activeUsers":1,"byType":{"Forms":2}},"2026-02-02":{"totalActivity":3,"activeUsers":1,"byType":{"Forms":3}},"2026-03-09":{"totalActivity":3,"activeUsers":1,"byType":{"Issues":3,"Polls":0}}},"Tiki Taco":{"2025-12-29":{"totalActivity":0,"activeUsers":1,"byType":{"Announcements":0}},"2026-01-05":{"totalActivity":32,"activeUsers":14,"byType":{"Announcements":12,"Compliments":2,"Forms":14,"New Learn":4}},"2026-01-12":{"totalActivity":145,"activeUsers":55,"byType":{"Announcements":64,"Compliments":5,"Forms":76}},"2026-01-19":{"totalActivity":39,"activeUsers":19,"byType":{"Announcements":21,"Forms":17,"New Learn":1}},"2026-01-26":{"totalActivity":238,"activeUsers":64,"byType":{"Announcements":180,"Forms":57,"Guides":0,"New Learn":1}},"2026-02-02":{"totalActivity":145,"activeUsers":58,"byType":{"Announcements":69,"Forms":53,"New Learn":23}},"2026-02-09":{"totalActivity":99,"activeUsers":59,"byType":{"Announcements":54,"Forms":32,"Guides":10,"New Learn":3}},"2026-02-16":{"totalActivity":206,"activeUsers":62,"byType":{"Announcements":115,"Compliments":1,"Forms":41,"Guides":9,"New Learn":40}},"2026-02-23":{"totalActivity":271,"activeUsers":64,"byType":{"Announcements":198,"Forms":27,"Guides":5,"New Learn":41}},"2026-03-02":{"totalActivity":498,"activeUsers":73,"byType":{"Announcements":296,"Forms":69,"New Learn":133}},"2026-03-09":{"totalActivity":528,"activeUsers":69,"byType":{"Announcements":219,"Forms":112,"New Learn":197}}},"Yummy Bee":{"2026-03-02":{"totalActivity":0,"activeUsers":0,"byType":{"Tasks":0}},"2026-03-09":{"totalActivity":120,"activeUsers":11,"byType":{"Announcements":2,"Forms":82,"Issues":33,"New Learn":1,"Tasks":2}}}},"latestWeekSummary":{"Address Cafe":{"totalActivity":1947,"activeUsers":59,"byActivity":{"Announcements":0,"Forms":1896,"Guides":5,"Issues":46}},"Chaska":{"totalActivity":103,"activeUsers":14,"byActivity":{"Forms":103}},"Coca Cola":{"totalActivity":785,"activeUsers":422,"byActivity":{"Announcements":776,"Guides":9}},"DANK":{"totalActivity":1656,"activeUsers":64,"byActivity":{"Announcements":0,"Forms":1632,"Issues":6,"Tasks":18}},"DPZ Kootenays":{"totalActivity":1464,"activeUsers":146,"byActivity":{"Announcements":458,"Forms":981,"Guides":23,"Tasks":2}},"Dancing Goat Coffee":{"totalActivity":240,"activeUsers":25,"byActivity":{"Announcements":0,"Forms":218,"Issues":22}},"Drive Coffee":{"totalActivity":2,"activeUsers":1,"byActivity":{"Forms":1,"Tasks":1}},"FBH Group":{"totalActivity":3252,"activeUsers":54,"byActivity":{"Announcements":0,"Forms":3152,"Issues":100,"Polls":0,"Tasks":0}},"HomePro":{"totalActivity":21661,"activeUsers":3404,"byActivity":{"Announcements":3160,"Forms":18471,"Issues":2,"Tasks":28}},"Maestro Pizza KSA":{"totalActivity":8651,"activeUsers":261,"byActivity":{"Forms":8432,"Tasks":219}},"Maestro Pizza UAE":{"totalActivity":137,"activeUsers":19,"byActivity":{"Forms":137,"Tasks":0}},"Main Squeeze Juice":{"totalActivity":623,"activeUsers":37,"byActivity":{"Announcements":53,"Forms":551,"New Learn":17,"Tasks":2}},"MyGym":{"totalActivity":186,"activeUsers":34,"byActivity":{"Announcements":23,"Attendance":136,"Forms":16,"New Learn":9,"Tasks":2}},"Noon":{"totalActivity":69527,"activeUsers":9832,"byActivity":{"Announcements":5328,"Attendance":278,"Forms":63644,"Issues":5,"New Learn":270,"Polls":2}},"Noon Minutes":{"totalActivity":203,"activeUsers":100,"byActivity":{"Announcements":185,"Guides":12,"Polls":6}},"Noon Minutes Last Mile":{"totalActivity":1573,"activeUsers":1574,"byActivity":{"Announcements":1553,"Guides":20}},"Rappi":{"totalActivity":747,"activeUsers":165,"byActivity":{"NaN":0,"Announcements":217,"Guides":1,"Issues":0,"New Learn":529}},"Rappi - Staging Org":{"totalActivity":0,"activeUsers":0,"byActivity":{"Announcements":0}},"SAO":{"totalActivity":108,"activeUsers":7,"byActivity":{"Forms":92,"Guides":1,"Issues":14,"Tasks":1}},"The Dugout":{"totalActivity":3,"activeUsers":1,"byActivity":{"Issues":3,"Polls":0}},"Tiki Taco":{"totalActivity":525,"activeUsers":69,"byActivity":{"Announcements":219,"Forms":109,"New Learn":197}},"Yummy Bee":{"totalActivity":120,"activeUsers":11,"byActivity":{"Announcements":2,"Forms":82,"Issues":33,"New Learn":1,"Tasks":2}}}};

// ─── STATE ────────────────────────────────────────────────────────────────────
let allClients = [];
let filteredClients = [];
let currentView = 'overview';
let previousView = 'overview';
let allTasks = [];
let pendingEdits = {};
let activeClientId = null;

const TASKS_KEY = 'cs_dashboard_tasks_v1';

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => { initDashboard(); });

function initDashboard() {
  showLoading(true);
  allTasks = loadTasksFromStorage();

  // Try Google Sheets first; fall back to localStorage, then hardcoded seed
  fetch(GAS_URL)
    .then(r => r.json())
    .then(data => {
      if (data.error) throw new Error(data.error);
      if (data.clients && data.clients.length > 0) {
        allClients = data.clients;
        if (data.redash) { mergeRedashData(data.redash); enrichClientsWithRedash(); }
        if (data.jira)   mergeJiraData(data.jira);
        if (data.tasks)  allTasks = data.tasks;
        saveClientsLocally(); // cache locally
        showLoading(false);
        normalizeClients();
        filteredClients = [...allClients];
        renderOverview();
        renderClientCards();
        showView('overview');
        showToast('✓ Synced from Google Sheets');
        return;
      }
      throw new Error('No clients returned');
    })
    .catch(err => {
      console.warn('Google Sheets fetch failed, falling back to localStorage:', err);
      _initFromLocal();
    });
}

function _initFromLocal() {
  try {
    // Try localStorage first; fall back to hardcoded seed data
    const stored = loadClientsFromStorage();
    if (stored) {
      allClients = stored;
    } else {
      // Seed data — first run only
      allClients = [{"id":"c01","name":"HomePro","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"https://docs.google.com/spreadsheets/d/1Q3aSuUt3zyAFDTxbHlZAwaMlLvPHYFHI33HrADvn2tQ/edit?gid=1900030974#gid=1900030974","internalProcess":"","sector":"Retail","country":"Bangkok","contractValue":37000.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Sudapa Chamod","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":4811,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":4811,"totalActivity":312906,"activeUsers":5833,"period":"2026-03-09","activities":[{"activity":"Announcements","count":3160,"users":2996},{"activity":"Forms","count":18471,"users":3404},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":28,"users":42},{"activity":"Announcements","count":7288,"users":4659},{"activity":"Forms","count":45711,"users":3649},{"activity":"Tasks","count":411,"users":844},{"activity":"Announcements","count":7102,"users":5433},{"activity":"Forms","count":18713,"users":3240},{"activity":"Issues","count":0,"users":1},{"activity":"Tasks","count":15,"users":51},{"activity":"Announcements","count":1124,"users":852},{"activity":"Forms","count":19519,"users":3251},{"activity":"Tasks","count":32,"users":73},{"activity":"None","count":0,"users":4},{"activity":"Announcements","count":2579,"users":1893},{"activity":"Forms","count":19119,"users":3254},{"activity":"Tasks","count":13,"users":28},{"activity":"None","count":0,"users":11},{"activity":"Announcements","count":2983,"users":1852},{"activity":"Forms","count":19199,"users":3256},{"activity":"Tasks","count":38,"users":52},{"activity":"None","count":0,"users":40},{"activity":"Announcements","count":6137,"users":5619},{"activity":"Forms","count":17221,"users":3176},{"activity":"Issues","count":5,"users":6},{"activity":"Tasks","count":11,"users":19},{"activity":"Announcements","count":3690,"users":2773},{"activity":"Forms","count":17961,"users":3192},{"activity":"Issues","count":1,"users":3},{"activity":"Tasks","count":15,"users":63},{"activity":"Announcements","count":5310,"users":5731},{"activity":"Forms","count":17963,"users":3268},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":32,"users":42},{"activity":"Announcements","count":4019,"users":3561},{"activity":"Forms","count":17540,"users":3247},{"activity":"Issues","count":1,"users":2},{"activity":"Tasks","count":32,"users":42},{"activity":"Announcements","count":5633,"users":5833},{"activity":"Forms","count":15340,"users":3055},{"activity":"Issues","count":1,"users":1},{"activity":"Tasks","count":21,"users":22},{"activity":"Announcements","count":3565,"users":4116},{"activity":"Forms","count":15968,"users":3042},{"activity":"Polls","count":1,"users":1},{"activity":"Tasks","count":23,"users":33},{"activity":"Announcements","count":474,"users":271},{"activity":"Forms","count":16400,"users":3137},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":31,"users":75}]},"wauHistory":[{"period":"2025-12-15","wau":3624},{"period":"2025-12-22","wau":5182},{"period":"2025-12-29","wau":5897},{"period":"2026-01-05","wau":5355},{"period":"2026-01-12","wau":5788},{"period":"2026-01-19","wau":4894},{"period":"2026-01-26","wau":5663},{"period":"2026-02-02","wau":4298},{"period":"2026-02-09","wau":4007},{"period":"2026-02-16","wau":4003},{"period":"2026-02-23","wau":5569},{"period":"2026-03-02","wau":5582},{"period":"2026-03-09","wau":4811}],"activityHistory":[{"activity":"Announcements","count":3160,"users":2996},{"activity":"Forms","count":18471,"users":3404},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":28,"users":42},{"activity":"Announcements","count":7288,"users":4659},{"activity":"Forms","count":45711,"users":3649},{"activity":"Tasks","count":411,"users":844},{"activity":"Announcements","count":7102,"users":5433},{"activity":"Forms","count":18713,"users":3240},{"activity":"Issues","count":0,"users":1},{"activity":"Tasks","count":15,"users":51},{"activity":"Announcements","count":1124,"users":852},{"activity":"Forms","count":19519,"users":3251},{"activity":"Tasks","count":32,"users":73},{"activity":"None","count":0,"users":4},{"activity":"Announcements","count":2579,"users":1893},{"activity":"Forms","count":19119,"users":3254},{"activity":"Tasks","count":13,"users":28},{"activity":"None","count":0,"users":11},{"activity":"Announcements","count":2983,"users":1852},{"activity":"Forms","count":19199,"users":3256},{"activity":"Tasks","count":38,"users":52},{"activity":"None","count":0,"users":40},{"activity":"Announcements","count":6137,"users":5619},{"activity":"Forms","count":17221,"users":3176},{"activity":"Issues","count":5,"users":6},{"activity":"Tasks","count":11,"users":19},{"activity":"Announcements","count":3690,"users":2773},{"activity":"Forms","count":17961,"users":3192},{"activity":"Issues","count":1,"users":3},{"activity":"Tasks","count":15,"users":63},{"activity":"Announcements","count":5310,"users":5731},{"activity":"Forms","count":17963,"users":3268},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":32,"users":42},{"activity":"Announcements","count":4019,"users":3561},{"activity":"Forms","count":17540,"users":3247},{"activity":"Issues","count":1,"users":2},{"activity":"Tasks","count":32,"users":42},{"activity":"Announcements","count":5633,"users":5833},{"activity":"Forms","count":15340,"users":3055},{"activity":"Issues","count":1,"users":1},{"activity":"Tasks","count":21,"users":22},{"activity":"Announcements","count":3565,"users":4116},{"activity":"Forms","count":15968,"users":3042},{"activity":"Polls","count":1,"users":1},{"activity":"Tasks","count":23,"users":33},{"activity":"Announcements","count":474,"users":271},{"activity":"Forms","count":16400,"users":3137},{"activity":"Issues","count":2,"users":2},{"activity":"Tasks","count":31,"users":75}]},{"id":"c02","name":"Maestro Pizza KSA","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"KSA: https://docs.google.com/spreadsheets/d/114VacRg9CgMgqcjiZRAot017TZNL2jSqcnJnAiR9RFM/edit UAE: https://docs.google.com/spreadsheets/d/1t36Z4l8u622mSzUk3Ssv3Gbg58G3cRnojdf_pd1b2EU/edit","internalProcess":"Maintenance Proccess Master: https://docs.google.com/spreadsheets/d/1Ei-V50IfIsjn_E_rbRePrNhUMMEN4UEKz1OSt6nSzbI/edit?usp=sharing","sector":"","country":"","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c03","name":"Maestro Pizza UAE","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"","internalProcess":"Maintenance Proccess Master: https://docs.google.com/spreadsheets/d/1Ei-V50IfIsjn_E_rbRePrNhUMMEN4UEKz1OSt6nSzbI/edit?usp=sharing","sector":"","country":"","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c04","name":"Main Squeeze Juice","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1BuHJ2Byk3npXQQhsV8_ymc1E56pOuvmWO9hBVsMnV9U/edit?gid=1801949489#gid=1801949489","sector":"F&B","country":"USA","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":55,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":55,"totalActivity":11947,"activeUsers":151,"period":"2026-03-09","activities":[{"activity":"Announcements","count":53,"users":37},{"activity":"Forms","count":551,"users":21},{"activity":"New Learn","count":17,"users":2},{"activity":"Tasks","count":2,"users":8},{"activity":"Announcements","count":6,"users":13},{"activity":"Forms","count":666,"users":22},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":84,"users":6},{"activity":"Tasks","count":5,"users":11},{"activity":"Announcements","count":26,"users":12},{"activity":"Forms","count":653,"users":24},{"activity":"Tasks","count":1,"users":6},{"activity":"Announcements","count":8,"users":3},{"activity":"Forms","count":646,"users":23},{"activity":"New Learn","count":17,"users":3},{"activity":"Tasks","count":9,"users":12},{"activity":"Announcements","count":12,"users":14},{"activity":"Forms","count":698,"users":23},{"activity":"New Learn","count":106,"users":9},{"activity":"Tasks","count":1,"users":5},{"activity":"Announcements","count":45,"users":33},{"activity":"Forms","count":698,"users":22},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":95,"users":9},{"activity":"Tasks","count":3,"users":9},{"activity":"Announcements","count":18,"users":29},{"activity":"Forms","count":655,"users":24},{"activity":"New Learn","count":74,"users":10},{"activity":"Tasks","count":3,"users":6},{"activity":"Announcements","count":11,"users":14},{"activity":"Forms","count":685,"users":27},{"activity":"New Learn","count":36,"users":7},{"activity":"Tasks","count":8,"users":20},{"activity":"Announcements","count":63,"users":34},{"activity":"Forms","count":958,"users":23},{"activity":"New Learn","count":43,"users":11},{"activity":"Tasks","count":8,"users":6},{"activity":"Announcements","count":101,"users":87},{"activity":"Forms","count":1086,"users":24},{"activity":"New Learn","count":173,"users":58},{"activity":"Tasks","count":9,"users":14},{"activity":"Announcements","count":121,"users":151},{"activity":"Forms","count":1084,"users":23},{"activity":"Guides","count":2,"users":2},{"activity":"New Learn","count":147,"users":85},{"activity":"Tasks","count":8,"users":12},{"activity":"Announcements","count":61,"users":53},{"activity":"Forms","count":886,"users":22},{"activity":"New Learn","count":37,"users":6},{"activity":"Tasks","count":19,"users":10},{"activity":"Announcements","count":55,"users":35},{"activity":"Forms","count":1126,"users":22},{"activity":"New Learn","count":38,"users":8},{"activity":"Tasks","count":28,"users":12}]},"wauHistory":[{"period":"2025-12-15","wau":55},{"period":"2025-12-22","wau":72},{"period":"2025-12-29","wau":162},{"period":"2026-01-05","wau":101},{"period":"2026-01-12","wau":56},{"period":"2026-01-19","wau":89},{"period":"2026-01-26","wau":50},{"period":"2026-02-02","wau":55},{"period":"2026-02-09","wau":35},{"period":"2026-02-16","wau":28},{"period":"2026-02-23","wau":34},{"period":"2026-03-02","wau":36},{"period":"2026-03-09","wau":55}],"activityHistory":[{"activity":"Announcements","count":53,"users":37},{"activity":"Forms","count":551,"users":21},{"activity":"New Learn","count":17,"users":2},{"activity":"Tasks","count":2,"users":8},{"activity":"Announcements","count":6,"users":13},{"activity":"Forms","count":666,"users":22},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":84,"users":6},{"activity":"Tasks","count":5,"users":11},{"activity":"Announcements","count":26,"users":12},{"activity":"Forms","count":653,"users":24},{"activity":"Tasks","count":1,"users":6},{"activity":"Announcements","count":8,"users":3},{"activity":"Forms","count":646,"users":23},{"activity":"New Learn","count":17,"users":3},{"activity":"Tasks","count":9,"users":12},{"activity":"Announcements","count":12,"users":14},{"activity":"Forms","count":698,"users":23},{"activity":"New Learn","count":106,"users":9},{"activity":"Tasks","count":1,"users":5},{"activity":"Announcements","count":45,"users":33},{"activity":"Forms","count":698,"users":22},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":95,"users":9},{"activity":"Tasks","count":3,"users":9},{"activity":"Announcements","count":18,"users":29},{"activity":"Forms","count":655,"users":24},{"activity":"New Learn","count":74,"users":10},{"activity":"Tasks","count":3,"users":6},{"activity":"Announcements","count":11,"users":14},{"activity":"Forms","count":685,"users":27},{"activity":"New Learn","count":36,"users":7},{"activity":"Tasks","count":8,"users":20},{"activity":"Announcements","count":63,"users":34},{"activity":"Forms","count":958,"users":23},{"activity":"New Learn","count":43,"users":11},{"activity":"Tasks","count":8,"users":6},{"activity":"Announcements","count":101,"users":87},{"activity":"Forms","count":1086,"users":24},{"activity":"New Learn","count":173,"users":58},{"activity":"Tasks","count":9,"users":14},{"activity":"Announcements","count":121,"users":151},{"activity":"Forms","count":1084,"users":23},{"activity":"Guides","count":2,"users":2},{"activity":"New Learn","count":147,"users":85},{"activity":"Tasks","count":8,"users":12},{"activity":"Announcements","count":61,"users":53},{"activity":"Forms","count":886,"users":22},{"activity":"New Learn","count":37,"users":6},{"activity":"Tasks","count":19,"users":10},{"activity":"Announcements","count":55,"users":35},{"activity":"Forms","count":1126,"users":22},{"activity":"New Learn","count":38,"users":8},{"activity":"Tasks","count":28,"users":12}]},{"id":"c05","name":"Noon Food","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":0.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c06","name":"Noon Minutes","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1CZNh6nONFrRxkQMZWE0yAuYdCYobJ8S60iUdmk1zYkM/edit?usp=drive_link","sector":"Quick Commerce","country":"UAE","contractValue":0.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":109,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":109,"totalActivity":13411,"activeUsers":1177,"period":"2026-03-09","activities":[{"activity":"Announcements","count":185,"users":100},{"activity":"Guides","count":12,"users":41},{"activity":"Polls","count":6,"users":30},{"activity":"Announcements","count":392,"users":243},{"activity":"Guides","count":87,"users":1006},{"activity":"Polls","count":41,"users":1077},{"activity":"Announcements","count":414,"users":945},{"activity":"Guides","count":8,"users":6},{"activity":"Announcements","count":260,"users":133},{"activity":"Guides","count":8,"users":7},{"activity":"Announcements","count":587,"users":1062},{"activity":"Guides","count":10,"users":10},{"activity":"Announcements","count":1125,"users":277},{"activity":"Guides","count":21,"users":17},{"activity":"Announcements","count":378,"users":106},{"activity":"Guides","count":9,"users":11},{"activity":"Announcements","count":761,"users":295},{"activity":"Guides","count":18,"users":20},{"activity":"New Learn","count":16,"users":9},{"activity":"Announcements","count":938,"users":1148},{"activity":"Guides","count":39,"users":31},{"activity":"New Learn","count":404,"users":87},{"activity":"Announcements","count":658,"users":1093},{"activity":"Guides","count":17,"users":18},{"activity":"New Learn","count":888,"users":91},{"activity":"Announcements","count":358,"users":116},{"activity":"Guides","count":15,"users":14},{"activity":"New Learn","count":641,"users":68},{"activity":"Announcements","count":1184,"users":307},{"activity":"Guides","count":11,"users":15},{"activity":"New Learn","count":1756,"users":189},{"activity":"Announcements","count":1076,"users":1177},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":17,"users":12},{"activity":"New Learn","count":1070,"users":145}]},"wauHistory":[{"period":"2025-12-15","wau":1215},{"period":"2025-12-22","wau":314},{"period":"2025-12-29","wau":131},{"period":"2026-01-05","wau":1096},{"period":"2026-01-12","wau":1152},{"period":"2026-01-19","wau":542},{"period":"2026-01-26","wau":125},{"period":"2026-02-02","wau":511},{"period":"2026-02-09","wau":1066},{"period":"2026-02-16","wau":409},{"period":"2026-02-23","wau":949},{"period":"2026-03-02","wau":1093},{"period":"2026-03-09","wau":109}],"activityHistory":[{"activity":"Announcements","count":185,"users":100},{"activity":"Guides","count":12,"users":41},{"activity":"Polls","count":6,"users":30},{"activity":"Announcements","count":392,"users":243},{"activity":"Guides","count":87,"users":1006},{"activity":"Polls","count":41,"users":1077},{"activity":"Announcements","count":414,"users":945},{"activity":"Guides","count":8,"users":6},{"activity":"Announcements","count":260,"users":133},{"activity":"Guides","count":8,"users":7},{"activity":"Announcements","count":587,"users":1062},{"activity":"Guides","count":10,"users":10},{"activity":"Announcements","count":1125,"users":277},{"activity":"Guides","count":21,"users":17},{"activity":"Announcements","count":378,"users":106},{"activity":"Guides","count":9,"users":11},{"activity":"Announcements","count":761,"users":295},{"activity":"Guides","count":18,"users":20},{"activity":"New Learn","count":16,"users":9},{"activity":"Announcements","count":938,"users":1148},{"activity":"Guides","count":39,"users":31},{"activity":"New Learn","count":404,"users":87},{"activity":"Announcements","count":658,"users":1093},{"activity":"Guides","count":17,"users":18},{"activity":"New Learn","count":888,"users":91},{"activity":"Announcements","count":358,"users":116},{"activity":"Guides","count":15,"users":14},{"activity":"New Learn","count":641,"users":68},{"activity":"Announcements","count":1184,"users":307},{"activity":"Guides","count":11,"users":15},{"activity":"New Learn","count":1756,"users":189},{"activity":"Announcements","count":1076,"users":1177},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":17,"users":12},{"activity":"New Learn","count":1070,"users":145}]},{"id":"c07","name":"Noon Minutes Last Mile","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"Quick Commerce","country":"UAE","contractValue":0.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":1574,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":1574,"totalActivity":11368,"activeUsers":1656,"period":"2026-03-09","activities":[{"activity":"Announcements","count":1553,"users":1574},{"activity":"Guides","count":20,"users":20},{"activity":"Announcements","count":1200,"users":1656},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":35,"users":35},{"activity":"Announcements","count":641,"users":1445},{"activity":"Guides","count":20,"users":20},{"activity":"Announcements","count":169,"users":94},{"activity":"Guides","count":30,"users":30},{"activity":"Announcements","count":325,"users":124},{"activity":"Compliments","count":3,"users":1},{"activity":"Guides","count":33,"users":33},{"activity":"Announcements","count":332,"users":114},{"activity":"Guides","count":30,"users":30},{"activity":"Announcements","count":310,"users":116},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":27,"users":27},{"activity":"Announcements","count":277,"users":130},{"activity":"Guides","count":18,"users":18},{"activity":"New Learn","count":59,"users":10},{"activity":"Announcements","count":310,"users":143},{"activity":"Guides","count":31,"users":31},{"activity":"New Learn","count":675,"users":58},{"activity":"Announcements","count":380,"users":145},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":31,"users":32},{"activity":"New Learn","count":628,"users":63},{"activity":"None","count":0,"users":1},{"activity":"Announcements","count":421,"users":166},{"activity":"Guides","count":28,"users":28},{"activity":"New Learn","count":817,"users":64},{"activity":"Announcements","count":558,"users":213},{"activity":"Compliments","count":2,"users":2},{"activity":"Guides","count":41,"users":42},{"activity":"New Learn","count":1036,"users":82},{"activity":"Announcements","count":594,"users":225},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":38,"users":38},{"activity":"New Learn","count":692,"users":73}]},"wauHistory":[{"period":"2025-12-15","wau":226},{"period":"2025-12-22","wau":222},{"period":"2025-12-29","wau":171},{"period":"2026-01-05","wau":149},{"period":"2026-01-12","wau":146},{"period":"2026-01-19","wau":133},{"period":"2026-01-26","wau":120},{"period":"2026-02-02","wau":116},{"period":"2026-02-09","wau":127},{"period":"2026-02-16","wau":100},{"period":"2026-02-23","wau":1445},{"period":"2026-03-02","wau":1656},{"period":"2026-03-09","wau":1574}],"activityHistory":[{"activity":"Announcements","count":1553,"users":1574},{"activity":"Guides","count":20,"users":20},{"activity":"Announcements","count":1200,"users":1656},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":35,"users":35},{"activity":"Announcements","count":641,"users":1445},{"activity":"Guides","count":20,"users":20},{"activity":"Announcements","count":169,"users":94},{"activity":"Guides","count":30,"users":30},{"activity":"Announcements","count":325,"users":124},{"activity":"Compliments","count":3,"users":1},{"activity":"Guides","count":33,"users":33},{"activity":"Announcements","count":332,"users":114},{"activity":"Guides","count":30,"users":30},{"activity":"Announcements","count":310,"users":116},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":27,"users":27},{"activity":"Announcements","count":277,"users":130},{"activity":"Guides","count":18,"users":18},{"activity":"New Learn","count":59,"users":10},{"activity":"Announcements","count":310,"users":143},{"activity":"Guides","count":31,"users":31},{"activity":"New Learn","count":675,"users":58},{"activity":"Announcements","count":380,"users":145},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":31,"users":32},{"activity":"New Learn","count":628,"users":63},{"activity":"None","count":0,"users":1},{"activity":"Announcements","count":421,"users":166},{"activity":"Guides","count":28,"users":28},{"activity":"New Learn","count":817,"users":64},{"activity":"Announcements","count":558,"users":213},{"activity":"Compliments","count":2,"users":2},{"activity":"Guides","count":41,"users":42},{"activity":"New Learn","count":1036,"users":82},{"activity":"Announcements","count":594,"users":225},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":38,"users":38},{"activity":"New Learn","count":692,"users":73}]},{"id":"c08","name":"Rappi","locationCount":"","tier":"Gold","accountHealth":"Green","externalTracker":"https://docs.google.com/spreadsheets/d/121nKsY-HSuzT5UoDMIWgaAF3t-Hs4u1wdR9tj-fILBw/edit?usp=drive_link","internalProcess":"Talk Sheet: https://docs.google.com/spreadsheets/d/1V9ezZA4KXdu-tzlN8lEkG_hdj5I3j56fEM7jJ7s7VXo/edit?gid=0#gid=0 Internal SOP: https://docs.google.com/document/d/1nG7VDPst2Qkkuf23JGWXrB0eqx7mXaInQ8xsD1yUMkg/edit?tab=t.2vskrxiehxr4#heading=h.671l31lskumr Shift Check Sheet: https://docs.google.com/spreadsheets/d/11AoBL3GqaFnPe6uAf2HGoKiifr3jadHXRTcP-88DEWk/edit?usp=drive_link","sector":"Quick Commerce","country":"Mexico City","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":177,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":177,"totalActivity":10930,"activeUsers":1785,"period":"2026-03-09","activities":[{"activity":"None","count":0,"users":3},{"activity":"Announcements","count":217,"users":132},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":0,"users":1},{"activity":"New Learn","count":529,"users":165},{"activity":"None","count":0,"users":5},{"activity":"Announcements","count":416,"users":270},{"activity":"Guides","count":12,"users":4},{"activity":"New Learn","count":557,"users":140},{"activity":"None","count":0,"users":33},{"activity":"Announcements","count":1325,"users":1698},{"activity":"Attendance","count":3,"users":3},{"activity":"Guides","count":8,"users":3},{"activity":"Issues","count":2,"users":2},{"activity":"New Learn","count":786,"users":448},{"activity":"None","count":0,"users":4},{"activity":"Announcements","count":192,"users":152},{"activity":"Guides","count":4,"users":3},{"activity":"New Learn","count":275,"users":91},{"activity":"Tasks","count":2,"users":2},{"activity":"None","count":0,"users":13},{"activity":"Announcements","count":495,"users":1511},{"activity":"Guides","count":28,"users":6},{"activity":"New Learn","count":267,"users":80},{"activity":"None","count":0,"users":7},{"activity":"Announcements","count":137,"users":68},{"activity":"Guides","count":14,"users":4},{"activity":"New Learn","count":568,"users":146},{"activity":"None","count":0,"users":5},{"activity":"Announcements","count":122,"users":67},{"activity":"Guides","count":11,"users":2},{"activity":"New Learn","count":152,"users":46},{"activity":"None","count":0,"users":15},{"activity":"Announcements","count":447,"users":242},{"activity":"Guides","count":13,"users":7},{"activity":"Issues","count":2,"users":1},{"activity":"New Learn","count":637,"users":220},{"activity":"None","count":0,"users":17},{"activity":"Announcements","count":233,"users":141},{"activity":"Guides","count":3,"users":2},{"activity":"New Learn","count":244,"users":54},{"activity":"None","count":0,"users":8},{"activity":"Announcements","count":284,"users":188},{"activity":"Guides","count":3,"users":2},{"activity":"New Learn","count":526,"users":94},{"activity":"None","count":0,"users":40},{"activity":"Announcements","count":578,"users":1731},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":261,"users":56},{"activity":"None","count":0,"users":184},{"activity":"Announcements","count":547,"users":1785},{"activity":"Guides","count":3,"users":3},{"activity":"New Learn","count":396,"users":103},{"activity":"Announcements","count":20,"users":9},{"activity":"Guides","count":2,"users":3},{"activity":"Issues","count":1,"users":1},{"activity":"New Learn","count":606,"users":142}]},"wauHistory":[{"period":"2025-12-15","wau":14},{"period":"2025-12-22","wau":1785},{"period":"2025-12-29","wau":1732},{"period":"2026-01-05","wau":200},{"period":"2026-01-12","wau":144},{"period":"2026-01-19","wau":279},{"period":"2026-01-26","wau":71},{"period":"2026-02-02","wau":77},{"period":"2026-02-09","wau":1511},{"period":"2026-02-16","wau":157},{"period":"2026-02-23","wau":1705},{"period":"2026-03-02","wau":273},{"period":"2026-03-09","wau":177}],"activityHistory":[{"activity":"None","count":0,"users":3},{"activity":"Announcements","count":217,"users":132},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":0,"users":1},{"activity":"New Learn","count":529,"users":165},{"activity":"None","count":0,"users":5},{"activity":"Announcements","count":416,"users":270},{"activity":"Guides","count":12,"users":4},{"activity":"New Learn","count":557,"users":140},{"activity":"None","count":0,"users":33},{"activity":"Announcements","count":1325,"users":1698},{"activity":"Attendance","count":3,"users":3},{"activity":"Guides","count":8,"users":3},{"activity":"Issues","count":2,"users":2},{"activity":"New Learn","count":786,"users":448},{"activity":"None","count":0,"users":4},{"activity":"Announcements","count":192,"users":152},{"activity":"Guides","count":4,"users":3},{"activity":"New Learn","count":275,"users":91},{"activity":"Tasks","count":2,"users":2},{"activity":"None","count":0,"users":13},{"activity":"Announcements","count":495,"users":1511},{"activity":"Guides","count":28,"users":6},{"activity":"New Learn","count":267,"users":80},{"activity":"None","count":0,"users":7},{"activity":"Announcements","count":137,"users":68},{"activity":"Guides","count":14,"users":4},{"activity":"New Learn","count":568,"users":146},{"activity":"None","count":0,"users":5},{"activity":"Announcements","count":122,"users":67},{"activity":"Guides","count":11,"users":2},{"activity":"New Learn","count":152,"users":46},{"activity":"None","count":0,"users":15},{"activity":"Announcements","count":447,"users":242},{"activity":"Guides","count":13,"users":7},{"activity":"Issues","count":2,"users":1},{"activity":"New Learn","count":637,"users":220},{"activity":"None","count":0,"users":17},{"activity":"Announcements","count":233,"users":141},{"activity":"Guides","count":3,"users":2},{"activity":"New Learn","count":244,"users":54},{"activity":"None","count":0,"users":8},{"activity":"Announcements","count":284,"users":188},{"activity":"Guides","count":3,"users":2},{"activity":"New Learn","count":526,"users":94},{"activity":"None","count":0,"users":40},{"activity":"Announcements","count":578,"users":1731},{"activity":"Guides","count":1,"users":1},{"activity":"New Learn","count":261,"users":56},{"activity":"None","count":0,"users":184},{"activity":"Announcements","count":547,"users":1785},{"activity":"Guides","count":3,"users":3},{"activity":"New Learn","count":396,"users":103},{"activity":"Announcements","count":20,"users":9},{"activity":"Guides","count":2,"users":3},{"activity":"Issues","count":1,"users":1},{"activity":"New Learn","count":606,"users":142}]},{"id":"c09","name":"Address Cafe","locationCount":"","tier":"Gold","accountHealth":"Red","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1koyoULNssd7_cWIgd-aPXZefa_oBYTmFgwq_sn-nYHM/edit?usp=drive_link","sector":"F&B","country":"Saudi Arabia","contractValue":16000.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":86,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":86,"totalActivity":52568,"activeUsers":372,"period":"2026-03-09","activities":[{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1896,"users":59},{"activity":"Guides","count":5,"users":2},{"activity":"Issues","count":46,"users":55},{"activity":"Announcements","count":8,"users":6},{"activity":"Forms","count":2657,"users":60},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":94,"users":58},{"activity":"Forms","count":583,"users":9},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":552,"users":42},{"activity":"Guides","count":8,"users":2},{"activity":"Issues","count":5,"users":32},{"activity":"Announcements","count":4,"users":9},{"activity":"Forms","count":2948,"users":90},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":152,"users":64},{"activity":"Announcements","count":21,"users":9},{"activity":"Forms","count":2999,"users":99},{"activity":"Guides","count":10,"users":1},{"activity":"Issues","count":162,"users":67},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":1,"users":5},{"activity":"Forms","count":3079,"users":92},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":153,"users":63},{"activity":"Announcements","count":5,"users":6},{"activity":"Forms","count":2954,"users":104},{"activity":"Guides","count":2,"users":4},{"activity":"Issues","count":110,"users":65},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":3,"users":7},{"activity":"Forms","count":2962,"users":104},{"activity":"Guides","count":0,"users":3},{"activity":"Issues","count":179,"users":68},{"activity":"Announcements","count":13,"users":13},{"activity":"Forms","count":3110,"users":125},{"activity":"Guides","count":1,"users":2},{"activity":"Issues","count":215,"users":71},{"activity":"Announcements","count":10,"users":15},{"activity":"Forms","count":6435,"users":336},{"activity":"Guides","count":1,"users":3},{"activity":"Issues","count":215,"users":85},{"activity":"Tasks","count":37,"users":10},{"activity":"Announcements","count":16,"users":24},{"activity":"Forms","count":9571,"users":372},{"activity":"Guides","count":8,"users":8},{"activity":"Issues","count":580,"users":134},{"activity":"Tasks","count":104,"users":29},{"activity":"Announcements","count":26,"users":35},{"activity":"Forms","count":9878,"users":371},{"activity":"Guides","count":13,"users":11},{"activity":"Issues","count":583,"users":170},{"activity":"Tasks","count":147,"users":29}]},"wauHistory":[{"period":"2025-12-15","wau":394},{"period":"2025-12-22","wau":391},{"period":"2025-12-29","wau":370},{"period":"2026-01-05","wau":169},{"period":"2026-01-12","wau":148},{"period":"2026-01-19","wau":144},{"period":"2026-01-26","wau":138},{"period":"2026-02-02","wau":136},{"period":"2026-02-09","wau":132},{"period":"2026-02-16","wau":66},{"period":"2026-02-23","wau":9},{"period":"2026-03-02","wau":90},{"period":"2026-03-09","wau":86}],"activityHistory":[{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1896,"users":59},{"activity":"Guides","count":5,"users":2},{"activity":"Issues","count":46,"users":55},{"activity":"Announcements","count":8,"users":6},{"activity":"Forms","count":2657,"users":60},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":94,"users":58},{"activity":"Forms","count":583,"users":9},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":552,"users":42},{"activity":"Guides","count":8,"users":2},{"activity":"Issues","count":5,"users":32},{"activity":"Announcements","count":4,"users":9},{"activity":"Forms","count":2948,"users":90},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":152,"users":64},{"activity":"Announcements","count":21,"users":9},{"activity":"Forms","count":2999,"users":99},{"activity":"Guides","count":10,"users":1},{"activity":"Issues","count":162,"users":67},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":1,"users":5},{"activity":"Forms","count":3079,"users":92},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":153,"users":63},{"activity":"Announcements","count":5,"users":6},{"activity":"Forms","count":2954,"users":104},{"activity":"Guides","count":2,"users":4},{"activity":"Issues","count":110,"users":65},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":3,"users":7},{"activity":"Forms","count":2962,"users":104},{"activity":"Guides","count":0,"users":3},{"activity":"Issues","count":179,"users":68},{"activity":"Announcements","count":13,"users":13},{"activity":"Forms","count":3110,"users":125},{"activity":"Guides","count":1,"users":2},{"activity":"Issues","count":215,"users":71},{"activity":"Announcements","count":10,"users":15},{"activity":"Forms","count":6435,"users":336},{"activity":"Guides","count":1,"users":3},{"activity":"Issues","count":215,"users":85},{"activity":"Tasks","count":37,"users":10},{"activity":"Announcements","count":16,"users":24},{"activity":"Forms","count":9571,"users":372},{"activity":"Guides","count":8,"users":8},{"activity":"Issues","count":580,"users":134},{"activity":"Tasks","count":104,"users":29},{"activity":"Announcements","count":26,"users":35},{"activity":"Forms","count":9878,"users":371},{"activity":"Guides","count":13,"users":11},{"activity":"Issues","count":583,"users":170},{"activity":"Tasks","count":147,"users":29}]},{"id":"c10","name":"FBH","locationCount":"","tier":"Silver","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":7200.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Wafa","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c11","name":"DANK","locationCount":"","tier":"Silver","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1Eumt0MdDf8-gAEhWE9f2AttwHRHFGO7HnyVxNrT8buI/edit?usp=drive_link","sector":"F&B","country":"Saudi Arabia","contractValue":0.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":73,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":73,"totalActivity":20967,"activeUsers":64,"period":"2026-03-09","activities":[{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1632,"users":64},{"activity":"Issues","count":6,"users":7},{"activity":"Tasks","count":18,"users":17},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":1452,"users":55},{"activity":"Issues","count":2,"users":3},{"activity":"Tasks","count":4,"users":9},{"activity":"Announcements","count":1,"users":4},{"activity":"Forms","count":1771,"users":62},{"activity":"Issues","count":6,"users":9},{"activity":"Tasks","count":24,"users":14},{"activity":"Forms","count":1481,"users":57},{"activity":"Issues","count":2,"users":4},{"activity":"Tasks","count":23,"users":16},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1646,"users":58},{"activity":"Issues","count":2,"users":3},{"activity":"Tasks","count":35,"users":24},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1613,"users":59},{"activity":"Issues","count":1,"users":1},{"activity":"Tasks","count":25,"users":20},{"activity":"Forms","count":1782,"users":55},{"activity":"Issues","count":1,"users":3},{"activity":"Tasks","count":30,"users":22},{"activity":"Forms","count":1605,"users":57},{"activity":"Issues","count":6,"users":5},{"activity":"Tasks","count":23,"users":19},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":1474,"users":56},{"activity":"Issues","count":5,"users":8},{"activity":"Tasks","count":63,"users":21},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1492,"users":50},{"activity":"Issues","count":3,"users":4},{"activity":"Tasks","count":28,"users":16},{"activity":"Announcements","count":0,"users":5},{"activity":"Forms","count":1469,"users":54},{"activity":"Issues","count":20,"users":10},{"activity":"Tasks","count":100,"users":21},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1502,"users":56},{"activity":"Issues","count":30,"users":12},{"activity":"Tasks","count":50,"users":22},{"activity":"Announcements","count":0,"users":7},{"activity":"Forms","count":1469,"users":58},{"activity":"Issues","count":10,"users":4},{"activity":"Tasks","count":59,"users":25}]},"wauHistory":[{"period":"2025-12-15","wau":71},{"period":"2025-12-22","wau":69},{"period":"2025-12-29","wau":91},{"period":"2026-01-05","wau":63},{"period":"2026-01-12","wau":95},{"period":"2026-01-19","wau":66},{"period":"2026-01-26","wau":62},{"period":"2026-02-02","wau":92},{"period":"2026-02-09","wau":92},{"period":"2026-02-16","wau":71},{"period":"2026-02-23","wau":72},{"period":"2026-03-02","wau":90},{"period":"2026-03-09","wau":73}],"activityHistory":[{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1632,"users":64},{"activity":"Issues","count":6,"users":7},{"activity":"Tasks","count":18,"users":17},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":1452,"users":55},{"activity":"Issues","count":2,"users":3},{"activity":"Tasks","count":4,"users":9},{"activity":"Announcements","count":1,"users":4},{"activity":"Forms","count":1771,"users":62},{"activity":"Issues","count":6,"users":9},{"activity":"Tasks","count":24,"users":14},{"activity":"Forms","count":1481,"users":57},{"activity":"Issues","count":2,"users":4},{"activity":"Tasks","count":23,"users":16},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1646,"users":58},{"activity":"Issues","count":2,"users":3},{"activity":"Tasks","count":35,"users":24},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":1613,"users":59},{"activity":"Issues","count":1,"users":1},{"activity":"Tasks","count":25,"users":20},{"activity":"Forms","count":1782,"users":55},{"activity":"Issues","count":1,"users":3},{"activity":"Tasks","count":30,"users":22},{"activity":"Forms","count":1605,"users":57},{"activity":"Issues","count":6,"users":5},{"activity":"Tasks","count":23,"users":19},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":1474,"users":56},{"activity":"Issues","count":5,"users":8},{"activity":"Tasks","count":63,"users":21},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1492,"users":50},{"activity":"Issues","count":3,"users":4},{"activity":"Tasks","count":28,"users":16},{"activity":"Announcements","count":0,"users":5},{"activity":"Forms","count":1469,"users":54},{"activity":"Issues","count":20,"users":10},{"activity":"Tasks","count":100,"users":21},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":1502,"users":56},{"activity":"Issues","count":30,"users":12},{"activity":"Tasks","count":50,"users":22},{"activity":"Announcements","count":0,"users":7},{"activity":"Forms","count":1469,"users":58},{"activity":"Issues","count":10,"users":4},{"activity":"Tasks","count":59,"users":25}]},{"id":"c12","name":"Coca Cola","locationCount":"","tier":"Silver","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1tRVJXiVNuLNDQade5V0OFcoqIZD5C5pw/edit?usp=drive_link&ouid=111961684231641788253&rtpof=true&sd=true","sector":"F&B","country":"Saudi Arabia","contractValue":17400.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Fahad Alfraidi","clientSince":"","nextActivityDate":"2026-01-16","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":422,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":422,"totalActivity":11649,"activeUsers":467,"period":"2026-03-09","activities":[{"activity":"Announcements","count":776,"users":422},{"activity":"Guides","count":9,"users":13},{"activity":"Announcements","count":1875,"users":437},{"activity":"Guides","count":7,"users":21},{"activity":"Announcements","count":595,"users":405},{"activity":"Compliments","count":2,"users":1},{"activity":"Guides","count":5,"users":13},{"activity":"Announcements","count":1698,"users":431},{"activity":"Guides","count":6,"users":12},{"activity":"Announcements","count":516,"users":146},{"activity":"Guides","count":3,"users":10},{"activity":"Announcements","count":686,"users":422},{"activity":"Guides","count":3,"users":9},{"activity":"Announcements","count":714,"users":429},{"activity":"Guides","count":1,"users":14},{"activity":"Announcements","count":760,"users":427},{"activity":"Guides","count":1,"users":13},{"activity":"New Learn","count":2,"users":2},{"activity":"Announcements","count":384,"users":400},{"activity":"Guides","count":8,"users":26},{"activity":"New Learn","count":14,"users":11},{"activity":"Announcements","count":321,"users":108},{"activity":"Guides","count":9,"users":55},{"activity":"New Learn","count":5,"users":5},{"activity":"Announcements","count":1853,"users":467},{"activity":"Guides","count":69,"users":381},{"activity":"New Learn","count":47,"users":26},{"activity":"Announcements","count":653,"users":438},{"activity":"Guides","count":2,"users":2},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":619,"users":460},{"activity":"New Learn","count":5,"users":5}]},"wauHistory":[{"period":"2025-12-15","wau":460},{"period":"2025-12-22","wau":438},{"period":"2025-12-29","wau":469},{"period":"2026-01-05","wau":122},{"period":"2026-01-12","wau":401},{"period":"2026-01-19","wau":427},{"period":"2026-01-26","wau":429},{"period":"2026-02-02","wau":423},{"period":"2026-02-09","wau":194},{"period":"2026-02-16","wau":431},{"period":"2026-02-23","wau":407},{"period":"2026-03-02","wau":437},{"period":"2026-03-09","wau":422}],"activityHistory":[{"activity":"Announcements","count":776,"users":422},{"activity":"Guides","count":9,"users":13},{"activity":"Announcements","count":1875,"users":437},{"activity":"Guides","count":7,"users":21},{"activity":"Announcements","count":595,"users":405},{"activity":"Compliments","count":2,"users":1},{"activity":"Guides","count":5,"users":13},{"activity":"Announcements","count":1698,"users":431},{"activity":"Guides","count":6,"users":12},{"activity":"Announcements","count":516,"users":146},{"activity":"Guides","count":3,"users":10},{"activity":"Announcements","count":686,"users":422},{"activity":"Guides","count":3,"users":9},{"activity":"Announcements","count":714,"users":429},{"activity":"Guides","count":1,"users":14},{"activity":"Announcements","count":760,"users":427},{"activity":"Guides","count":1,"users":13},{"activity":"New Learn","count":2,"users":2},{"activity":"Announcements","count":384,"users":400},{"activity":"Guides","count":8,"users":26},{"activity":"New Learn","count":14,"users":11},{"activity":"Announcements","count":321,"users":108},{"activity":"Guides","count":9,"users":55},{"activity":"New Learn","count":5,"users":5},{"activity":"Announcements","count":1853,"users":467},{"activity":"Guides","count":69,"users":381},{"activity":"New Learn","count":47,"users":26},{"activity":"Announcements","count":653,"users":438},{"activity":"Guides","count":2,"users":2},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":619,"users":460},{"activity":"New Learn","count":5,"users":5}]},{"id":"c13","name":"DPZ","locationCount":"","tier":"Silver","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":1980.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c14","name":"MyGym","locationCount":"","tier":"Silver","accountHealth":"Red","externalTracker":"","internalProcess":"","sector":"Other","country":"USA","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":45,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":45,"totalActivity":2217,"activeUsers":38,"period":"2026-03-09","activities":[{"activity":"Announcements","count":23,"users":13},{"activity":"Attendance","count":136,"users":34},{"activity":"Forms","count":16,"users":3},{"activity":"New Learn","count":9,"users":3},{"activity":"Tasks","count":2,"users":3},{"activity":"Announcements","count":17,"users":10},{"activity":"Attendance","count":152,"users":38},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":11,"users":3},{"activity":"Tasks","count":3,"users":4},{"activity":"Announcements","count":38,"users":19},{"activity":"Attendance","count":139,"users":31},{"activity":"Forms","count":4,"users":1},{"activity":"New Learn","count":7,"users":7},{"activity":"Tasks","count":5,"users":3},{"activity":"Announcements","count":10,"users":21},{"activity":"Attendance","count":142,"users":33},{"activity":"Forms","count":4,"users":1},{"activity":"New Learn","count":9,"users":3},{"activity":"Tasks","count":9,"users":6},{"activity":"Announcements","count":28,"users":14},{"activity":"Attendance","count":136,"users":33},{"activity":"Compliments","count":3,"users":1},{"activity":"Forms","count":2,"users":2},{"activity":"New Learn","count":8,"users":2},{"activity":"Tasks","count":6,"users":4},{"activity":"Announcements","count":15,"users":6},{"activity":"Attendance","count":144,"users":35},{"activity":"Forms","count":10,"users":3},{"activity":"New Learn","count":22,"users":6},{"activity":"Tasks","count":7,"users":4},{"activity":"Announcements","count":17,"users":14},{"activity":"Attendance","count":135,"users":32},{"activity":"Forms","count":8,"users":2},{"activity":"New Learn","count":4,"users":3},{"activity":"Tasks","count":1,"users":2},{"activity":"Announcements","count":27,"users":13},{"activity":"Attendance","count":144,"users":36},{"activity":"New Learn","count":22,"users":4},{"activity":"Tasks","count":6,"users":3},{"activity":"Announcements","count":13,"users":13},{"activity":"Attendance","count":145,"users":34},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":8,"users":3},{"activity":"Tasks","count":8,"users":4},{"activity":"Announcements","count":20,"users":15},{"activity":"Attendance","count":161,"users":37},{"activity":"Forms","count":5,"users":2},{"activity":"New Learn","count":3,"users":2},{"activity":"Tasks","count":3,"users":4},{"activity":"Announcements","count":7,"users":9},{"activity":"Attendance","count":85,"users":32},{"activity":"New Learn","count":10,"users":3},{"activity":"Tasks","count":9,"users":4},{"activity":"Announcements","count":6,"users":8},{"activity":"Attendance","count":73,"users":24},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":3,"users":2},{"activity":"Tasks","count":3,"users":3},{"activity":"Announcements","count":19,"users":17},{"activity":"Attendance","count":140,"users":37},{"activity":"Forms","count":8,"users":1},{"activity":"New Learn","count":4,"users":2}]},"wauHistory":[{"period":"2025-12-15","wau":42},{"period":"2025-12-22","wau":30},{"period":"2025-12-29","wau":38},{"period":"2026-01-05","wau":44},{"period":"2026-01-12","wau":43},{"period":"2026-01-19","wau":42},{"period":"2026-01-26","wau":40},{"period":"2026-02-02","wau":38},{"period":"2026-02-09","wau":39},{"period":"2026-02-16","wau":41},{"period":"2026-02-23","wau":41},{"period":"2026-03-02","wau":43},{"period":"2026-03-09","wau":45}],"activityHistory":[{"activity":"Announcements","count":23,"users":13},{"activity":"Attendance","count":136,"users":34},{"activity":"Forms","count":16,"users":3},{"activity":"New Learn","count":9,"users":3},{"activity":"Tasks","count":2,"users":3},{"activity":"Announcements","count":17,"users":10},{"activity":"Attendance","count":152,"users":38},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":11,"users":3},{"activity":"Tasks","count":3,"users":4},{"activity":"Announcements","count":38,"users":19},{"activity":"Attendance","count":139,"users":31},{"activity":"Forms","count":4,"users":1},{"activity":"New Learn","count":7,"users":7},{"activity":"Tasks","count":5,"users":3},{"activity":"Announcements","count":10,"users":21},{"activity":"Attendance","count":142,"users":33},{"activity":"Forms","count":4,"users":1},{"activity":"New Learn","count":9,"users":3},{"activity":"Tasks","count":9,"users":6},{"activity":"Announcements","count":28,"users":14},{"activity":"Attendance","count":136,"users":33},{"activity":"Compliments","count":3,"users":1},{"activity":"Forms","count":2,"users":2},{"activity":"New Learn","count":8,"users":2},{"activity":"Tasks","count":6,"users":4},{"activity":"Announcements","count":15,"users":6},{"activity":"Attendance","count":144,"users":35},{"activity":"Forms","count":10,"users":3},{"activity":"New Learn","count":22,"users":6},{"activity":"Tasks","count":7,"users":4},{"activity":"Announcements","count":17,"users":14},{"activity":"Attendance","count":135,"users":32},{"activity":"Forms","count":8,"users":2},{"activity":"New Learn","count":4,"users":3},{"activity":"Tasks","count":1,"users":2},{"activity":"Announcements","count":27,"users":13},{"activity":"Attendance","count":144,"users":36},{"activity":"New Learn","count":22,"users":4},{"activity":"Tasks","count":6,"users":3},{"activity":"Announcements","count":13,"users":13},{"activity":"Attendance","count":145,"users":34},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":8,"users":3},{"activity":"Tasks","count":8,"users":4},{"activity":"Announcements","count":20,"users":15},{"activity":"Attendance","count":161,"users":37},{"activity":"Forms","count":5,"users":2},{"activity":"New Learn","count":3,"users":2},{"activity":"Tasks","count":3,"users":4},{"activity":"Announcements","count":7,"users":9},{"activity":"Attendance","count":85,"users":32},{"activity":"New Learn","count":10,"users":3},{"activity":"Tasks","count":9,"users":4},{"activity":"Announcements","count":6,"users":8},{"activity":"Attendance","count":73,"users":24},{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":3,"users":2},{"activity":"Tasks","count":3,"users":3},{"activity":"Announcements","count":19,"users":17},{"activity":"Attendance","count":140,"users":37},{"activity":"Forms","count":8,"users":1},{"activity":"New Learn","count":4,"users":2}]},{"id":"c15","name":"Wister","locationCount":"","tier":"Silver","accountHealth":"","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1JIe9SPpSzb0IHaqGDz_WoXMvNZIhdSM4bECh4BVi8ZA/edit?usp=drive_link","sector":"","country":"","contractValue":15000.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Mirza Hashim","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"Anushka Silambu","latestWAU":0,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c16","name":"Dancing Goat Coffee","locationCount":"","tier":"Bronze","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"F&B","country":"Egypt","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":30,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":30,"totalActivity":3462,"activeUsers":25,"period":"2026-03-09","activities":[{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":218,"users":25},{"activity":"Issues","count":22,"users":6},{"activity":"Announcements","count":0,"users":0},{"activity":"Forms","count":200,"users":24},{"activity":"Issues","count":27,"users":9},{"activity":"Forms","count":216,"users":20},{"activity":"Issues","count":31,"users":7},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":234,"users":23},{"activity":"Issues","count":28,"users":9},{"activity":"Forms","count":227,"users":23},{"activity":"Issues","count":64,"users":8},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":219,"users":22},{"activity":"Issues","count":28,"users":9},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":227,"users":23},{"activity":"Issues","count":26,"users":11},{"activity":"Forms","count":252,"users":22},{"activity":"Issues","count":47,"users":7},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":254,"users":22},{"activity":"Issues","count":4,"users":6},{"activity":"Forms","count":250,"users":23},{"activity":"Issues","count":7,"users":5},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":250,"users":23},{"activity":"Issues","count":36,"users":7},{"activity":"Forms","count":259,"users":24},{"activity":"Issues","count":20,"users":8},{"activity":"Forms","count":287,"users":24},{"activity":"Issues","count":28,"users":9}]},"wauHistory":[{"period":"2025-12-15","wau":30},{"period":"2025-12-22","wau":28},{"period":"2025-12-29","wau":29},{"period":"2026-01-05","wau":27},{"period":"2026-01-12","wau":25},{"period":"2026-01-19","wau":26},{"period":"2026-01-26","wau":28},{"period":"2026-02-02","wau":28},{"period":"2026-02-09","wau":28},{"period":"2026-02-16","wau":29},{"period":"2026-02-23","wau":28},{"period":"2026-03-02","wau":32},{"period":"2026-03-09","wau":30}],"activityHistory":[{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":218,"users":25},{"activity":"Issues","count":22,"users":6},{"activity":"Announcements","count":0,"users":0},{"activity":"Forms","count":200,"users":24},{"activity":"Issues","count":27,"users":9},{"activity":"Forms","count":216,"users":20},{"activity":"Issues","count":31,"users":7},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":234,"users":23},{"activity":"Issues","count":28,"users":9},{"activity":"Forms","count":227,"users":23},{"activity":"Issues","count":64,"users":8},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":219,"users":22},{"activity":"Issues","count":28,"users":9},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":227,"users":23},{"activity":"Issues","count":26,"users":11},{"activity":"Forms","count":252,"users":22},{"activity":"Issues","count":47,"users":7},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":254,"users":22},{"activity":"Issues","count":4,"users":6},{"activity":"Forms","count":250,"users":23},{"activity":"Issues","count":7,"users":5},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":250,"users":23},{"activity":"Issues","count":36,"users":7},{"activity":"Forms","count":259,"users":24},{"activity":"Issues","count":20,"users":8},{"activity":"Forms","count":287,"users":24},{"activity":"Issues","count":28,"users":9}]},{"id":"c17","name":"SAO","locationCount":"","tier":"Bronze","accountHealth":"Green","externalTracker":"","internalProcess":"","sector":"F&B","country":"Saudi Arabia","contractValue":6295.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Amr Mostafa","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":11,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":11,"totalActivity":3361,"activeUsers":11,"period":"2026-03-09","activities":[{"activity":"Forms","count":92,"users":7},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":14,"users":7},{"activity":"Tasks","count":1,"users":1},{"activity":"Forms","count":151,"users":8},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":32,"users":8},{"activity":"Tasks","count":2,"users":2},{"activity":"Forms","count":130,"users":7},{"activity":"Guides","count":3,"users":1},{"activity":"Issues","count":41,"users":11},{"activity":"Tasks","count":1,"users":1},{"activity":"Forms","count":187,"users":6},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":24,"users":8},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":300,"users":9},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":76,"users":11},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":274,"users":6},{"activity":"Guides","count":9,"users":9},{"activity":"Issues","count":14,"users":7},{"activity":"Forms","count":293,"users":6},{"activity":"Issues","count":28,"users":9},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":268,"users":6},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":26,"users":10},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":3,"users":1},{"activity":"Announcements","count":1,"users":3},{"activity":"Forms","count":269,"users":5},{"activity":"Guides","count":1,"users":2},{"activity":"Issues","count":24,"users":8},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":259,"users":6},{"activity":"Issues","count":61,"users":11},{"activity":"Tasks","count":3,"users":2},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":234,"users":6},{"activity":"Issues","count":33,"users":9},{"activity":"Announcements","count":2,"users":2},{"activity":"Forms","count":220,"users":4},{"activity":"Guides","count":4,"users":1},{"activity":"Issues","count":18,"users":9},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":219,"users":4},{"activity":"Guides","count":3,"users":2},{"activity":"Issues","count":24,"users":7},{"activity":"Tasks","count":1,"users":2}]},"wauHistory":[{"period":"2025-12-15","wau":8},{"period":"2025-12-22","wau":9},{"period":"2025-12-29","wau":10},{"period":"2026-01-05","wau":12},{"period":"2026-01-12","wau":11},{"period":"2026-01-19","wau":11},{"period":"2026-01-26","wau":9},{"period":"2026-02-02","wau":13},{"period":"2026-02-09","wau":12},{"period":"2026-02-16","wau":10},{"period":"2026-02-23","wau":12},{"period":"2026-03-02","wau":12},{"period":"2026-03-09","wau":11}],"activityHistory":[{"activity":"Forms","count":92,"users":7},{"activity":"Guides","count":1,"users":1},{"activity":"Issues","count":14,"users":7},{"activity":"Tasks","count":1,"users":1},{"activity":"Forms","count":151,"users":8},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":32,"users":8},{"activity":"Tasks","count":2,"users":2},{"activity":"Forms","count":130,"users":7},{"activity":"Guides","count":3,"users":1},{"activity":"Issues","count":41,"users":11},{"activity":"Tasks","count":1,"users":1},{"activity":"Forms","count":187,"users":6},{"activity":"Guides","count":4,"users":2},{"activity":"Issues","count":24,"users":8},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":300,"users":9},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":76,"users":11},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":274,"users":6},{"activity":"Guides","count":9,"users":9},{"activity":"Issues","count":14,"users":7},{"activity":"Forms","count":293,"users":6},{"activity":"Issues","count":28,"users":9},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":268,"users":6},{"activity":"Guides","count":0,"users":1},{"activity":"Issues","count":26,"users":10},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":3,"users":1},{"activity":"Announcements","count":1,"users":3},{"activity":"Forms","count":269,"users":5},{"activity":"Guides","count":1,"users":2},{"activity":"Issues","count":24,"users":8},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":259,"users":6},{"activity":"Issues","count":61,"users":11},{"activity":"Tasks","count":3,"users":2},{"activity":"Announcements","count":1,"users":2},{"activity":"Forms","count":234,"users":6},{"activity":"Issues","count":33,"users":9},{"activity":"Announcements","count":2,"users":2},{"activity":"Forms","count":220,"users":4},{"activity":"Guides","count":4,"users":1},{"activity":"Issues","count":18,"users":9},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":0,"users":2},{"activity":"Forms","count":219,"users":4},{"activity":"Guides","count":3,"users":2},{"activity":"Issues","count":24,"users":7},{"activity":"Tasks","count":1,"users":2}]},{"id":"c18","name":"The Dugout","locationCount":"","tier":"Bronze","accountHealth":"Red","externalTracker":"","internalProcess":"","sector":"F&B","country":"India","contractValue":1500.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Sunil The Dugout KC","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":1,"bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":1,"totalActivity":97,"activeUsers":2,"period":"2026-03-09","activities":[{"activity":"Issues","count":3,"users":1},{"activity":"Polls","count":0,"users":1},{"activity":"Forms","count":3,"users":1},{"activity":"Forms","count":2,"users":1},{"activity":"Forms","count":29,"users":2},{"activity":"Issues","count":0,"users":1},{"activity":"Forms","count":2,"users":1},{"activity":"Forms","count":10,"users":2},{"activity":"Forms","count":18,"users":2},{"activity":"Forms","count":30,"users":2},{"activity":"Issues","count":0,"users":1}]},"wauHistory":[{"period":"2025-12-15","wau":3},{"period":"2025-12-22","wau":2},{"period":"2025-12-29","wau":2},{"period":"2026-01-05","wau":1},{"period":"2026-01-12","wau":1},{"period":"2026-01-19","wau":3},{"period":"2026-01-26","wau":1},{"period":"2026-02-02","wau":1},{"period":"2026-03-09","wau":1}],"activityHistory":[{"activity":"Issues","count":3,"users":1},{"activity":"Polls","count":0,"users":1},{"activity":"Forms","count":3,"users":1},{"activity":"Forms","count":2,"users":1},{"activity":"Forms","count":29,"users":2},{"activity":"Issues","count":0,"users":1},{"activity":"Forms","count":2,"users":1},{"activity":"Forms","count":10,"users":2},{"activity":"Forms","count":18,"users":2},{"activity":"Forms","count":30,"users":2},{"activity":"Issues","count":0,"users":1}]},{"id":"c19","name":"T2Pan Sourdough","locationCount":"","tier":"Bronze","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1leyxdpbuBm6XqkkcYanKehgAt0r0wB3Qk36RLBrKpSg/edit?gid=0#gid=0","sector":"F&B","country":"Aruba","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"AS","latestWAU":1,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":1,"totalActivity":22,"activeUsers":1,"period":"2026-02-16","activities":[{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Guides","count":2,"users":1},{"activity":"Forms","count":6,"users":1},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":1},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":10,"users":1}]},"wauHistory":[{"period":"2026-01-12","wau":2},{"period":"2026-02-02","wau":1},{"period":"2026-02-09","wau":1},{"period":"2026-02-16","wau":1}],"activityHistory":[{"activity":"Forms","count":1,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Guides","count":2,"users":1},{"activity":"Forms","count":6,"users":1},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":1},{"activity":"Compliments","count":1,"users":1},{"activity":"Guides","count":10,"users":1}]},{"id":"c20","name":"Hjeen Enterprises","locationCount":"","tier":"Bronze","accountHealth":"Green","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/11dchgwnahfssg8QUzwb2PivecfMXdXc1UW22UvYpmoc/edit?usp=sharing","sector":"","country":"","contractValue":3960.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Mosab Trayra","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"Anushka Silambu","latestWAU":0,"bau":{"months":[{"month":"January","done":true},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c21","name":"Anjappar","locationCount":"","tier":"Silver","accountHealth":"","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1oEogrPjKi_C4M0Y9gTehvxMWiF0g8kfJz46tPLYTuSw/edit?gid=0#gid=0","sector":"","country":"","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Whatsapped Harish to propose a refresher training. Follow up on this.","status":"active","owner":"","latestWAU":2,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":true,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":true,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":2,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[{"period":"2026-01-05","wau":2}],"activityHistory":[]},{"id":"c22","name":"Chaska/ La Prep","locationCount":"","tier":"Silver","accountHealth":"","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/149_JSfWM_AJHtlhtESyp9wQm7h2eLrBWC2t7lqoUG1s/edit","sector":"","country":"","contractValue":3840.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Wimal not able to login. Emailed her back. Loop support in.","status":"active","owner":"","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":false,"Provide features/modules":false,"Client provides user details":false,"Configure permissions":false,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":true,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c23","name":"Summit Pizza","locationCount":"","tier":"Bronze","accountHealth":"","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":3600.0,"currency":"USD","contractStartDate":"","contractEndDate":"2025-05-31","nextPaymentDue":"","contactPerson":"David Doty","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Email and ask if they want to start?","status":"active","owner":"Anushka Silambu","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c24","name":"Monki Bistro","locationCount":"","tier":"Bronze","accountHealth":"","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":3600.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"Kaushik Sudharsanam","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Email and check in to see how it's going","status":"active","owner":"Anushka Silambu","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":true,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":true,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c25","name":"Shelby's","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"F&B","country":"Canada","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Check acitivity","status":"active","owner":"AS","latestWAU":1,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":true,"Alignment meeting":false,"Share KNOW guides":true,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":true,"Launch":true,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":1,"totalActivity":5,"activeUsers":1,"period":"2026-01-26","activities":[{"activity":"None","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"New Learn","count":2,"users":1}]},"wauHistory":[{"period":"2025-12-15","wau":1},{"period":"2025-12-29","wau":1},{"period":"2026-01-26","wau":1}],"activityHistory":[{"activity":"None","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"New Learn","count":2,"users":1}]},{"id":"c26","name":"ELI","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":3000.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Not yet paid. Onboarding paused.","status":"active","owner":"","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":false,"Provide features/modules":false,"Client provides user details":false,"Configure permissions":false,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c27","name":"Creek Coffee","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"F&B","country":"Saudi Arabia","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"They have asked for more time before the mid trial review. They have not yet tested out the platform","status":"active","owner":"AS","latestWAU":2,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":true,"Alignment meeting":true,"Share KNOW guides":false,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":false,"Launch":true,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":2,"totalActivity":10,"activeUsers":1,"period":"2026-02-02","activities":[{"activity":"Announcements","count":1,"users":1},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":1,"users":1},{"activity":"Issues","count":0,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":0,"users":0},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":3,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":1,"users":1}]},"wauHistory":[{"period":"2026-01-12","wau":1},{"period":"2026-01-19","wau":2},{"period":"2026-02-02","wau":2}],"activityHistory":[{"activity":"Announcements","count":1,"users":1},{"activity":"Tasks","count":0,"users":1},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":1,"users":1},{"activity":"Issues","count":0,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":0,"users":0},{"activity":"Announcements","count":1,"users":1},{"activity":"Forms","count":3,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Tasks","count":1,"users":1}]},{"id":"c28","name":"Tabur","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"F&B","country":"KSA","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Onboarding completed on 28.1.26","status":"active","owner":"AS","latestWAU":1,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":true,"Alignment meeting":true,"Share KNOW guides":false,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":false,"Launch":true,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":1,"totalActivity":81,"activeUsers":3,"period":"2026-02-23","activities":[{"activity":"Forms","count":3,"users":1},{"activity":"Forms","count":8,"users":2},{"activity":"Forms","count":23,"users":2},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":10,"users":3},{"activity":"Tasks","count":2,"users":1},{"activity":"Announcements","count":1,"users":3},{"activity":"Forms","count":8,"users":3},{"activity":"Issues","count":3,"users":3},{"activity":"Tasks","count":9,"users":2},{"activity":"Announcements","count":2,"users":2},{"activity":"Forms","count":5,"users":2},{"activity":"Issues","count":5,"users":2},{"activity":"Tasks","count":1,"users":1}]},"wauHistory":[{"period":"2026-01-19","wau":3},{"period":"2026-01-26","wau":6},{"period":"2026-02-02","wau":5},{"period":"2026-02-09","wau":5},{"period":"2026-02-16","wau":3},{"period":"2026-02-23","wau":1}],"activityHistory":[{"activity":"Forms","count":3,"users":1},{"activity":"Forms","count":8,"users":2},{"activity":"Forms","count":23,"users":2},{"activity":"Tasks","count":1,"users":1},{"activity":"Announcements","count":0,"users":1},{"activity":"Forms","count":10,"users":3},{"activity":"Tasks","count":2,"users":1},{"activity":"Announcements","count":1,"users":3},{"activity":"Forms","count":8,"users":3},{"activity":"Issues","count":3,"users":3},{"activity":"Tasks","count":9,"users":2},{"activity":"Announcements","count":2,"users":2},{"activity":"Forms","count":5,"users":2},{"activity":"Issues","count":5,"users":2},{"activity":"Tasks","count":1,"users":1}]},{"id":"c29","name":"Tiki Taco","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"https://docs.google.com/spreadsheets/d/1f7SuKHN9Ww_2yhBKAWwr5WqWXtM4i8wxkLkd8GJkPEo/edit?usp=drive_link","sector":"F&B","country":"USA","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Forms rolled out. Learn courses built. Quizzes to be updated","status":"active","owner":"AS","latestWAU":70,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":false,"Alignment meeting":true,"Share KNOW guides":true,"Set up support channels":true,"Users/Comms/Ops/Learn/Shifts":true,"Launch":true,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":70,"totalActivity":2198,"activeUsers":73,"period":"2026-03-09","activities":[{"activity":"Announcements","count":219,"users":69},{"activity":"Forms","count":109,"users":28},{"activity":"New Learn","count":197,"users":24},{"activity":"Announcements","count":296,"users":73},{"activity":"Forms","count":69,"users":18},{"activity":"New Learn","count":133,"users":25},{"activity":"Announcements","count":198,"users":64},{"activity":"Forms","count":27,"users":10},{"activity":"Guides","count":5,"users":2},{"activity":"New Learn","count":41,"users":11},{"activity":"Announcements","count":115,"users":62},{"activity":"Compliments","count":1,"users":1},{"activity":"Forms","count":41,"users":19},{"activity":"Guides","count":9,"users":19},{"activity":"New Learn","count":40,"users":5},{"activity":"Announcements","count":54,"users":59},{"activity":"Forms","count":32,"users":8},{"activity":"Guides","count":10,"users":19},{"activity":"New Learn","count":3,"users":2},{"activity":"Announcements","count":69,"users":58},{"activity":"Forms","count":53,"users":8},{"activity":"New Learn","count":23,"users":3},{"activity":"Announcements","count":180,"users":64},{"activity":"Forms","count":57,"users":6},{"activity":"Guides","count":0,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":21,"users":19},{"activity":"Forms","count":17,"users":5},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":64,"users":55},{"activity":"Compliments","count":5,"users":3},{"activity":"Forms","count":76,"users":9},{"activity":"Announcements","count":12,"users":14},{"activity":"Compliments","count":2,"users":1},{"activity":"Forms","count":14,"users":6},{"activity":"New Learn","count":4,"users":2},{"activity":"Announcements","count":0,"users":1}]},"wauHistory":[{"period":"2025-12-29","wau":1},{"period":"2026-01-05","wau":14},{"period":"2026-01-12","wau":56},{"period":"2026-01-19","wau":46},{"period":"2026-01-26","wau":64},{"period":"2026-02-02","wau":59},{"period":"2026-02-09","wau":60},{"period":"2026-02-16","wau":65},{"period":"2026-02-23","wau":65},{"period":"2026-03-02","wau":75},{"period":"2026-03-09","wau":70}],"activityHistory":[{"activity":"Announcements","count":219,"users":69},{"activity":"Forms","count":109,"users":28},{"activity":"New Learn","count":197,"users":24},{"activity":"Announcements","count":296,"users":73},{"activity":"Forms","count":69,"users":18},{"activity":"New Learn","count":133,"users":25},{"activity":"Announcements","count":198,"users":64},{"activity":"Forms","count":27,"users":10},{"activity":"Guides","count":5,"users":2},{"activity":"New Learn","count":41,"users":11},{"activity":"Announcements","count":115,"users":62},{"activity":"Compliments","count":1,"users":1},{"activity":"Forms","count":41,"users":19},{"activity":"Guides","count":9,"users":19},{"activity":"New Learn","count":40,"users":5},{"activity":"Announcements","count":54,"users":59},{"activity":"Forms","count":32,"users":8},{"activity":"Guides","count":10,"users":19},{"activity":"New Learn","count":3,"users":2},{"activity":"Announcements","count":69,"users":58},{"activity":"Forms","count":53,"users":8},{"activity":"New Learn","count":23,"users":3},{"activity":"Announcements","count":180,"users":64},{"activity":"Forms","count":57,"users":6},{"activity":"Guides","count":0,"users":1},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":21,"users":19},{"activity":"Forms","count":17,"users":5},{"activity":"New Learn","count":1,"users":1},{"activity":"Announcements","count":64,"users":55},{"activity":"Compliments","count":5,"users":3},{"activity":"Forms","count":76,"users":9},{"activity":"Announcements","count":12,"users":14},{"activity":"Compliments","count":2,"users":1},{"activity":"Forms","count":14,"users":6},{"activity":"New Learn","count":4,"users":2},{"activity":"Announcements","count":0,"users":1}]},{"id":"c30","name":"Old Bakery Beer","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","status":"active","owner":"","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":false,"Configure permissions":false,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{},"wauHistory":[],"activityHistory":[]},{"id":"c31","name":"El Gaucho","locationCount":"","tier":"Pilot","accountHealth":"","externalTracker":"","internalProcess":"","sector":"","country":"","contractValue":2250.0,"currency":"USD","contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"Org, users and forms set up. Onboarding to be scheduled. Client keeps postponing","status":"active","owner":"","latestWAU":0,"bau":{"months":[],"remarks":""},"onboarding":{"Set up org account":true,"Provide features/modules":true,"Client provides user details":true,"Configure permissions":true,"Client provides content":true,"Digitize forms/checklists":true,"Digitize training content":true,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"usage":{"latestWAU":0,"totalActivity":0,"activeUsers":0,"period":"","activities":[]},"wauHistory":[],"activityHistory":[]},{"id":"c32","name":"Swish","locationCount":"","tier":"Silver","accountHealth":"","currency":"INR","contractValue":358524,"contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","sector":"","country":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","externalTracker":"","internalProcess":"","status":"active","owner":"","bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{"Set up org account":false,"Provide features/modules":false,"Client provides user details":false,"Configure permissions":false,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"latestWAU":0,"wauHistory":[],"activityHistory":[],"usage":{}},{"id":"c33","name":"Drive Coffee","locationCount":"","tier":"Bronze","accountHealth":"","currency":"USD","contractValue":16740,"contractStartDate":"","contractEndDate":"","nextPaymentDue":"","contactPerson":"","sector":"","country":"","clientSince":"","nextActivityDate":"","nextActivityTitle":"","notes":"","externalTracker":"","internalProcess":"","status":"active","owner":"","bau":{"months":[{"month":"January","done":false},{"month":"February","done":false},{"month":"March","done":false},{"month":"April","done":false},{"month":"May","done":false},{"month":"June","done":false},{"month":"July","done":false}],"remarks":""},"onboarding":{"Set up org account":false,"Provide features/modules":false,"Client provides user details":false,"Configure permissions":false,"Client provides content":false,"Digitize forms/checklists":false,"Digitize training content":false,"Alignment meeting":false,"Share KNOW guides":false,"Set up support channels":false,"Users/Comms/Ops/Learn/Shifts":false,"Launch":false,"Feedback/Review meeting":false,"Post-launch catch up":false},"latestWAU":0,"wauHistory":[],"activityHistory":[],"usage":{}}];
    }
    enrichClientsWithRedash();
    normalizeClients();
    saveClientsLocally();
    filteredClients = [...allClients];
    populateTierFilter();
    populateClientFilters();
    renderOverview();
    renderClientCards();
    showView('overview');
    document.getElementById('last-sync').textContent = 'Loaded ' + new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  } catch (e) {
    document.getElementById('error-screen').style.display = 'flex';
    document.getElementById('error-msg').textContent = e.message;
  } finally {
    showLoading(false);
  }
}

function syncData() { exportData(); }

function mergeRedashData(rd) {
  if (rd.weeks)             REDASH_DATA.weeks             = rd.weeks;
  if (rd.latestWeek)        REDASH_DATA.latestWeek        = rd.latestWeek;
  if (rd.wau)               REDASH_DATA.wau               = rd.wau;
  if (rd.activity)          REDASH_DATA.activity          = rd.activity;
  if (rd.latestWeekSummary) REDASH_DATA.latestWeekSummary = rd.latestWeekSummary;
}

function enrichClientsWithRedash() {
  const rd = REDASH_DATA;
  if (!rd || !rd.weeks || !rd.weeks.length) return;

  allClients.forEach(c => {
    // Find matching Redash name — try exact match first, then case-insensitive
    const name = c.name;
    const wauData = rd.wau[name] || rd.wau[Object.keys(rd.wau).find(k =>
      k.toLowerCase() === name.toLowerCase()
    )] || {};

    const actData = rd.activity[name] || rd.activity[Object.keys(rd.activity).find(k =>
      k.toLowerCase() === name.toLowerCase()
    )] || {};

    // Build wauHistory from REDASH_DATA
    const wauHistory = rd.weeks
      .filter(w => wauData[w] !== undefined)
      .map(w => ({ period: w, wau: wauData[w] }));

    if (wauHistory.length > 0) {
      c.wauHistory  = wauHistory;
      c.latestWAU   = wauData[rd.latestWeek] ?? c.latestWAU ?? 0;
    }

    // Build activityHistory from REDASH_DATA
    const actHistory = [];
    rd.weeks.forEach(w => {
      if (actData[w]) {
        Object.entries(actData[w].byType || {}).forEach(([type, count]) => {
          actHistory.push({ activity: type, count, users: 0 });
        });
      }
    });
    if (actHistory.length > 0) c.activityHistory = actHistory;

    // Latest usage stats
    const latest = rd.latestWeekSummary[name] || rd.latestWeekSummary[
      Object.keys(rd.latestWeekSummary).find(k => k.toLowerCase() === name.toLowerCase())
    ];
    if (latest) {
      c.usage = {
        latestWAU:     c.latestWAU,
        totalActivity: latest.totalActivity,
        activeUsers:   latest.activeUsers,
        period:        rd.latestWeek,
        activities:    Object.entries(latest.byActivity || {}).map(([a, count]) => ({ activity: a, count, users: 0 })),
      };
    }
  });
}

function mergeJiraData(jira) {
  if (!jira) return;
  allClients.forEach(c => {
    // Try exact match, then case-insensitive
    const data = jira[c.name] || jira[Object.keys(jira).find(k =>
      k.toLowerCase() === c.name.toLowerCase()
    )] || null;

    if (data) {
      c.jira = {
        open:       data.open || 0,
        inProgress: data.inProgress || 0,
        resolved:   data.resolved || 0,
        onHold:     data.onHold || 0,
        total:      (data.open || 0) + (data.inProgress || 0) + (data.resolved || 0) + (data.onHold || 0),
        tickets:    data.tickets || []
      };
    } else {
      c.jira = { open: 0, inProgress: 0, resolved: 0, onHold: 0, total: 0, tickets: [] };
    }
  });
}

function normalizeClients() {
  const DATE_FIELDS = ['contractStartDate','contractEndDate','nextPaymentDue','clientSince','nextActivityDate'];
  const now = new Date();

  allClients.forEach(c => {
    // Ensure BAU structure has date field
    if (c.bau && c.bau.months) {
      c.bau.months.forEach(m => {
        // Migrate old boolean done to date field
        if (m.done && !m.date) m.date = '';
        if (m.date) m.done = true;
        else m.done = false;
      });
    }

    // Compute lastCheckin from BAU month dates — most recent date wins
    c.lastCheckin = '';
    c.lastCheckinDate = null;
    if (c.bau && c.bau.months) {
      let latest = null;
      let latestMonth = '';
      c.bau.months.forEach(m => {
        if (m.date) {
          const d = new Date(m.date);
          if (!isNaN(d) && (!latest || d > latest)) {
            latest = d;
            latestMonth = m.month;
          }
        }
      });
      if (latest) {
        c.lastCheckin = latest.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        c.lastCheckinDate = latest;
      }
    }

    // Normalize date fields
    DATE_FIELDS.forEach(f => {
      const v = c[f];
      if (!v) { c[f] = ''; return; }
      if (typeof v === 'object' && v instanceof Date) {
        c[f] = v.toISOString().slice(0, 10);
      } else if (typeof v === 'string') {
        c[f] = v.substring(0, 10);
      } else if (typeof v === 'number') {
        c[f] = new Date(v).toISOString().slice(0, 10);
      } else {
        c[f] = String(v).substring(0, 10);
      }
    });
  });
}


// ─── AUTO HEALTH SCORE ────────────────────────────────────────────────────────
function computeHealthScore(c) {
  // If manually set to something meaningful, use it unless overridden by hard signals
  const now = new Date();
  let score = 100;

  // WAU trend: -20 if dropped >20% week on week
  if (c.wauHistory && c.wauHistory.length >= 2) {
    const latest = c.wauHistory.slice(-1)[0]?.wau || 0;
    const prev   = c.wauHistory.slice(-2,-1)[0]?.wau || 0;
    if (prev > 0 && latest < prev * 0.8) score -= 25;
    else if (prev > 0 && latest < prev * 0.95) score -= 10;
  }

  // Last check-in: -20 if >30 days, -35 if never
  if (c.lastCheckinDate) {
    const days = Math.floor((now - c.lastCheckinDate) / 86400000);
    if (days > 60) score -= 35;
    else if (days > 30) score -= 20;
    else if (days > 14) score -= 5;
  } else if (c.bau && c.bau.months) {
    const hasAny = c.bau.months.some(m => m.done);
    if (!hasAny) score -= 30;
  }

  // Open Jira tickets: -10 for 1-2 open, -20 for 3+
  if (c.jira) {
    if (c.jira.open >= 3) score -= 20;
    else if (c.jira.open >= 1) score -= 10;
  }

  // Contract renewal proximity: -15 if renewing in <30 days
  if (c.contractEndDate) {
    const d = parseDate(c.contractEndDate);
    if (d) {
      const days = Math.ceil((d - now) / 86400000);
      if (days < 0) score -= 15;       // overdue renewal
      else if (days <= 30) score -= 10;
    }
  }

  if (score >= 75) return 'Green';
  if (score >= 45) return 'Yellow';
  return 'Red';
}

function showLoading(on) {
  document.getElementById('loading').style.display = on ? 'flex' : 'none';
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function showView(v) {
  previousView = currentView;
  currentView = v;
  ['overview','clients','analytics','detail',
   'renewals','digest','onboarding-pipeline','tasks'].forEach(id => {
    const el = document.getElementById(`view-${id}`);
    if (el) el.style.display = id === v ? 'block' : 'none';
  });
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const navBtns = document.querySelectorAll('.nav-btn');
  if (v === 'overview')             { navBtns[0].classList.add('active'); renderOverview(); }
  if (v === 'tasks')                { navBtns[1].classList.add('active'); renderTasksView(); }
  if (v === 'clients')              { navBtns[2].classList.add('active'); renderClientCards(); }
  if (v === 'analytics')            { navBtns[3].classList.add('active'); initAnalyticsFilters(); renderAnalytics(); }
  if (v === 'renewals')             { navBtns[4].classList.add('active'); renderRenewals(); }
  if (v === 'digest')               { navBtns[5].classList.add('active'); renderDigest(); }
  if (v === 'onboarding-pipeline')  { navBtns[6].classList.add('active'); renderOnboardingPipeline(); }
}

function goBack() {
  const nonDetail = ['overview','clients','renewals','digest','onboarding-pipeline'];
  showView(nonDetail.includes(previousView) ? previousView : 'overview');
}

// ─── FILTERS ──────────────────────────────────────────────────────────────────
function populateTierFilter() {
  const sel = document.getElementById('tier-filter');
  ['Platinum','Gold','Silver','Bronze','Pilot','Churn'].forEach(t => {
    const o = document.createElement('option');
    o.value = t; o.textContent = t;
    sel.appendChild(o);
  });
}

function applyFilters() { renderOverviewTable(); }
function filterClients(v) { renderOverviewTable(); }
function filterByHealth(v) { renderOverviewTable(); }
function filterByTier(v)   { renderOverviewTable(); }

// ─── OVERVIEW ─────────────────────────────────────────────────────────────────
const PAID_TIERS = ['Platinum', 'Gold', 'Silver', 'Bronze'];
let activeCardFilter = null; // 'renewing' | 'no-checkin' | null

function isPaid(c)  { return PAID_TIERS.includes(c.tier); }
function isPilot(c) { return c.tier === 'Pilot' || !c.tier; }
function isChurn(c) { return c.tier === 'Churn'; }

function toggleCardFilter(filter) {
  activeCardFilter = activeCardFilter === filter ? null : filter;
  renderOverview();
}

function needsAttention(c) {
  const flags = [];
  const now = new Date();
  // Red health score
  const calc = calculateUsageHealth(c);
  if (calc.label === 'Red') flags.push('Health: Red');
  // Open Jira tickets
  if (c.jira && (c.jira.open + c.jira.inProgress + c.jira.onHold) > 0) flags.push(`${c.jira.open + c.jira.inProgress + c.jira.onHold} open tickets`);
  // No check-in in 30+ days
  if (!c.lastCheckinDate || (now - c.lastCheckinDate) / 86400000 > 30) flags.push('No recent check-in');
  // Contract ending in 30 days
  const end = parseDate(c.contractEndDate);
  if (end && (end - now) / 86400000 <= 30) flags.push('Contract ending soon');
  return flags;
}

function renderOverview() {
  const paid    = allClients.filter(isPaid);
  const pilots  = allClients.filter(c => isPilot(c) && !isChurn(c));
  const now     = new Date();
  const in90    = new Date(now.getTime() + 90 * 86400000);
  const today   = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Auto-update health scores before rendering
  allClients.forEach(c => { c.accountHealth = computeHealthScore(c); });

  // Stats
  const renewingClients = paid.filter(c => { const d = parseDate(c.contractEndDate); return d && d <= in90; });
  const atRiskARR = renewingClients.filter(c => { const d = parseDate(c.contractEndDate); return d && d <= new Date(now.getTime() + 30*86400000); })
    .reduce((s,c) => s + toUSD(c.contractValue||0, c.currency||'USD'), 0);
  const redCount = allClients.filter(c => !isChurn(c) && c.accountHealth === 'Red').length;
  const openTasks = allTasks.filter(t => !t.done).length;
  const overdueTasks = allTasks.filter(t => !t.done && t.dueDate && new Date(t.dueDate) < today).length;

  const statsEl = document.getElementById('overview-stats-row');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card-new">
        <div class="stat-label">My clients</div>
        <div class="stat-value">${allClients.filter(c=>!isChurn(c)).length}</div>
        <div class="stat-sub">${paid.length} paid · ${pilots.length} pilots</div>
      </div>
      <div class="stat-card-new">
        <div class="stat-label">At risk</div>
        <div class="stat-value ${redCount > 0 ? 'stat-sub--red' : ''}" style="${redCount > 0 ? 'color:var(--red)' : ''}">${redCount}</div>
        <div class="stat-sub ${redCount > 0 ? 'stat-sub--red' : ''}">Red health accounts</div>
      </div>
      <div class="stat-card-new">
        <div class="stat-label">Renewals (90d)</div>
        <div class="stat-value">${renewingClients.length}</div>
        <div class="stat-sub ${atRiskARR > 0 ? 'stat-sub--yellow' : ''}">${atRiskARR > 0 ? formatUSD(atRiskARR) + ' at risk' : 'None in 30 days'}</div>
      </div>
      <div class="stat-card-new" style="cursor:pointer" onclick="showView('tasks')">
        <div class="stat-label">Open tasks</div>
        <div class="stat-value">${openTasks}</div>
        <div class="stat-sub ${overdueTasks > 0 ? 'stat-sub--red' : ''}">${overdueTasks > 0 ? overdueTasks + ' overdue' : 'All on track'}</div>
      </div>
    `;
  }

  // Attention queue
  renderAttentionQueue();

  // Tasks due today
  renderTasksDueToday();

  // Update tasks badge in nav
  const badge = document.getElementById('tasks-badge');
  if (badge) {
    if (overdueTasks > 0) { badge.textContent = overdueTasks; badge.style.display = 'inline'; }
    else badge.style.display = 'none';
  }

  renderOverviewTable();
}

function renderAttentionQueue() {
  const el = document.getElementById('attention-queue-list');
  if (!el) return;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nudges = [];
  const paid = allClients.filter(isPaid);

  paid.forEach(c => {
    const health = c.accountHealth;

    // No check-in in 30+ days
    if (c.lastCheckinDate) {
      const daysSince = Math.floor((now - c.lastCheckinDate) / 86400000);
      if (daysSince >= 30) {
        nudges.push({
          level: health === 'Red' ? 'red' : 'yellow',
          title: `${c.name} — no check-in in ${daysSince} days`,
          sub: `${c.tier} · ${c.sector || c.country || ''}`,
          clientId: c.id,
          score: (health === 'Red' ? 1000 : 500) + daysSince,
        });
      }
    } else {
      nudges.push({
        level: 'yellow',
        title: `${c.name} — no check-in recorded`,
        sub: `${c.tier} · ${c.sector || c.country || ''}`,
        clientId: c.id,
        score: 400,
      });
    }

    // Renewal within 30 days
    const renewDate = parseDate(c.contractEndDate);
    if (renewDate) {
      const daysToRenewal = Math.ceil((renewDate - now) / 86400000);
      if (daysToRenewal >= 0 && daysToRenewal <= 30) {
        nudges.push({
          level: daysToRenewal <= 14 ? 'red' : 'yellow',
          title: `${c.name} — renewal in ${daysToRenewal} day${daysToRenewal === 1 ? '' : 's'}`,
          sub: `${formatUSD(toUSD(c.contractValue||0, c.currency||'USD'))} · ${c.tier}`,
          clientId: c.id,
          score: (daysToRenewal <= 14 ? 900 : 600) + (30 - daysToRenewal),
        });
      }
    }

    // WAU drop >20%
    if (c.wauHistory && c.wauHistory.length >= 2) {
      const latest = c.wauHistory.slice(-1)[0]?.wau || 0;
      const prev = c.wauHistory.slice(-2,-1)[0]?.wau || 0;
      if (prev > 0 && latest < prev * 0.8) {
        const drop = Math.round((1 - latest/prev) * 100);
        nudges.push({
          level: 'yellow',
          title: `${c.name} — usage down ${drop}% this week`,
          sub: `WAU: ${latest.toLocaleString()} (was ${prev.toLocaleString()})`,
          clientId: c.id,
          score: 300 + drop,
        });
      }
    }

    // Open Jira tickets
    if (c.jira && c.jira.open > 0) {
      nudges.push({
        level: c.jira.open >= 3 ? 'red' : 'yellow',
        title: `${c.name} — ${c.jira.open} open ticket${c.jira.open > 1 ? 's' : ''}`,
        sub: `Jira · ${c.jira.inProgress || 0} in progress`,
        clientId: c.id,
        score: c.jira.open >= 3 ? 250 : 150,
      });
    }
  });

  // Sort by score descending, take top 6
  nudges.sort((a,b) => b.score - a.score);
  const top = nudges.slice(0, 6);

  const countEl = document.getElementById('attention-count');
  if (countEl) countEl.textContent = nudges.length > 0 ? `${nudges.length} item${nudges.length > 1 ? 's' : ''}` : '';

  if (!top.length) {
    el.innerHTML = '<div class="attention-empty">All clients look good — nothing needs immediate attention.</div>';
    return;
  }

  el.innerHTML = top.map(n => `
    <div class="nudge-item" onclick="openClientDetail('${n.clientId}')">
      <span class="nudge-dot nudge-dot--${n.level}"></span>
      <div class="nudge-body">
        <div class="nudge-title">${esc(n.title)}</div>
        <div class="nudge-sub">${esc(n.sub)}</div>
      </div>
      <span class="nudge-arrow">→</span>
    </div>
  `).join('');
}

function renderTasksDueToday() {
  const el = document.getElementById('tasks-due-today-list');
  if (!el) return;

  const today = new Date();
  today.setHours(0,0,0,0);
  const tomorrow = new Date(today.getTime() + 86400000);

  const due = allTasks.filter(t => {
    if (t.done) return false;
    if (!t.dueDate) return false;
    const d = new Date(t.dueDate);
    return d < tomorrow;
  }).sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));

  if (!due.length) {
    el.innerHTML = '<div class="attention-empty">No tasks due today — you\'re on top of it.</div>';
    return;
  }

  el.innerHTML = due.slice(0, 6).map(t => {
    const d = new Date(t.dueDate);
    const isOverdue = d < today;
    const client = t.clientId ? allClients.find(c => c.id === t.clientId) : null;
    return `
      <div class="task-item-row ${t.done ? 'task-done' : ''}">
        <div class="task-check-wrap" onclick="toggleTask('${t.id}', event)">
          <div class="task-checkbox ${t.done ? 'checked' : ''}"></div>
        </div>
        <div class="task-body">
          <div class="task-title">${esc(t.text)}</div>
          <div class="task-meta">
            ${client ? `<span class="task-client-link" onclick="event.stopPropagation();openClientDetail('${client.id}')">${esc(client.name)}</span>` : ''}
            <span class="task-due-pill task-due-pill--${isOverdue ? 'overdue' : 'today'}">${isOverdue ? 'Overdue' : 'Today'}</span>
          </div>
        </div>
        <button onclick="openEditTaskModal('${t.id}',event)" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:16px;padding:2px 4px">⋯</button>
      </div>
    `;
  }).join('');
}







function renderOverviewTable() {
  const search  = (document.getElementById('search-input')?.value || '').toLowerCase();
  const health  = document.getElementById('health-filter')?.value || '';
  const tierF   = document.getElementById('tier-filter')?.value || '';
  const now     = new Date();
  const in90    = new Date(now.getTime() + 90 * 86400000);

  const match = c => {
    const s = !search || c.name.toLowerCase().includes(search);
    const h = !health || calculateUsageHealth(c).label === health;
    const t = !tierF  || c.tier === tierF;
    if (!s || !h || !t) return false;

    // Card filter
    if (activeCardFilter === 'renewing') {
      const d = parseDate(c.contractEndDate);
      return d && d <= in90;
    }
    if (activeCardFilter === 'no-checkin') {
      return !c.lastCheckinDate || (now - c.lastCheckinDate) / 86400000 > 30;
    }
    return true;
  };

  const paid   = allClients.filter(c => isPaid(c)  && match(c));
  const pilots = allClients.filter(c => isPilot(c) && !isChurn(c) && match(c));
  const churned = allClients.filter(c => isChurn(c) && match(c));

  renderPanel('paid-tbody',  paid,    'paid-panel-empty');
  renderPanel('pilot-tbody', pilots,  'pilot-panel-empty');
  renderPanel('churn-tbody', churned, 'churn-panel-empty');
}

function wauSparkline(c) {
  const wh = c.wauHistory || [];
  if (wh.length < 2) return '';
  const waus = wh.slice(-13).map(w => w.wau);
  const max = Math.max(...waus, 1);
  const bars = waus.map(w => `<span style="height:${Math.max(1, Math.round(w/max*16))}px"></span>`).join('');
  return `<span class="wau-spark">${bars}</span>`;
}

function healthScoreBadge(c) {
  const calc = calculateUsageHealth(c);
  if (calc.score === null) return '<span class="health-score health-score--gray">—</span>';
  // Convert raw score to 0-100 range: score ranges from about -6 to +6, map to 0-100
  const normalized = Math.max(0, Math.min(100, Math.round((calc.score + 6) / 12 * 100)));
  const cls = calc.label === 'Green' ? 'green' : calc.label === 'Yellow' ? 'yellow' : 'red';
  return `<span class="health-score health-score--${cls}" title="${calc.signals.map(s=>s.text).join(', ')}">${normalized}</span>`;
}

function checkinBadge(c) {
  if (!c.lastCheckinDate) return '<span class="checkin-badge checkin-badge--red">Never</span>';
  const days = Math.round((new Date() - c.lastCheckinDate) / 86400000);
  const cls = days <= 30 ? 'green' : days <= 60 ? 'yellow' : 'red';
  return `<span class="checkin-badge checkin-badge--${cls}">${c.lastCheckin}</span>`;
}

function ticketsBadge(c) {
  const j = c.jira;
  if (!j || j.total === 0) return '<span class="text-muted">—</span>';
  const openCount = j.open + j.inProgress + j.onHold;
  if (openCount > 0) {
    return `<span class="ticket-badge ticket-badge--open" title="${j.open} open, ${j.inProgress} in progress, ${j.onHold} on hold, ${j.resolved} resolved">${openCount} open</span>`;
  }
  return `<span class="ticket-badge ticket-badge--clear" title="${j.resolved} resolved">${j.total} total</span>`;
}

function jiraSection(c) {
  const j = c.jira;
  if (!j || j.total === 0) return '<div class="empty-cell">No Jira tickets found</div>';

  const chartId = `jira-pie-${c.id}`;

  const rows = j.tickets.slice(0, 10).map(t => {
    const sl = t.status.toLowerCase();
    const cls = sl.includes('resolved') || sl.includes('done') ? 'jira-status--resolved'
      : sl.includes('progress') ? 'jira-status--progress'
      : sl.includes('hold') ? 'jira-status--hold'
      : 'jira-status--open';
    const due = t.dueDate ? (() => {
      const d = new Date(t.dueDate);
      const now = new Date();
      const days = Math.ceil((d - now) / 86400000);
      const color = days < 0 ? 'var(--red)' : days <= 7 ? 'var(--yellow)' : 'var(--text2)';
      const label = days < 0 ? `Overdue ${Math.abs(days)}d` : days === 0 ? 'Due today' : `Due in ${days}d`;
      return `<span style="font-size:11px;color:${color};font-weight:${days <= 7 ? 600 : 400}">${label}</span>`;
    })() : '<span style="font-size:11px;color:var(--text3)">—</span>';
    return `
      <tr>
        <td style="font-size:13px">${esc(t.summary)}</td>
        <td><span class="jira-status ${cls}">${esc(t.status)}</span></td>
        <td style="font-size:12px;color:var(--text2)">${esc(t.assignee)}</td>
        <td>${due}</td>
      </tr>`;
  }).join('');

  // Queue the pie chart to render after DOM is ready
  setTimeout(() => renderJiraPie(chartId, j), 0);

  return `
    <div class="jira-top">
      <div class="jira-pie-wrap">
        <canvas id="${chartId}" width="160" height="160"></canvas>
      </div>
      <div class="jira-stats">
        <div class="jira-stat-row"><span class="jira-dot" style="background:var(--red)"></span><span class="jira-stat-label">Open</span><span class="jira-stat-val">${j.open}</span></div>
        <div class="jira-stat-row"><span class="jira-dot" style="background:var(--accent)"></span><span class="jira-stat-label">In Progress</span><span class="jira-stat-val">${j.inProgress}</span></div>
        <div class="jira-stat-row"><span class="jira-dot" style="background:var(--yellow)"></span><span class="jira-stat-label">On Hold</span><span class="jira-stat-val">${j.onHold}</span></div>
        <div class="jira-stat-row"><span class="jira-dot" style="background:var(--green)"></span><span class="jira-stat-label">Resolved</span><span class="jira-stat-val">${j.resolved}</span></div>
        <div class="jira-stat-row jira-stat-total"><span class="jira-stat-label">Total</span><span class="jira-stat-val">${j.total}</span></div>
      </div>
    </div>
    <div style="margin-top:16px">
      <div style="font-size:12px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.3px;margin-bottom:8px">Recent tickets</div>
      <div class="table-wrap">
        <table class="client-table" style="font-size:13px">
          <thead><tr><th>Summary</th><th>Status</th><th>Assignee</th><th>Due</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${j.tickets.length > 10 ? `<div style="font-size:12px;color:var(--text2);margin-top:8px">Showing 10 of ${j.tickets.length} tickets</div>` : ''}
    </div>
  `;
}

function renderJiraPie(canvasId, j) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [
    { val: j.open,       color: '#c42b2b', label: 'Open' },
    { val: j.inProgress, color: '#d4622a', label: 'In Progress' },
    { val: j.onHold,     color: '#a06c0a', label: 'On Hold' },
    { val: j.resolved,   color: '#2d7a3a', label: 'Resolved' },
  ].filter(d => d.val > 0);

  const total = data.reduce((s, d) => s + d.val, 0);
  if (total === 0) return;

  const cx = 80, cy = 80, r = 65, ir = 40;
  let startAngle = -Math.PI / 2;

  data.forEach(d => {
    const slice = (d.val / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, startAngle, startAngle + slice);
    ctx.arc(cx, cy, ir, startAngle + slice, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += slice;
  });

  // Center text
  ctx.fillStyle = '#2c2418';
  ctx.font = '600 20px DM Sans, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(total, cx, cy - 6);
  ctx.font = '400 11px DM Sans, sans-serif';
  ctx.fillStyle = '#7a6f62';
  ctx.fillText('tickets', cx, cy + 10);
}

function activityTimeline(c) {
  const events = [];

  // Check-in dates from BAU months
  if (c.bau && c.bau.months) {
    c.bau.months.forEach(m => {
      if (m.date) {
        events.push({
          date: new Date(m.date),
          type: 'checkin',
          icon: '◉',
          title: `${m.month} check-in`,
          detail: ''
        });
      }
    });
  }

  // Jira tickets (use most recent, no date available so use "recent")
  if (c.jira && c.jira.tickets) {
    c.jira.tickets.forEach(t => {
      const sl = t.status.toLowerCase();
      const type = sl.includes('resolved') || sl.includes('done') ? 'resolved' : 'ticket';
      events.push({
        date: null, // No date on Jira tickets in current data
        type,
        icon: type === 'resolved' ? '✓' : '⚡',
        title: t.summary,
        detail: `${t.status} · ${t.assignee}`
      });
    });
  }

  // WAU data points (last 4 weeks)
  if (c.wauHistory && c.wauHistory.length) {
    const recent = c.wauHistory.slice(-4);
    recent.forEach((w, i) => {
      const prev = i > 0 ? recent[i-1].wau : (c.wauHistory.length > recent.length ? c.wauHistory[c.wauHistory.length - 5]?.wau : null);
      let delta = '';
      if (prev !== null && prev !== undefined && prev > 0) {
        const pct = Math.round((w.wau - prev) / prev * 100);
        delta = pct >= 0 ? ` (+${pct}%)` : ` (${pct}%)`;
      }
      events.push({
        date: new Date(w.period),
        type: 'wau',
        icon: '📊',
        title: `WAU: ${w.wau.toLocaleString()}${delta}`,
        detail: ''
      });
    });
  }

  // Notes
  if (c.notes) {
    events.push({
      date: null,
      type: 'note',
      icon: '📝',
      title: 'Note',
      detail: c.notes
    });
  }

  // Sort: dated events first (newest on top), then undated
  const dated = events.filter(e => e.date).sort((a, b) => b.date - a.date);
  const undated = events.filter(e => !e.date);
  const sorted = [...dated, ...undated];

  if (!sorted.length) return '<div class="empty-cell">No activity recorded yet</div>';

  const items = sorted.slice(0, 15).map(e => {
    const dateStr = e.date ? e.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '';
    return `
      <div class="tl-item tl-item--${e.type}">
        <div class="tl-line"></div>
        <div class="tl-icon">${e.icon}</div>
        <div class="tl-body">
          <div class="tl-title">${esc(e.title)}</div>
          ${e.detail ? `<div class="tl-detail">${esc(e.detail)}</div>` : ''}
        </div>
        ${dateStr ? `<div class="tl-date">${dateStr}</div>` : ''}
      </div>`;
  }).join('');

  return `<div class="tl-stream">${items}</div>
    ${sorted.length > 15 ? `<div style="font-size:12px;color:var(--text2);margin-top:8px">Showing 15 of ${sorted.length} events</div>` : ''}`;
}

function renderPanel(tbodyId, clients, emptyId) {
  const tbody = document.getElementById(tbodyId);
  const empty = document.getElementById(emptyId);
  if (!tbody) return;
  tbody.innerHTML = '';
  if (!clients.length) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  clients.forEach(c => {
    const hasPending = pendingEdits[c.id];
    const tr = document.createElement('tr');
    tr.onclick = () => showDetail(c.id);
    tr.innerHTML = `
      <td class="client-name-cell">${esc(c.name)}${hasPending ? ' <span class="unsaved-dot" title="Unsaved changes"></span>' : ''}</td>
      <td>${c.tier ? `<span class="tier-badge tier-badge--${c.tier.toLowerCase().replace(/ /g,'-')}">${esc(c.tier)}</span>` : '—'}</td>
      <td>${healthScoreBadge(c)}</td>
      <td><span style="font-weight:500">${c.latestWAU !== undefined && c.latestWAU !== null ? c.latestWAU.toLocaleString() : '—'}</span> ${wauSparkline(c)}</td>
      <td>${ticketsBadge(c)}</td>
      <td>${c.contractValue ? formatCurrency(c.contractValue, c.currency || 'USD') : '—'}</td>
      <td>${renewalCell(c.contractEndDate)}</td>
      <td>${renewalCell(c.nextPaymentDue)}</td>
      <td>${checkinBadge(c)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── BY TIER VIEW ─────────────────────────────────────────────────────────────
function renderByTier() {
  const TIER_ORDER = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Pilot', 'Churn'];
  const grouped = {};
  allClients.forEach(c => {
    const tier = c.tier || 'Unassigned';
    if (!grouped[tier]) grouped[tier] = [];
    grouped[tier].push(c);
  });

  const sorted = [
    ...TIER_ORDER.filter(t => grouped[t]),
    ...Object.keys(grouped).filter(t => !TIER_ORDER.includes(t))
  ];

  const container = document.getElementById('tier-groups');
  container.innerHTML = sorted.map(tier => {
    const clients = grouped[tier];
    const cards = clients.map(c => clientCardSm(c)).join('');
    return `
      <div class="group-section">
        <div class="group-header" data-tier="${esc(tier)}">
          <span class="group-label">${esc(tier)}</span>
          <span class="group-count">${clients.length} client${clients.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="group-grid">${cards}</div>
      </div>`;
  }).join('');
}

// ─── BY REGION VIEW ───────────────────────────────────────────────────────────
function renderByRegion() {
  const grouped = {};
  allClients.forEach(c => {
    const region = c.country || 'Unknown';
    if (!grouped[region]) grouped[region] = [];
    grouped[region].push(c);
  });

  const sorted = Object.keys(grouped).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return grouped[b].length - grouped[a].length; // sort by count desc
  });

  const container = document.getElementById('region-groups');
  container.innerHTML = sorted.map(region => {
    const clients = grouped[region];
    const cards = clients.map(c => clientCardSm(c)).join('');
    return `
      <div class="group-section">
        <div class="group-header">
          <span class="group-label">${esc(region)}</span>
          <span class="group-count">${clients.length} client${clients.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="group-grid">${cards}</div>
      </div>`;
  }).join('');
}

// Compact card used in grouped views
function clientCardSm(c) {
  return `
    <div class="client-card-sm" onclick="showDetail('${c.id}')">
      <div class="client-card-sm-left">
        <div class="client-card-sm-name">${esc(c.name)}</div>
        <div class="client-card-sm-sub">${c.sector ? esc(c.sector) : (c.country ? esc(c.country) : '—')}</div>
      </div>
      <div class="client-card-sm-right">
        ${healthBadge(c.accountHealth)}
        <span class="client-card-sm-wau">${c.latestWAU ? c.latestWAU.toLocaleString() + ' WAU' : '—'}</span>
      </div>
    </div>`;
}

// ─── CLIENT CARDS ─────────────────────────────────────────────────────────────
function populateClientFilters() {
  const tierSel = document.getElementById('clients-tier-filter');
  const regionSel = document.getElementById('clients-region-filter');
  if (!tierSel || !regionSel) return;

  // Populate tier filter
  const tiers = [...new Set(allClients.map(c => c.tier).filter(Boolean))].sort();
  tierSel.innerHTML = '<option value="">All tiers</option>' + tiers.map(t => `<option value="${t}">${t}</option>`).join('');

  // Populate region filter
  const regions = [...new Set(allClients.map(c => c.country).filter(Boolean))].sort();
  regionSel.innerHTML = '<option value="">All regions</option>' + regions.map(r => `<option value="${r}">${r}</option>`).join('');
}

function renderClientCards() {
  const grid = document.getElementById('client-cards');
  grid.innerHTML = '';

  const search = (document.getElementById('clients-search')?.value || '').toLowerCase();
  const tierF  = document.getElementById('clients-tier-filter')?.value || '';
  const regionF = document.getElementById('clients-region-filter')?.value || '';

  const filtered = allClients.filter(c => {
    if (search && !c.name.toLowerCase().includes(search)) return false;
    if (tierF && c.tier !== tierF) return false;
    if (regionF && c.country !== regionF) return false;
    return true;
  });

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'client-card';
    card.onclick = () => showDetail(c.id);
    card.innerHTML = `
      <div class="client-card-header">
        <div>
          <div class="client-card-name">${esc(c.name)}</div>
          <div class="client-card-tier">${c.tier || ''}${c.country ? ` · ${esc(c.country)}` : ''}</div>
        </div>
        ${healthBadge(c.accountHealth)}
      </div>
      <div class="client-card-meta">
        <div class="meta-row"><span class="meta-label">Contract</span><span class="meta-value">${c.contractValue ? formatCurrency(c.contractValue) : '—'}</span></div>
        <div class="meta-row"><span class="meta-label">WAU</span><span class="meta-value">${c.latestWAU !== undefined ? c.latestWAU.toLocaleString() : '—'}</span></div>
        <div class="meta-row"><span class="meta-label">Contract End</span><span class="meta-value">${c.contractEndDate ? formatDate(c.contractEndDate) : '—'}</span></div>
        <div class="meta-row"><span class="meta-label">Next activity</span><span class="meta-value">${c.nextActivityDate ? formatDate(c.nextActivityDate) : '—'}</span></div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (!filtered.length) {
    grid.innerHTML = '<div class="panel-empty" style="display:block">No clients match your filters.</div>';
  }
}

// ─── CLIENT DETAIL ────────────────────────────────────────────────────────────
function openClientDetail(clientId) { showDetail(clientId); }
function showDetail(clientId) {
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;
  activeClientId = clientId;
  previousView = currentView;

  renderDetailHeader(c);
  renderDetailContent(c);
  showView('detail');
}

function renderDetailHeader(c) {
  const hasPending = pendingEdits[c.id] && Object.keys(pendingEdits[c.id]).length > 0;
  const jiraUrl = `https://knops.atlassian.net/issues/?jql=cf%5B10089%5D%20~%20%22${encodeURIComponent(c.name)}%22`;
  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Check-in: ' + c.name)}&details=${encodeURIComponent('Monthly check-in with ' + c.name)}`;

  document.getElementById('detail-header').innerHTML = `
    <div>
      <div class="detail-title">${esc(c.name)}</div>
      <div class="detail-sub">${c.tier ? `Tier: ${esc(c.tier)}` : ''} ${c.sector ? `· ${esc(c.sector)}` : ''} ${c.owner ? `· Owner: ${esc(c.owner)}` : ''}</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <a href="${jiraUrl}" target="_blank" class="quick-action-btn">Open Jira</a>
      <a href="${calUrl}" target="_blank" class="quick-action-btn">Schedule Check-in</a>
      ${healthBadge(c.accountHealth)}
      ${hasPending ? `<span class="unsaved-label">Unsaved changes</span>` : ''}
      ${hasPending ? `<button class="save-btn" onclick="saveToSheets('${c.id}')">Save</button>` : ''}
      ${hasPending ? `<button class="discard-btn" onclick="discardEdits('${c.id}')">Discard</button>` : ''}
      <button class="delete-btn" onclick="confirmDeleteClient('${c.id}')">Delete client</button>
    </div>
  `;
}

function renderDetailContent(c) {
  const d = document.getElementById('detail-content');
  const paid = isPaid(c);
  d.innerHTML = `
    <div class="detail-grid">
      ${sectionCard('Deal & Contract', dealKVs(c))}
      ${sectionCard('Account Overview', accountKVs(c))}
    </div>
    <div class="detail-grid">
      ${paid
        ? sectionCard('Customer Journey', customerJourneySection(c))
        : sectionCard('Onboarding Progress', onboardingSection(c))
      }
      ${sectionCard('Next Activity', nextActivitySection(c))}
    </div>
    <div class="section-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div class="section-title" style="margin-bottom:0">Tasks</div>
        <button onclick="openAddTaskModal('${c.id}')" class="btn-xs btn-xs--primary">+ Add Task</button>
      </div>
      <div id="client-tasks-${c.id}"></div>
    </div>
    <div class="section-card" id="client-charts-section">
      <div class="section-title">Usage Trends</div>
      <div id="client-charts-content"></div>
    </div>
    <div class="detail-grid-3">
      ${sectionCard('Latest Usage Stats', usageStats(c))}
      ${sectionCard('Weekly Active Users', wauTable(c))}
      ${sectionCard('Activity Breakdown', activityTable(c))}
    </div>
    <div class="detail-grid">
      ${sectionCard('Activity Timeline', activityTimeline(c))}
      ${sectionCard('Jira Tickets', jiraSection(c))}
    </div>
  `;
  // Render charts and tasks after DOM is ready
  setTimeout(() => {
    renderClientCharts(c);
    renderClientTasksSection(c.id);
  }, 0);
}

function sectionCard(title, content) {
  return `<div class="section-card"><div class="section-title">${title}</div>${content}</div>`;
}

// ─── PIPEDRIVE SECTION — now mostly editable ──────────────────────────────────
function dealKVs(c) {
  const cur = c.currency || 'USD';
  const sym = CURRENCY_SYMBOLS[cur];
  const usdVal = toUSD(c.contractValue || 0, cur);
  const showConversion = cur !== 'USD' && c.contractValue;
  return `
    <div class="edit-badge">Editable</div>
    <div class="kv-row">
      <span class="kv-label">Currency</span>
      <span class="kv-value">
        <select class="edit-select" onchange="setEdit('${c.id}','currency',this.value)">
          ${CURRENCIES.map(cu => `<option value="${cu}" ${cur===cu?'selected':''}>${cu} ${CURRENCY_SYMBOLS[cu]}</option>`).join('')}
        </select>
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Contract Value</span>
      <span class="kv-value">
        <div class="edit-input-wrap">
          <span class="edit-prefix">${sym}</span>
          <input type="number" class="edit-input edit-input--prefixed" min="0" step="100"
            value="${c.contractValue || ''}" placeholder="0"
            onchange="setEdit('${c.id}','contractValue',parseFloat(this.value)||0)">
        </div>
        ${showConversion ? `<span class="fx-note">≈ ${formatUSD(usdVal)} USD</span>` : ''}
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Contract Start</span>
      <span class="kv-value">
        <input type="date" class="edit-date edit-date--inline"
          value="${c.contractStartDate || ''}"
          onchange="setEdit('${c.id}','contractStartDate',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Contract End</span>
      <span class="kv-value">
        <input type="date" class="edit-date edit-date--inline"
          value="${c.contractEndDate || ''}"
          onchange="setEdit('${c.id}','contractEndDate',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Next Payment Due</span>
      <span class="kv-value">
        <input type="date" class="edit-date edit-date--inline"
          value="${c.nextPaymentDue || ''}"
          onchange="setEdit('${c.id}','nextPaymentDue',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Contact Person</span>
      <span class="kv-value">
        <input type="text" class="edit-input" value="${esc(c.contactPerson||'')}" placeholder="—"
          onchange="setEdit('${c.id}','contactPerson',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">No. of Locations</span>
      <span class="kv-value">
        <input type="number" class="edit-input" min="0" step="1"
          value="${c.locationCount || ''}" placeholder="—"
          onchange="setEdit('${c.id}','locationCount',this.value)">
      </span>
    </div>
  `;
}

function kvTable(rows) {
  return rows.map(([label, value]) => {
    if (!value && value !== 0) return '';
    return `<div class="kv-row"><span class="kv-label">${label}</span><span class="kv-value">${value}</span></div>`;
  }).join('');
}

// ─── EDITABLE SECTIONS (Client Tracker) ──────────────────────────────────────
function accountKVs(c) {
  const tenure = c.clientSince ? tenureLabel(c.clientSince) : null;
  const riskFlag = getRiskFlag(c);
  return `
    <div class="edit-badge">Editable</div>
    ${riskFlag ? `<div class="risk-flag">${riskFlag}</div>` : ''}
    <div class="kv-row">
      <span class="kv-label">Account Health</span>
      <span class="kv-value">
        <select class="edit-select" onchange="setEdit('${c.id}','accountHealth',this.value)">
          <option value="" ${!c.accountHealth?'selected':''}>— Unknown —</option>
          <option value="Green"  ${c.accountHealth==='Green' ?'selected':''}>🟢 Green</option>
          <option value="Yellow" ${c.accountHealth==='Yellow'?'selected':''}>🟡 Yellow</option>
          <option value="Red"    ${c.accountHealth==='Red'   ?'selected':''}>🔴 Red</option>
        </select>
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Org ID</span>
      <span class="kv-value">
        <input type="text" class="edit-input" value="${esc(c.orgId||'')}" placeholder="e.g. acme-corp"
          onchange="setEdit('${c.id}','orgId',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Environment</span>
      <span class="kv-value">
        <input type="text" class="edit-input" value="${esc(c.environment||'')}" placeholder="e.g. Production, Staging, UAT…"
          onchange="setEdit('${c.id}','environment',this.value)">
      </span>
    </div>
    <div class="kv-row" style="align-items:flex-start;padding-top:4px">
      <span class="kv-label" style="padding-top:6px">Modules Subscribed</span>
      <span class="kv-value" style="max-width:65%">
        <textarea class="edit-textarea" rows="2" placeholder="e.g. Forms, Tasks, Learn, Announcements…"
          onchange="setEdit('${c.id}','modules',this.value)">${esc(c.modules||'')}</textarea>
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Region / Country</span>
      <span class="kv-value">
        <input type="text" class="edit-input" value="${esc(c.country||'')}" placeholder="e.g. Saudi Arabia"
          onchange="setEdit('${c.id}','country',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Sector</span>
      <span class="kv-value">
        <input type="text" class="edit-input" value="${esc(c.sector||'')}" placeholder="e.g. F&B"
          onchange="setEdit('${c.id}','sector',this.value)">
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Tier</span>
      <span class="kv-value">
        <select class="edit-select" onchange="setEdit('${c.id}','tier',this.value)">
          <option value="" ${!c.tier?'selected':''}>— None —</option>
          ${['Platinum','Gold','Silver','Bronze','Pilot','Churn'].map(t =>
            `<option value="${t}" ${c.tier===t?'selected':''}>${t}</option>`
          ).join('')}
        </select>
      </span>
    </div>
    <div class="kv-row">
      <span class="kv-label">Client Since</span>
      <span class="kv-value">
        <input type="date" class="edit-date edit-date--inline" value="${c.clientSince||''}"
          onchange="setEdit('${c.id}','clientSince',this.value)">
        ${tenure ? `<span style="font-size:11px;color:var(--text2);margin-left:6px">${tenure}</span>` : ''}
      </span>
    </div>
    ${c.externalTracker ? `<div class="kv-row"><span class="kv-label">External Tracker</span><span class="kv-value"><a href="${c.externalTracker}" target="_blank" style="color:var(--accent);text-decoration:none;font-size:12px">Open ↗</a></span></div>` : ''}
    ${c.internalProcess ? `<div class="kv-row"><span class="kv-label">Internal Process</span><span class="kv-value"><a href="${c.internalProcess}" target="_blank" style="color:var(--accent);text-decoration:none;font-size:12px">Open ↗</a></span></div>` : ''}
    <div class="kv-row" style="align-items:flex-start;padding-top:8px">
      <span class="kv-label" style="padding-top:6px">Remarks</span>
      <span class="kv-value" style="max-width:65%">
        <textarea class="edit-textarea" rows="2" placeholder="Add remarks…"
          onchange="setEdit('${c.id}','remarks',this.value)">${esc(c.bau&&c.bau.remarks?c.bau.remarks:'')}</textarea>
      </span>
    </div>
    <div class="kv-row" style="align-items:flex-start;padding-top:8px">
      <span class="kv-label" style="padding-top:6px">Notes</span>
      <span class="kv-value" style="max-width:65%">
        <div class="notes-timeline" id="notes-timeline-${c.id}">
          ${renderNotesTimeline(c)}
        </div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <input type="text" class="edit-input" id="notes-input-${c.id}"
            placeholder="Add a note…" style="flex:1"
            onkeydown="if(event.key==='Enter'){addNote('${c.id}');event.preventDefault();}">
          <button class="save-btn" style="padding:6px 12px;font-size:12px" onclick="addNote('${c.id}')">Add</button>
        </div>
      </span>
    </div>
  `;
}

// ─── CUSTOMER JOURNEY — monthly check-in calendar with date pickers ──────────
function customerJourneySection(c) {
  if (!c.bau || !c.bau.months || !c.bau.months.length) {
    return `<div class="empty-cell">No monthly check-ins configured</div>`;
  }
  const months = c.bau.months;
  const doneCount = months.filter(m => m.date).length;
  const total = months.length;
  const pct = total ? Math.round(doneCount / total * 100) : 0;

  const cal = months.map(m => {
    const hasDone = !!m.date;
    return `
      <div class="cj-month ${hasDone ? 'cj-month--done' : ''}" id="cj-${c.id}-${m.month}">
        <div class="cj-month-header">
          <span class="cj-month-name">${m.month}</span>
          ${hasDone ? '<span class="cj-check">✓</span>' : ''}
        </div>
        <input type="date" class="edit-date cj-date-input"
          value="${m.date || ''}"
          onchange="setCheckinDate('${c.id}','${m.month}',this.value)">
      </div>`;
  }).join('');

  return `
    <div class="edit-badge">Set a date to mark a month as done</div>
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text2);margin-bottom:5px">
        <span>${doneCount} of ${total} check-ins completed</span>
        <span>${pct}%</span>
      </div>
      <div style="height:4px;background:var(--bg3);border-radius:2px;overflow:hidden">
        <div style="width:${pct}%;height:100%;background:var(--green);border-radius:2px;transition:width 0.3s"></div>
      </div>
    </div>
    <div class="cj-grid" id="cj-grid-${c.id}">${cal}</div>
    <div style="margin-top:14px;font-size:11.5px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.3px;margin-bottom:6px">Remarks</div>
    <input type="text" class="edit-input" style="width:100%"
      value="${esc(c.bau.remarks || '')}" placeholder="Notes…"
      onchange="setEdit('${c.id}','remarks',this.value)">
  `;
}

function nextActivitySection(c) {
  return `
    <div class="edit-badge">Editable</div>
    <div style="font-size:11.5px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px;margin-bottom:8px">What's next?</div>
    <input type="text" class="edit-input" style="width:100%;margin-bottom:8px"
      value="${esc(c.nextActivityTitle||'')}" placeholder="e.g. QBR, check-in call, renewal discussion…"
      onchange="setEdit('${c.id}','nextActivityTitle',this.value)">
    <div style="display:flex;gap:8px;align-items:center">
      <input type="date" class="edit-date" style="flex:1"
        value="${c.nextActivityDate||''}"
        onchange="setEdit('${c.id}','nextActivityDate',this.value)">
      ${c.nextActivityDate ? `<span style="font-size:12px;color:${dueDateColour(c.nextActivityDate)};font-weight:500">${dueDateLabel(c.nextActivityDate)}</span>` : ''}
    </div>
  `;
}

function setCheckinDate(clientId, month, dateVal) {
  const c = allClients.find(x => x.id === clientId);
  if (!c || !c.bau || !c.bau.months) return;
  const m = c.bau.months.find(x => x.month === month);
  if (m) {
    m.date = dateVal || '';
    m.done = !!dateVal;
  }

  normalizeClients();

  if (!pendingEdits[clientId]) pendingEdits[clientId] = {};
  if (!pendingEdits[clientId].bau) pendingEdits[clientId].bau = {};
  pendingEdits[clientId].bau[month] = dateVal || '';

  // Update just the month card visually
  const card = document.getElementById(`cj-${clientId}-${month}`);
  if (card) {
    card.className = dateVal ? 'cj-month cj-month--done' : 'cj-month';
    const check = card.querySelector('.cj-check');
    if (dateVal && !check) {
      card.querySelector('.cj-month-header').insertAdjacentHTML('beforeend', '<span class="cj-check">✓</span>');
    } else if (!dateVal && check) {
      check.remove();
    }
  }

  renderDetailHeader(c);
  renderOverview();
  scheduleAutoSave(clientId);
}

function onboardingSection(c) {
  if (!c.onboarding || !Object.keys(c.onboarding).length) {
    return `<div class="empty-cell">No onboarding data</div>`;
  }
  const steps = c.onboarding;
  const doneCount = Object.values(steps).filter(Boolean).length;
  const total = Object.keys(steps).length;
  const pct = Math.round(doneCount / total * 100);

  const items = Object.entries(steps).map(([label, done]) => `
    <div class="check-item ${done ? 'done' : ''}" onclick="toggleOnboarding('${c.id}','${label.replace(/'/g,"\'")}',${!done})">
      <div class="check-icon"></div>
      <span>${esc(label)}</span>
    </div>
  `).join('');

  return `
    <div class="edit-badge">Editable — click steps to toggle</div>
    <div style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text2);margin-bottom:5px">
        <span>${doneCount} of ${total} steps complete</span>
        <span>${pct}%</span>
      </div>
      <div style="height:4px;background:var(--bg3);border-radius:2px;overflow:hidden">
        <div id="ob-bar-${c.id}" style="width:${pct}%;height:100%;background:var(--accent);border-radius:2px;transition:width 0.3s"></div>
      </div>
    </div>
    <div class="checklist" id="ob-list-${c.id}">${items}</div>
  `;
}

// ─── EDIT HANDLERS ────────────────────────────────────────────────────────────
let autoSaveTimer = null;

function scheduleAutoSave(clientId) {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => saveToLocal(clientId), 2000);
}

function setEdit(clientId, field, value) {
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;

  // Apply to in-memory client
  if (field === 'accountHealth')     c.accountHealth = value;
  else if (field === 'remarks')      { if (!c.bau) c.bau = {}; c.bau.remarks = value; }
  else if (field === 'notes')        c.notes = value;
  else if (field === 'nextActivityDate') c.nextActivityDate = value;
  else if (field === 'nextActivityTitle') c.nextActivityTitle = value;
  else if (field === 'contractValue') c.contractValue = value;
  else if (field === 'contractEndDate')  c.contractEndDate = value;
  else if (field === 'contractStartDate') c.contractStartDate = value;
  else if (field === 'nextPaymentDue') c.nextPaymentDue = value;
  else if (field === 'contactPerson') c.contactPerson = value;
  else if (field === 'locationCount') c.locationCount = value;
  else if (field === 'country')      c.country = value;
  else if (field === 'sector')       c.sector = value;
  else if (field === 'tier')         c.tier = value;
  else if (field === 'clientSince')  c.clientSince = value;
  else if (field === 'currency')     c.currency = value;
  else if (field === 'orgId')        c.orgId = value;
  else if (field === 'environment')  c.environment = value;
  else if (field === 'modules')      c.modules = value;

  // Track pending
  if (!pendingEdits[clientId]) pendingEdits[clientId] = {};
  pendingEdits[clientId][field] = value;

  renderDetailHeader(c);
  renderOverview();
  scheduleAutoSave(clientId);
}

function toggleOnboarding(clientId, step, newVal) {
  const c = allClients.find(x => x.id === clientId);
  if (!c || !c.onboarding) return;
  c.onboarding[step] = newVal;

  if (!pendingEdits[clientId]) pendingEdits[clientId] = {};
  if (!pendingEdits[clientId].onboarding) pendingEdits[clientId].onboarding = {};
  pendingEdits[clientId].onboarding[step] = newVal;

  // Re-render just the checklist + progress bar
  const list = document.getElementById(`ob-list-${clientId}`);
  const bar = document.getElementById(`ob-bar-${clientId}`);
  if (list) {
    const steps = c.onboarding;
    const doneCount = Object.values(steps).filter(Boolean).length;
    const total = Object.keys(steps).length;
    const pct = Math.round(doneCount / total * 100);
    if (bar) bar.style.width = pct + '%';
    list.querySelectorAll('.check-item').forEach((el, i) => {
      const [label, done] = Object.entries(steps)[i];
      el.className = `check-item ${done ? 'done' : ''}`;
      el.onclick = () => toggleOnboarding(clientId, label, !done);
    });
  }

  renderDetailHeader(c);
  renderOverview();
  scheduleAutoSave(clientId);
}


function discardEdits(clientId) {
  delete pendingEdits[clientId];
  const stored = loadClientsFromStorage();
  if (stored) allClients = stored;
  normalizeClients();
  filteredClients = [...allClients];
  renderOverview();
  renderClientCards();
  showView('overview');
}

// ─── SAVE TO LOCAL STORAGE ────────────────────────────────────────────────────
function saveToLocal(clientId) {
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;

  const saveBtn = document.querySelector('.save-btn');
  if (saveBtn) { saveBtn.textContent = 'Saving…'; saveBtn.disabled = true; }

  try {
    saveClientsLocally();
    delete pendingEdits[clientId];
    showToast('✓ Saved');
    normalizeClients();
    renderOverview();
    renderDetailHeader(c);
    if (saveBtn) { saveBtn.textContent = 'Save'; saveBtn.disabled = false; }
  } catch (e) {
    showToast('Save error: ' + e.message, 'error');
    if (saveBtn) { saveBtn.textContent = 'Save'; saveBtn.disabled = false; }
  }
}

async function saveToSheets(clientId) {
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;

  const saveBtn = document.querySelector('.save-btn');
  if (saveBtn) { saveBtn.textContent = 'Saving…'; saveBtn.disabled = true; }

  // Merge pending edits into client first
  if (pendingEdits[clientId]) {
    Object.assign(c, pendingEdits[clientId]);
  }
  saveClientsLocally(); // optimistic local save

  try {
    const resp = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'update', client: c })
    });
    const data = await resp.json();
    if (data.error) throw new Error(data.error);
    delete pendingEdits[clientId];
    showToast('✓ Saved to Google Sheets');
    normalizeClients();
    renderOverview();
    renderDetailHeader(c);
  } catch (e) {
    console.warn('Sheets save failed, kept locally:', e);
    showToast('Saved locally (Sheets sync failed)', 'error');
    delete pendingEdits[clientId];
  } finally {
    if (saveBtn) { saveBtn.textContent = 'Save'; saveBtn.disabled = false; }
  }
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast toast--${type} toast--show`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('toast--show'), 3000);
}

// ─── READ-ONLY USAGE SECTIONS ─────────────────────────────────────────────────
function usageStats(c) {
  if (!c.usage) return `<div class="empty-cell">No usage data</div>`;
  const u = c.usage;
  const calc = calculateUsageHealth(c);

  const signalHtml = calc.signals.map(s => `
    <div class="usage-signal usage-signal--${s.type}">
      <span class="usage-signal-dot"></span>${s.text}
    </div>`).join('');

  const scoreBar = calc.score !== null ? `
    <div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:11.5px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Usage Health Signal</span>
        ${usageHealthBadge(calc.label)}
      </div>
      <div style="display:flex;gap:6px;flex-direction:column">${signalHtml}</div>
      ${c.accountHealth && c.accountHealth !== calc.label ?
        `<div style="margin-top:8px;font-size:11px;color:var(--text2);font-style:italic">Manual health (${c.accountHealth}) overrides this — update it above if needed</div>`
        : ''}
    </div>` : '';

  const rows = [
    ['Latest WAU', u.latestWAU !== undefined ? u.latestWAU.toLocaleString() : null],
    ['Active Users', u.activeUsers !== undefined ? u.activeUsers.toLocaleString() : null],
    ['Total Activity', u.totalActivity !== undefined ? u.totalActivity.toLocaleString() : null],
    ['Data Period', u.period ? u.period.substring(0,10) : null],
  ];
  return `<div class="readonly-badge">Synced from Redash</div>${scoreBar}` + kvTable(rows);
}

function wauTable(c) {
  if (!c.wauHistory || !c.wauHistory.length) return `<div class="empty-cell">No WAU history</div>`;
  const rows = c.wauHistory.slice(-8).reverse().map(w => `
    <tr><td>${esc(w.period)}</td><td>${w.wau !== undefined ? w.wau.toLocaleString() : '—'}</td></tr>
  `).join('');
  return `
    <div class="readonly-badge">Synced from Redash</div>
    <table class="usage-table">
      <thead><tr><th>Period</th><th>WAU</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function activityTable(c) {
  if (!c.activityHistory || !c.activityHistory.length) return `<div class="empty-cell">No activity data</div>`;
  const rows = c.activityHistory.slice(-6).reverse().map(a => `
    <tr><td>${esc(a.activity)}</td><td>${a.count !== undefined ? a.count.toLocaleString() : '—'}</td></tr>
  `).join('');
  return `
    <table class="usage-table">
      <thead><tr><th>Activity</th><th>Count</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function healthBadge(h) {
  if (!h) return `<span class="badge badge--gray">Unknown</span>`;
  const map = { Green: 'green', Yellow: 'yellow', Red: 'red' };
  const cls = map[h] || 'gray';
  return `<span class="badge badge--${cls}" title="Auto-calculated from WAU, check-in, tickets, renewal">${esc(h)}</span>`;
}

function renewalCell(dateStr) {
  if (!dateStr) return '—';
  const d = parseDate(dateStr);
  if (!d) return formatDate(dateStr);
  const days = Math.round((d - new Date()) / 86400000);
  const formatted = formatDate(dateStr);
  if (days < 0) return `<span class="text-muted">${formatted}</span>`;
  if (days <= 30) return `<span class="text-red">⚠ ${formatted}</span>`;
  if (days <= 90) return `<span class="text-yellow">${formatted}</span>`;
  return formatted;
}

// ─── CURRENCY ─────────────────────────────────────────────────────────────────
// Approximate rates to USD — update periodically
const FX = { USD: 1, INR: 0.01196, SGD: 0.751 };
const CURRENCY_SYMBOLS = { USD: '$', INR: '₹', SGD: 'S$' };
const CURRENCIES = ['USD', 'INR', 'SGD'];

function toUSD(value, currency) {
  const rate = FX[currency] || 1;
  return (value || 0) * rate;
}

function formatCurrency(value, currency) {
  if (!value && value !== 0) return '—';
  const sym = CURRENCY_SYMBOLS[currency] || '$';
  return sym + Number(value).toLocaleString('en-US');
}

function formatUSD(value) {
  if (!value && value !== 0) return '—';
  return '$' + Math.round(value).toLocaleString('en-US');
}

function tenureLabel(dateStr) {
  const d = parseDate(dateStr);
  if (!d) return null;
  const months = Math.floor((new Date() - d) / (1000 * 60 * 60 * 24 * 30.44));
  if (months < 1) return 'Just started';
  if (months < 12) return `${months}mo`;
  const yrs = Math.floor(months / 12), rem = months % 12;
  return rem > 0 ? `${yrs}y ${rem}mo` : `${yrs}y`;
}

function dueDateLabel(dateStr) {
  const d = parseDate(dateStr);
  if (!d) return '';
  const days = Math.round((d - new Date()) / 86400000);
  if (days < 0) return `${Math.abs(days)}d overdue`;
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  if (days <= 7) return `In ${days}d`;
  if (days <= 30) return `In ${Math.ceil(days/7)}w`;
  return formatDate(dateStr);
}

function dueDateColour(dateStr) {
  const d = parseDate(dateStr);
  if (!d) return 'var(--text2)';
  const days = Math.round((d - new Date()) / 86400000);
  if (days < 0) return 'var(--red)';
  if (days <= 3) return 'var(--red)';
  if (days <= 7) return 'var(--yellow)';
  return 'var(--green)';
}

// ─── USAGE HEALTH CALCULATION ─────────────────────────────────────────────────
function calculateUsageHealth(c) {
  const wh = c.wauHistory || [];
  if (wh.length < 2) return { score: null, label: 'Insufficient data', signals: [] };

  const waus = wh.map(w => w.wau);
  const latest = waus[waus.length - 1];
  const prevWaus = waus.length >= 5 ? waus.slice(-5, -1) : waus.slice(0, -1);
  const avgPrev = prevWaus.reduce((s, v) => s + v, 0) / prevWaus.length;

  const signals = [];
  let total = 0;

  // 1. Momentum: latest WAU vs 4-week avg
  const momentumPct = avgPrev > 0 ? (latest - avgPrev) / avgPrev * 100 : 0;
  let ms = momentumPct >= 10 ? 2 : momentumPct >= -5 ? 1 : momentumPct >= -25 ? 0 : momentumPct >= -50 ? -1 : -2;
  total += ms;
  if (ms >= 1) signals.push({ text: `WAU up ${momentumPct > 0 ? '+' : ''}${momentumPct.toFixed(0)}% vs 4-week avg`, type: 'good' });
  else if (ms <= -1) signals.push({ text: `WAU down ${momentumPct.toFixed(0)}% vs 4-week avg`, type: ms === -2 ? 'bad' : 'warn' });

  // 2. Consistency: active weeks out of last 4
  const last4 = waus.slice(-4);
  const activeWeeks = last4.filter(w => w > 0).length;
  const cs = [4,3,2,1,0].indexOf(activeWeeks) === -1 ? 0 : [2,1,0,-1,-2][[4,3,2,1,0].indexOf(activeWeeks)];
  total += cs;
  if (activeWeeks < 3) signals.push({ text: `Only ${activeWeeks}/4 recent weeks had activity`, type: activeWeeks < 2 ? 'bad' : 'warn' });
  else signals.push({ text: `Active ${activeWeeks}/4 recent weeks`, type: 'good' });

  // 3. Absolute WAU level
  let as_ = latest >= 50 ? 1 : latest >= 10 ? 0 : latest >= 3 ? -1 : -2;
  total += as_;
  if (as_ < 0) signals.push({ text: `Low WAU (${latest} users/week)`, type: as_ === -2 ? 'bad' : 'warn' });

  // 4. Breadth: active users vs WAU
  const activeUsers = (c.usage || {}).activeUsers || 0;
  const bs = activeUsers > 0 && latest > 0 && activeUsers / latest >= 0.5 ? 1 : 0;
  total += bs;
  if (bs === 1) signals.push({ text: `Broad engagement (${activeUsers} active users)`, type: 'good' });

  const label = total >= 3 ? 'Green' : total >= 0 ? 'Yellow' : 'Red';
  return { score: total, label, signals };
}

function usageHealthBadge(label) {
  if (!label) return '';
  const map = { Green: 'green', Yellow: 'yellow', Red: 'red' };
  const cls = map[label] || 'gray';
  const icon = label === 'Green' ? '↑' : label === 'Yellow' ? '~' : '↓';
  return `<span class="badge badge--${cls}" title="Calculated from WAU data">${icon} ${label}</span>`;
}

function getRiskFlag(c) {
  const flags = [];
  // No check-in in 30+ days
  if (c.lastCheckin) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const idx = months.indexOf(c.lastCheckin);
    if (idx >= 0) {
      const lastDate = new Date(new Date().getFullYear(), idx, 1);
      const daysSince = (new Date() - lastDate) / 86400000;
      if (daysSince > 45) flags.push('No check-in in 45+ days');
    }
  }
  // WAU drop
  if (c.wauHistory && c.wauHistory.length >= 3) {
    const recent = c.wauHistory.slice(-3).map(w => w.wau);
    const avg = (recent[0] + recent[1]) / 2;
    if (avg > 0 && recent[2] < avg * 0.7) flags.push('WAU dropped 30%+ recently');
  }
  // Health red
  if (c.accountHealth === 'Red') flags.push('Account health: Red');
  // Overdue activity
  if (c.nextActivityDate) {
    const d = parseDate(c.nextActivityDate);
    if (d && d < new Date()) flags.push('Next activity is overdue');
  }
  if (!flags.length) return null;
  return '⚠ ' + flags[0]; // show first flag only to keep it compact
}

function formatDate(str) {
  if (!str) return '—';
  const d = parseDate(str);
  if (!d) return str;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function parseDate(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── CLIENT DETAIL CHARTS ─────────────────────────────────────────────────────
function renderClientCharts(c) {
  const container = document.getElementById('client-charts-content');
  if (!container) return;

  if (typeof REDASH_DATA === 'undefined') {
    container.innerHTML = '<p style="color:var(--text2);font-size:13px;padding:8px 0">No usage trend data available.</p>';
    return;
  }

  const rd = REDASH_DATA;
  const clientName = c.name;
  const wauData = rd.wau[clientName] || {};
  const actData = rd.activity[clientName] || {};

  if (!Object.keys(wauData).length) {
    container.innerHTML = '<p style="color:var(--text2);font-size:13px;padding:8px 0">No Redash data matched for this client.</p>';
    return;
  }

  const weeks = rd.weeks;
  const wauVals = weeks.map(w => wauData[w] ?? null);
  const actVals = weeks.map(w => (actData[w] || {}).totalActivity ?? null);
  const labels  = weeks.map(w => new Date(w).toLocaleDateString('en-GB', {day:'numeric', month:'short'}));

  // Activity breakdown by type across all weeks
  const allTypes = {};
  weeks.forEach(w => {
    const byType = (actData[w] || {}).byType || {};
    Object.entries(byType).forEach(([type, count]) => {
      if (type === 'NaN' || type === 'None') return;
      if (!allTypes[type]) allTypes[type] = Array(weeks.length).fill(0);
      allTypes[type][weeks.indexOf(w)] += count;
    });
  });
  const topTypes = Object.entries(allTypes)
    .filter(([, vals]) => vals.reduce((s,v) => s+v, 0) > 0)
    .sort((a, b) => b[1].reduce((s,v) => s+v,0) - a[1].reduce((s,v) => s+v,0))
    .slice(0, 5);

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">
      <div><div class="chart-title">Weekly Active Users</div><canvas id="detail-chart-wau" height="160"></canvas></div>
      <div><div class="chart-title">Total Activity</div><canvas id="detail-chart-act" height="160"></canvas></div>
    </div>
    ${topTypes.length > 1 ? `<div><div class="chart-title">Activity by Type</div><canvas id="detail-chart-breakdown" height="100"></canvas></div>` : ''}
  `;

  const { textColor, gridColor, font } = getChartDefaults();
  const baseOpts = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { bodyFont: { family: font }, titleFont: { family: font } },
    },
    scales: {
      x: { ticks: { color: textColor, font: { family: font, size: 10 }, maxRotation: 35 }, grid: { color: gridColor } },
      y: { ticks: { color: textColor, font: { family: font, size: 10 } }, grid: { color: gridColor }, beginAtZero: true },
    },
  };

  // Destroy any existing charts on this detail page
  ['detail-chart-wau','detail-chart-act','detail-chart-breakdown'].forEach(id => {
    if (chartInstances[id]) { chartInstances[id].destroy(); delete chartInstances[id]; }
  });

  chartInstances['detail-chart-wau'] = new Chart(document.getElementById('detail-chart-wau'), {
    type: 'line', data: {
      labels,
      datasets: [{ data: wauVals, borderColor: 'var(--accent)', backgroundColor: '#d4622a18',
        tension: 0.3, fill: true, pointRadius: 3, borderWidth: 2 }]
    }, options: baseOpts,
  });

  chartInstances['detail-chart-act'] = new Chart(document.getElementById('detail-chart-act'), {
    type: 'line', data: {
      labels,
      datasets: [{ data: actVals, borderColor: '#0891b2', backgroundColor: '#0891b218',
        tension: 0.3, fill: true, pointRadius: 3, borderWidth: 2 }]
    }, options: baseOpts,
  });

  if (topTypes.length > 1 && document.getElementById('detail-chart-breakdown')) {
    chartInstances['detail-chart-breakdown'] = new Chart(document.getElementById('detail-chart-breakdown'), {
      type: 'bar', data: {
        labels,
        datasets: topTypes.map(([type, vals], i) => ({
          label: type, data: vals,
          backgroundColor: CHART_COLOURS[i % CHART_COLOURS.length] + 'cc',
          borderWidth: 0,
        })),
      },
      options: {
        ...baseOpts,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          ...baseOpts.plugins,
          legend: { labels: { color: textColor, font: { family: font, size: 11 }, boxWidth: 10 } },
        },
        scales: { ...baseOpts.scales, x: { ...baseOpts.scales.x, stacked: true }, y: { ...baseOpts.scales.y, stacked: true } },
      },
    });
  }
}

// ─── ANALYTICS ────────────────────────────────────────────────────────────────
const CHART_COLOURS = [
  '#d4622a','#0891b2','#16a34a','#ca8a04','#dc2626',
  '#7c3aed','#0284c7','#15803d','#b45309','#b91c1c',
  '#6d28d9','#0369a1','#166534','#92400e','#991b1b',
];
let chartInstances = {};

function initAnalyticsFilters() {
  if (typeof REDASH_DATA === "undefined") return;
  const rd = REDASH_DATA;

  // Client filter
  const cf = document.getElementById('analytics-client-filter');
  if (cf.options.length <= 1) {
    const clients = Object.keys(rd.wau).sort();
    clients.forEach(c => {
      const o = document.createElement('option');
      o.value = c; o.textContent = c;
      cf.appendChild(o);
    });
  }

  // Date filters
  const weeks = rd.weeks;
  const fromSel = document.getElementById('analytics-date-from');
  const toSel   = document.getElementById('analytics-date-to');
  if (fromSel.options.length === 0) {
    weeks.forEach(w => {
      const fmt = new Date(w).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'});
      fromSel.add(new Option(fmt, w));
      toSel.add(new Option(fmt, w));
    });
    fromSel.value = weeks[0];
    toSel.value   = weeks[weeks.length - 1];
  }
}

function getFilteredWeeks() {
  const rd = REDASH_DATA;
  const from = document.getElementById('analytics-date-from').value;
  const to   = document.getElementById('analytics-date-to').value;
  return rd.weeks.filter(w => w >= from && w <= to);
}

function getSelectedClient() {
  return document.getElementById('analytics-client-filter').value;
}

function renderAnalytics() {
  if (typeof REDASH_DATA === "undefined") {
    document.getElementById('analytics-this-week').innerHTML =
      '<p style="color:var(--text2);padding:20px 0">No Redash data loaded. Add data.js to your dashboard folder.</p>';
    return;
  }
  initAnalyticsFilters();
  const rd = REDASH_DATA;
  const weeks = getFilteredWeeks();
  const clientFilter = getSelectedClient();

  // Which clients to include
  const clients = clientFilter ? [clientFilter] : Object.keys(rd.wau).sort();

  // ── This Week Stats ────────────────────────────────────────────────────────
  const latestWeek = weeks[weeks.length - 1];
  const prevWeek   = weeks[weeks.length - 2];

  let totalWAU = 0, prevWAU = 0, totalAct = 0, prevAct = 0, activeClients = 0;
  clients.forEach(c => {
    const waus = rd.wau[c] || {};
    const acts = rd.activity[c] || {};
    totalWAU += waus[latestWeek] || 0;
    prevWAU  += waus[prevWeek]   || 0;
    totalAct += (acts[latestWeek] || {}).totalActivity || 0;
    prevAct  += (acts[prevWeek]   || {}).totalActivity || 0;
    if ((waus[latestWeek] || 0) > 0) activeClients++;
  });

  const wauDelta = prevWAU ? ((totalWAU - prevWAU) / prevWAU * 100).toFixed(1) : null;
  const actDelta = prevAct ? ((totalAct - prevAct) / prevAct * 100).toFixed(1) : null;

  function delta(pct) {
    if (pct === null) return '';
    const col = pct >= 0 ? 'var(--green)' : 'var(--red)';
    return `<div class="this-week-delta" style="color:${col}">${pct >= 0 ? '↑' : '↓'} ${Math.abs(pct)}% vs prev week</div>`;
  }

  const latestFmt = new Date(latestWeek).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'});

  document.getElementById('analytics-this-week').innerHTML = `
    <div class="this-week-date">Week of ${latestFmt}</div>
    <div class="this-week-grid">
      <div class="this-week-card">
        <div class="this-week-label">Total WAU</div>
        <div class="this-week-value">${totalWAU.toLocaleString()}</div>
        ${delta(wauDelta)}
      </div>
      <div class="this-week-card">
        <div class="this-week-label">Total Activity</div>
        <div class="this-week-value">${totalAct.toLocaleString()}</div>
        ${delta(actDelta)}
      </div>
      <div class="this-week-card">
        <div class="this-week-label">Active Clients</div>
        <div class="this-week-value">${activeClients}</div>
        <div class="this-week-delta" style="color:var(--text2)">of ${clients.length} total</div>
      </div>
      <div class="this-week-card">
        <div class="this-week-label">Avg WAU / Client</div>
        <div class="this-week-value">${activeClients ? Math.round(totalWAU / activeClients).toLocaleString() : '—'}</div>
        <div class="this-week-delta" style="color:var(--text2)">across active clients</div>
      </div>
    </div>`;

  // ── WAU Trend Chart ────────────────────────────────────────────────────────
  const wauDatasets = clientFilter
    ? [{
        label: clientFilter,
        data: weeks.map(w => rd.wau[clientFilter]?.[w] ?? null),
        borderColor: CHART_COLOURS[0],
        backgroundColor: CHART_COLOURS[0] + '18',
        tension: 0.3, fill: true, pointRadius: 4,
      }]
    : clients.slice(0, 10).map((c, i) => ({
        label: c,
        data: weeks.map(w => rd.wau[c]?.[w] ?? null),
        borderColor: CHART_COLOURS[i % CHART_COLOURS.length],
        backgroundColor: 'transparent',
        tension: 0.3, pointRadius: 3,
        borderWidth: 1.5,
      }));

  renderLineChart('chart-wau', weeks, wauDatasets);

  // ── Total Activity Trend Chart ────────────────────────────────────────────
  const actTotals = weeks.map(w =>
    clients.reduce((s, c) => s + ((rd.activity[c]?.[w] || {}).totalActivity || 0), 0)
  );
  const actDatasets = clientFilter
    ? [{
        label: clientFilter,
        data: weeks.map(w => (rd.activity[clientFilter]?.[w] || {}).totalActivity || 0),
        borderColor: CHART_COLOURS[1],
        backgroundColor: CHART_COLOURS[1] + '18',
        tension: 0.3, fill: true, pointRadius: 4,
      }]
    : [{
        label: 'All Clients',
        data: actTotals,
        borderColor: CHART_COLOURS[1],
        backgroundColor: CHART_COLOURS[1] + '18',
        tension: 0.3, fill: true, pointRadius: 4,
      }];

  renderLineChart('chart-activity', weeks, actDatasets);

  // ── Activity Breakdown by Type ─────────────────────────────────────────────
  const actTypes = {};
  clients.forEach(c => {
    weeks.forEach(w => {
      const byType = (rd.activity[c]?.[w] || {}).byType || {};
      Object.entries(byType).forEach(([type, count]) => {
        if (!actTypes[type]) actTypes[type] = Array(weeks.length).fill(0);
        actTypes[type][weeks.indexOf(w)] += count;
      });
    });
  });

  const typeOrder = Object.entries(actTypes)
    .sort((a, b) => b[1].reduce((s,v) => s+v,0) - a[1].reduce((s,v) => s+v,0))
    .slice(0, 6);

  const breakdownDatasets = typeOrder.map(([type, data], i) => ({
    label: type,
    data,
    backgroundColor: CHART_COLOURS[i % CHART_COLOURS.length] + 'cc',
    borderWidth: 0,
  }));

  renderBarChart('chart-breakdown', weeks, breakdownDatasets, true);

  // ── WAU Ranking (latest week) ──────────────────────────────────────────────
  document.getElementById('client-wau-ranking-card').style.display = clientFilter ? 'none' : 'block';
  if (!clientFilter) {
    const ranking = clients
      .map(c => ({ name: c, wau: rd.wau[c]?.[latestWeek] || 0 }))
      .filter(x => x.wau > 0)
      .sort((a, b) => b.wau - a.wau);

    renderBarChart('chart-ranking',
      ranking.map(x => x.name),
      [{
        label: 'WAU',
        data: ranking.map(x => x.wau),
        backgroundColor: ranking.map((_, i) => CHART_COLOURS[i % CHART_COLOURS.length] + 'cc'),
        borderWidth: 0,
      }],
      false
    );
  }
}

function getChartDefaults() {
  // Resolve CSS variables into actual values for Chart.js
  const style = getComputedStyle(document.documentElement);
  return {
    textColor:   style.getPropertyValue('--text2').trim()  || '#6b6560',
    gridColor:   style.getPropertyValue('--border').trim() || 'rgba(0,0,0,0.07)',
    font: "'DM Sans', system-ui, sans-serif",
  };
}

function renderLineChart(id, labels, datasets) {
  const { textColor, gridColor, font } = getChartDefaults();
  const ctx = document.getElementById(id);
  if (!ctx) return;
  if (chartInstances[id]) chartInstances[id].destroy();
  chartInstances[id] = new Chart(ctx, {
    type: 'line',
    data: { labels: labels.map(w => new Date(w).toLocaleDateString('en-GB', {day:'numeric',month:'short'})), datasets },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: textColor, font: { family: font, size: 12 }, boxWidth: 12 } },
        tooltip: { bodyFont: { family: font }, titleFont: { family: font } },
      },
      scales: {
        x: { ticks: { color: textColor, font: { family: font, size: 11 } }, grid: { color: gridColor } },
        y: { ticks: { color: textColor, font: { family: font, size: 11 } }, grid: { color: gridColor }, beginAtZero: true },
      },
    },
  });
}

function renderBarChart(id, labels, datasets, stacked) {
  const { textColor, gridColor, font } = getChartDefaults();
  const ctx = document.getElementById(id);
  if (!ctx) return;
  if (chartInstances[id]) chartInstances[id].destroy();
  chartInstances[id] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: textColor, font: { family: font, size: 12 }, boxWidth: 12 } },
        tooltip: { bodyFont: { family: font }, titleFont: { family: font } },
      },
      scales: {
        x: { stacked, ticks: { color: textColor, font: { family: font, size: 11 }, maxRotation: 35 }, grid: { color: gridColor } },
        y: { stacked, ticks: { color: textColor, font: { family: font, size: 11 } }, grid: { color: gridColor }, beginAtZero: true },
      },
    },
  });
}

// ─── CLIENT CRUD ──────────────────────────────────────────────────────────────

// ── Add Client ────────────────────────────────────────────────────────────────
function showAddClientModal() {
  const modal = document.getElementById('add-client-modal');
  modal.style.display = 'flex';
  document.getElementById('add-client-form').reset();
}

function closeAddClientModal() {
  document.getElementById('add-client-modal').style.display = 'none';
}

function submitAddClient() {
  const get = id => document.getElementById(id)?.value?.trim() || '';

  const name = get('new-name');
  if (!name) { showToast('Client name is required', 'error'); return; }

  const newClient = {
    id: 'c' + Date.now(),
    name,
    tier:            get('new-tier'),
    accountHealth:   get('new-health'),
    contractValue:   parseFloat(get('new-contract')) || 0,
    currency:        get('new-currency') || 'USD',
    sector:          get('new-sector'),
    country:         get('new-country'),
    contractStartDate:   get('new-contract-start'),
    contractEndDate:     get('new-contract-end'),
    nextPaymentDue:      get('new-next-payment'),
    contactPerson:   get('new-contact'),
    locationCount:   get('new-locations'),
    clientSince:     get('new-since'),
    nextActivityDate:'',
    nextActivityTitle:'',
    notes:           get('new-notes'),
    orgId:           get('new-orgid'),
    environment:     get('new-environment'),
    modules:         get('new-modules'),
    externalTracker: '',
    internalProcess: '',
    status:          'active',
    owner:           '',
    latestWAU:       0,
    bau: {
      months: ['January','February','March','April','May','June','July']
        .map(m => ({ month: m, done: false })),
      remarks: ''
    },
    onboarding: {
      'Set up org account': false,
      'Provide features/modules': false,
      'Client provides user details': false,
      'Configure permissions': false,
      'Client provides content': false,
      'Digitize forms/checklists': false,
      'Digitize training content': false,
      'Alignment meeting': false,
      'Share KNOW guides': false,
      'Set up support channels': false,
      'Users/Comms/Ops/Learn/Shifts': false,
      'Launch': false,
      'Feedback/Review meeting': false,
      'Post-launch catch up': false,
    },
    usage: {}, wauHistory: [], activityHistory: [],
  };

  allClients.push(newClient);
  filteredClients = [...allClients];
  saveClientsLocally();
  closeAddClientModal();
  renderOverview();
  renderClientCards();
  showToast(`✓ ${name} added`);

  // Sync new client to Google Sheets (fire and forget)
  fetch(GAS_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'add', client: newClient })
  }).catch(e => console.warn('Sheets add sync failed:', e));
}

// ── Delete Client ─────────────────────────────────────────────────────────────
function confirmDeleteClient(clientId) {
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;

  const modal = document.getElementById('delete-confirm-modal');
  document.getElementById('delete-client-name').textContent = c.name;
  modal.dataset.clientId = clientId;
  modal.style.display = 'flex';
}

function closeDeleteModal() {
  document.getElementById('delete-confirm-modal').style.display = 'none';
}

function executeDelete() {
  const modal = document.getElementById('delete-confirm-modal');
  const clientId = modal.dataset.clientId;
  const c = allClients.find(x => x.id === clientId);
  if (!c) return;

  const name = c.name;
  allClients = allClients.filter(x => x.id !== clientId);
  delete pendingEdits[clientId];
  filteredClients = [...allClients];

  closeDeleteModal();
  saveClientsLocally();
  renderOverview();
  renderClientCards();
  showView('overview');
  showToast(`${name} removed`);

  // Sync delete to Google Sheets (fire and forget)
  fetch(GAS_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'delete', clientId: clientId })
  }).catch(e => console.warn('Sheets delete sync failed:', e));
}

// ─── LOCAL STORAGE PERSISTENCE ────────────────────────────────────────────────

function saveClientsLocally() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allClients));
  } catch(e) { console.warn('localStorage save failed:', e); }
}

function loadClientsFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) { console.warn('localStorage load failed:', e); }
  return null;
}

function resetToDefault() {
  if (!confirm('Reset all client data to default? This will undo all your edits.')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ─── TASK STORAGE ─────────────────────────────────────────────────────────────

function loadTasksFromStorage() {
  try {
    const stored = localStorage.getItem(TASKS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch(e) {}
  return [];
}

function saveTasksToStorage() {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(allTasks));
  } catch(e) { console.warn('Task save failed:', e); }
}

// ─── TASK MANAGEMENT ──────────────────────────────────────────────────────────

function renderTasksView() {
  const statusFilter = document.getElementById('task-filter-status')?.value || 'open';
  const clientFilter = document.getElementById('task-filter-client')?.value || '';
  const search = (document.getElementById('task-filter-search')?.value || '').toLowerCase();

  // Populate client filter dropdown
  const clientSel = document.getElementById('task-filter-client');
  if (clientSel && clientSel.options.length <= 1) {
    allClients.filter(c => !isChurn(c)).sort((a,b) => a.name.localeCompare(b.name)).forEach(c => {
      const o = document.createElement('option');
      o.value = c.id; o.textContent = c.name;
      clientSel.appendChild(o);
    });
  }

  const today = new Date(); today.setHours(0,0,0,0);

  let tasks = [...allTasks];
  if (statusFilter === 'open') tasks = tasks.filter(t => !t.done);
  if (statusFilter === 'done') tasks = tasks.filter(t => t.done);
  if (clientFilter) tasks = tasks.filter(t => t.clientId === clientFilter);
  if (search) tasks = tasks.filter(t =>
    t.text?.toLowerCase().includes(search) ||
    t.notes?.toLowerCase().includes(search) ||
    t.tags?.toLowerCase().includes(search) ||
    t.workstream?.toLowerCase().includes(search)
  );

  tasks.sort((a,b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    const da = a.dueDate ? new Date(a.dueDate) : null;
    const db = b.dueDate ? new Date(b.dueDate) : null;
    if (!da && !db) return 0;
    if (!da) return 1;
    if (!db) return -1;
    return da - db;
  });

  const el = document.getElementById('tasks-view-content');
  if (!el) return;

  const sub = document.getElementById('tasks-subtitle');
  if (sub) {
    const open = allTasks.filter(t => !t.done).length;
    const od = allTasks.filter(t => !t.done && t.dueDate && new Date(t.dueDate) < today).length;
    sub.textContent = `${open} open · ${od} overdue`;
  }

  if (!tasks.length) {
    el.innerHTML = '<div style="text-align:center;padding:48px;color:var(--text3);font-size:13px">No tasks found.</div>';
    return;
  }

  const rows = tasks.map(t => {
    const client = t.clientId ? allClients.find(c => c.id === t.clientId) : null;
    const d = t.dueDate ? new Date(t.dueDate) : null;
    const daysUntil = d ? Math.ceil((d - today) / 86400000) : null;
    const isOverdue = d && daysUntil < 0 && !t.done;
    const isToday   = d && daysUntil === 0 && !t.done;

    // Due date display
    let dueDisplay = '—';
    let dueColor = 'var(--text2)';
    if (d) {
      dueDisplay = d.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'2-digit'});
      if (isOverdue) dueColor = 'var(--red)';
      else if (isToday) dueColor = 'var(--yellow)';
    }

    // Days until due
    let daysDisplay = '—';
    let daysColor = 'var(--text3)';
    if (daysUntil !== null && !t.done) {
      if (isOverdue) { daysDisplay = `${Math.abs(daysUntil)}d overdue`; daysColor = 'var(--red)'; }
      else if (isToday) { daysDisplay = 'Today'; daysColor = 'var(--yellow)'; }
      else { daysDisplay = `${daysUntil}d`; }
    } else if (t.done) {
      daysDisplay = 'Done';
      daysColor = 'var(--green)';
    }

    // Priority
    const priColors = { high: 'var(--red)', medium: 'var(--yellow)', low: 'var(--text3)' };
    const priColor = priColors[t.priority] || 'var(--text3)';

    // Status
    const statusLabel = t.done ? 'Done' : isOverdue ? 'Overdue' : isToday ? 'Due today' : 'Open';
    const statusColor = t.done ? 'var(--green)' : isOverdue ? 'var(--red)' : isToday ? 'var(--yellow)' : 'var(--text2)';

    // Last updated
    const updStr = t.updatedAt || t.createdAt;
    const updDisplay = updStr ? new Date(updStr).toLocaleDateString('en-GB', {day:'numeric',month:'short'}) : '—';

    // Tags
    const tagHtml = t.tags ? t.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      .map(tag => `<span style="font-size:10.5px;padding:1px 6px;border-radius:10px;background:var(--bg3);color:var(--text2);white-space:nowrap">${esc(tag)}</span>`).join('') : '';

    // Links
    const linkHtml = [
      t.jiraLink ? `<a href="${esc(t.jiraLink)}" target="_blank" onclick="event.stopPropagation()" style="font-size:11px;color:var(--accent);text-decoration:none;border:1px solid var(--border);border-radius:4px;padding:1px 6px;white-space:nowrap;display:inline-block">Jira ↗</a>` : '',
      t.slackLink ? `<a href="${esc(t.slackLink)}" target="_blank" onclick="event.stopPropagation()" style="font-size:11px;color:#4a90d9;text-decoration:none;border:1px solid var(--border);border-radius:4px;padding:1px 6px;white-space:nowrap;display:inline-block">Slack ↗</a>` : '',
    ].filter(Boolean).join(' ');

    return `<tr class="${t.done ? 'task-row-done' : ''}" style="cursor:pointer" onclick="openEditTaskModal('${t.id}', event)">
      <td onclick="event.stopPropagation()">
        <div class="task-check-wrap" onclick="toggleTask('${t.id}', event)">
          <div class="task-checkbox ${t.done ? 'checked' : ''}"></div>
        </div>
      </td>
      <td>
        <div style="font-size:13px;font-weight:500;color:var(--text);line-height:1.4;${t.done ? 'text-decoration:line-through;color:var(--text3)' : ''}">${esc(t.text)}</div>
        ${t.notes ? `<div style="font-size:11.5px;color:var(--text2);margin-top:2px;line-height:1.4">${esc(t.notes.slice(0,80))}${t.notes.length > 80 ? '…' : ''}</div>` : ''}
        ${linkHtml ? `<div style="margin-top:4px;display:flex;gap:4px;flex-wrap:wrap">${linkHtml}</div>` : ''}
      </td>
      <td>
        ${client ? `<span class="task-client-link" onclick="event.stopPropagation();openClientDetail('${client.id}')">${esc(client.name)}</span>` : '<span style="color:var(--text3)">—</span>'}
        ${t.workstream ? `<div style="font-size:11px;color:var(--text3);margin-top:2px">${esc(t.workstream)}</div>` : ''}
      </td>
      <td style="font-size:12.5px;color:var(--text2)">${esc(t.owner || '—')}</td>
      <td><span style="font-size:12px;font-weight:500;color:${priColor}">${t.priority || '—'}</span></td>
      <td><span style="font-size:12px;color:${statusColor};font-weight:500">${statusLabel}</span></td>
      <td style="font-size:12.5px;color:${dueColor};font-weight:${isOverdue || isToday ? '600' : '400'}">${dueDisplay}</td>
      <td style="font-size:12px;color:var(--text3)">${updDisplay}</td>
      <td style="font-size:12px;color:${daysColor};font-weight:${isOverdue || isToday ? '600' : '400'}">${daysDisplay}</td>
      <td>
        <div style="display:flex;gap:4px;flex-wrap:wrap">${tagHtml || '<span style="color:var(--text3);font-size:12px">—</span>'}</div>
      </td>
    </tr>`;
  }).join('');

  el.innerHTML = `
    <div style="overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius);background:var(--bg2)">
      <table style="width:100%;border-collapse:collapse;white-space:nowrap">
        <thead>
          <tr style="background:var(--bg3);border-bottom:1px solid var(--border)">
            <th style="padding:9px 12px;width:36px"></th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px;min-width:240px;white-space:normal">Action item</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px;min-width:120px">Client / project</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Owner</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Priority</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Status</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Due date</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Last updated</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px">Days until due</th>
            <th style="padding:9px 12px;text-align:left;font-size:11px;font-weight:500;color:var(--text2);text-transform:uppercase;letter-spacing:0.4px;min-width:100px">Tags</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

function renderTaskList(tasks, group) {
  // Kept for backward compat (overview/detail still uses task-item-row style)
  const today = new Date(); today.setHours(0,0,0,0);
  return `<div class="task-panel" style="margin-bottom:8px">` +
    tasks.map(t => {
      const client = t.clientId ? allClients.find(c => c.id === t.clientId) : null;
      const d = t.dueDate ? new Date(t.dueDate) : null;
      const isOverdue = d && d < today && !t.done;
      const daysUntil = d ? Math.ceil((d - today) / 86400000) : null;
      let duePillClass = 'ok', dueLabel = '';
      if (d) {
        if (isOverdue) { duePillClass = 'overdue'; dueLabel = `Overdue ${Math.abs(daysUntil)}d`; }
        else if (daysUntil === 0) { duePillClass = 'today'; dueLabel = 'Today'; }
        else if (daysUntil <= 7) { duePillClass = 'soon'; dueLabel = `${daysUntil}d`; }
        else { duePillClass = 'ok'; dueLabel = d.toLocaleDateString('en-GB', {day:'numeric',month:'short'}); }
      }
      return `
        <div class="task-item-row ${t.done ? 'task-done' : ''}">
          <div class="task-check-wrap" onclick="toggleTask('${t.id}', event)">
            <div class="task-checkbox ${t.done ? 'checked' : ''}"></div>
          </div>
          <div class="task-body" style="cursor:pointer" onclick="openEditTaskModal('${t.id}', event)">
            <div class="task-title">${esc(t.text)}</div>
            <div class="task-meta">
              ${client ? `<span class="task-client-link" onclick="event.stopPropagation();openClientDetail('${client.id}')">${esc(client.name)}</span>` : ''}
              ${dueLabel ? `<span class="task-due-pill task-due-pill--${duePillClass}">${dueLabel}</span>` : ''}
              ${t.jiraLink ? `<a href="${t.jiraLink}" target="_blank" onclick="event.stopPropagation()" style="font-size:11px;color:var(--accent);text-decoration:none;border:1px solid var(--border);border-radius:4px;padding:1px 6px">Jira ↗</a>` : ''}
              ${t.slackLink ? `<a href="${t.slackLink}" target="_blank" onclick="event.stopPropagation()" style="font-size:11px;color:#4a90d9;text-decoration:none;border:1px solid var(--border);border-radius:4px;padding:1px 6px">Slack ↗</a>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('') + `</div>`;
}

function toggleTask(taskId, event) {
  if (event) event.stopPropagation();
  const t = allTasks.find(x => x.id === taskId);
  if (!t) return;
  t.done = !t.done;
  t.completedAt = t.done ? new Date().toISOString() : null;
  saveTasksToStorage();
  // Re-render whichever view is active
  if (currentView === 'tasks') renderTasksView();
  if (currentView === 'overview') renderOverview();
  if (currentView === 'detail' && activeClientId) renderClientTasksSection(activeClientId);
  updateTasksBadge();
}

function updateTasksBadge() {
  const today = new Date(); today.setHours(0,0,0,0);
  const overdue = allTasks.filter(t => !t.done && t.dueDate && new Date(t.dueDate) < today).length;
  const badge = document.getElementById('tasks-badge');
  if (badge) {
    if (overdue > 0) { badge.textContent = overdue; badge.style.display = 'inline'; }
    else badge.style.display = 'none';
  }
}

// ─── TASK MODAL ───────────────────────────────────────────────────────────────

function openAddTaskModal(clientId) {
  populateTaskModalClients();
  document.getElementById('task-modal-title').textContent = 'Add Task';
  document.getElementById('task-modal-text').value = '';
  document.getElementById('task-modal-client').value = clientId || '';
  document.getElementById('task-modal-priority').value = 'medium';
  document.getElementById('task-modal-due').value = '';
  document.getElementById('task-modal-type').value = 'follow-up';
  document.getElementById('task-modal-notes').value = '';
  document.getElementById('task-modal-jira').value = '';
  if (document.getElementById('task-modal-workstream')) document.getElementById('task-modal-workstream').value = '';
  if (document.getElementById('task-modal-owner')) document.getElementById('task-modal-owner').value = '';
  if (document.getElementById('task-modal-slack')) document.getElementById('task-modal-slack').value = '';
  if (document.getElementById('task-modal-tags')) document.getElementById('task-modal-tags').value = '';
  document.getElementById('task-modal-id').value = '';
  document.getElementById('task-modal-delete-btn').style.display = 'none';
  document.getElementById('task-modal').style.display = 'flex';
  setTimeout(() => document.getElementById('task-modal-text').focus(), 50);
}

function openEditTaskModal(taskId, event) {
  if (event) event.stopPropagation();
  const t = allTasks.find(x => x.id === taskId);
  if (!t) return;
  populateTaskModalClients();
  document.getElementById('task-modal-title').textContent = 'Edit Task';
  document.getElementById('task-modal-text').value = t.text || '';
  document.getElementById('task-modal-client').value = t.clientId || '';
  document.getElementById('task-modal-priority').value = t.priority || 'medium';
  document.getElementById('task-modal-due').value = t.dueDate || '';
  document.getElementById('task-modal-type').value = t.type || 'follow-up';
  document.getElementById('task-modal-notes').value = t.notes || '';
  document.getElementById('task-modal-jira').value = t.jiraLink || '';
  if (document.getElementById('task-modal-workstream')) document.getElementById('task-modal-workstream').value = t.workstream || '';
  if (document.getElementById('task-modal-owner')) document.getElementById('task-modal-owner').value = t.owner || '';
  if (document.getElementById('task-modal-slack')) document.getElementById('task-modal-slack').value = t.slackLink || '';
  if (document.getElementById('task-modal-tags')) document.getElementById('task-modal-tags').value = t.tags || '';
  document.getElementById('task-modal-id').value = taskId;
  document.getElementById('task-modal-delete-btn').style.display = 'inline-block';
  document.getElementById('task-modal').style.display = 'flex';
}

function populateTaskModalClients() {
  const sel = document.getElementById('task-modal-client');
  // Clear and repopulate
  while (sel.options.length > 1) sel.remove(1);
  allClients.filter(c => !isChurn(c)).sort((a,b) => a.name.localeCompare(b.name)).forEach(c => {
    const o = document.createElement('option');
    o.value = c.id; o.textContent = c.name;
    sel.appendChild(o);
  });
}

function closeTaskModal() {
  document.getElementById('task-modal').style.display = 'none';
}

function saveTaskFromModal() {
  const text = document.getElementById('task-modal-text').value.trim();
  if (!text) { showToast('Please enter a task description.', 'warn'); return; }

  const id = document.getElementById('task-modal-id').value;
  const taskData = {
    text,
    clientId:   document.getElementById('task-modal-client').value || null,
    workstream: document.getElementById('task-modal-workstream')?.value.trim() || null,
    owner:      document.getElementById('task-modal-owner')?.value.trim() || null,
    priority:   document.getElementById('task-modal-priority').value,
    dueDate:    document.getElementById('task-modal-due').value || null,
    type:       document.getElementById('task-modal-type').value,
    notes:      document.getElementById('task-modal-notes').value.trim() || null,
    jiraLink:   document.getElementById('task-modal-jira').value.trim() || null,
    slackLink:  document.getElementById('task-modal-slack')?.value.trim() || null,
    tags:       document.getElementById('task-modal-tags')?.value.trim() || null,
    updatedAt:  new Date().toISOString(),
  };

  if (id) {
    // Edit existing
    const t = allTasks.find(x => x.id === id);
    if (t) Object.assign(t, taskData);
    showToast('✓ Task updated');
  } else {
    // New task
    allTasks.push({
      id: 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2,6),
      ...taskData,
      done: false,
      createdAt: new Date().toISOString(),
    });
    showToast('✓ Task added');
  }

  saveTasksToStorage();
  closeTaskModal();
  if (currentView === 'tasks') renderTasksView();
  if (currentView === 'overview') renderOverview();
  if (currentView === 'detail' && activeClientId) renderClientTasksSection(activeClientId);
  updateTasksBadge();

  // Sync to Google Sheets
  const savedTask = id ? allTasks.find(x => x.id === id) : allTasks[allTasks.length - 1];
  if (savedTask) {
    fetch(GAS_URL, { method: 'POST', body: JSON.stringify({ action: 'saveTask', task: savedTask }) })
      .catch(e => console.warn('Task sync failed:', e));
  }
}

function deleteTaskFromModal() {
  const id = document.getElementById('task-modal-id').value;
  if (!id) return;
  if (!confirm('Delete this task?')) return;
  allTasks = allTasks.filter(t => t.id !== id);
  saveTasksToStorage();
  closeTaskModal();
  if (currentView === 'tasks') renderTasksView();
  if (currentView === 'overview') renderOverview();
  if (currentView === 'detail' && activeClientId) renderClientTasksSection(activeClientId);
  updateTasksBadge();
  showToast('Task deleted');

  // Sync delete to Google Sheets
  fetch(GAS_URL, { method: 'POST', body: JSON.stringify({ action: 'deleteTask', taskId: id }) })
    .catch(e => console.warn('Task delete sync failed:', e));
}

// ─── CLIENT DETAIL TASKS SECTION ─────────────────────────────────────────────

function renderClientTasksSection(clientId) {
  const el = document.getElementById(`client-tasks-${clientId}`);
  if (!el) return;

  const today = new Date(); today.setHours(0,0,0,0);
  const tasks = allTasks.filter(t => t.clientId === clientId && !t.done)
    .sort((a,b) => {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  if (!tasks.length) {
    el.innerHTML = `<div style="font-size:13px;color:var(--text3);padding:8px 0">No open tasks — <button onclick="openAddTaskModal('${clientId}')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-family:var(--font);font-size:13px">add one</button></div>`;
    return;
  }

  el.innerHTML = tasks.map(t => {
    const d = t.dueDate ? new Date(t.dueDate) : null;
    const isOverdue = d && d < today;
    const daysUntil = d ? Math.ceil((d - today) / 86400000) : null;
    let dueText = '';
    let dueColor = 'var(--text3)';
    if (d) {
      if (isOverdue) { dueText = `Overdue ${Math.abs(daysUntil)}d`; dueColor = 'var(--red)'; }
      else if (daysUntil === 0) { dueText = 'Today'; dueColor = 'var(--yellow)'; }
      else { dueText = d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}); }
    }
    return `
      <div class="task-item-row" style="padding:8px 0;border-bottom:1px solid var(--border)">
        <div class="task-check-wrap" onclick="toggleTask('${t.id}', event)">
          <div class="task-checkbox"></div>
        </div>
        <div class="task-body" style="cursor:pointer" onclick="openEditTaskModal('${t.id}', event)">
          <div class="task-title" style="font-size:13px">${esc(t.text)}</div>
          ${dueText ? `<div style="font-size:11.5px;color:${dueColor};margin-top:2px">${dueText}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}



function exportData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    clients: allClients,
    tasks: allTasks,
    redashData: REDASH_DATA,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cs-dashboard-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✓ Backup downloaded');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.clients && Array.isArray(data.clients)) {
          allClients = data.clients;
          if (data.tasks && Array.isArray(data.tasks)) {
            allTasks = data.tasks;
            saveTasksToStorage();
          }
          if (data.redashData) mergeRedashData(data.redashData);
          enrichClientsWithRedash();
          normalizeClients();
          saveClientsLocally();
          filteredClients = [...allClients];
          populateTierFilter();
          populateClientFilters();
          renderOverview();
          renderClientCards();
          showToast('✓ Data imported — ' + allClients.length + ' clients loaded');
        } else {
          showToast('Invalid backup file', 'error');
        }
      } catch(err) {
        showToast('Import failed: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── REDASH IMPORT (paste JSON from Redash export) ────────────────────────────

function openRedashImport() {
  let modal = document.getElementById('redash-import-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'redash-import-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';
    modal.innerHTML = `
      <div style="background:var(--card-bg);border-radius:12px;padding:24px;width:560px;max-height:80vh;display:flex;flex-direction:column;gap:16px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 style="margin:0;font-size:16px;font-weight:600">Import Redash Data</h3>
          <button onclick="closeRedashImport()" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--text2)">×</button>
        </div>
        <p style="margin:0;font-size:13px;color:var(--text2)">Paste the JSON output from your Redash WAU/activity query below. This will merge the data into the dashboard without overwriting your client settings.</p>
        <textarea id="redash-paste-area" placeholder='{"weeks":[...],"wau":{...},"activity":{...},"latestWeekSummary":{...}}' 
          style="height:200px;border:1px solid var(--border);border-radius:8px;padding:12px;font-size:12px;font-family:monospace;resize:vertical;background:var(--bg);color:var(--text1)"></textarea>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button onclick="closeRedashImport()" class="btn-secondary" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:none;cursor:pointer">Cancel</button>
          <button onclick="applyRedashImport()" class="btn-primary" style="padding:8px 16px;border-radius:8px;background:var(--accent);color:white;border:none;cursor:pointer;font-weight:600">Import</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';
  document.getElementById('redash-paste-area').value = '';
}

function closeRedashImport() {
  const modal = document.getElementById('redash-import-modal');
  if (modal) modal.style.display = 'none';
}

function applyRedashImport() {
  const raw = document.getElementById('redash-paste-area').value.trim();
  if (!raw) { showToast('Nothing to import', 'warn'); return; }
  try {
    const rd = JSON.parse(raw);
    mergeRedashData(rd);
    enrichClientsWithRedash();
    normalizeClients();
    saveClientsLocally();
    filteredClients = [...allClients];
    renderOverview();
    renderClientCards();
    closeRedashImport();
    const wk = REDASH_DATA.latestWeek || 'unknown week';
    showToast(`✓ Redash data imported (latest: ${wk})`);
  } catch(e) {
    showToast('Invalid JSON: ' + e.message, 'error');
  }
}

// ─── JIRA CSV IMPORT ──────────────────────────────────────────────────────────

function openJiraImport() {
  let modal = document.getElementById('jira-import-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'jira-import-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';
    modal.innerHTML = `
      <div style="background:var(--card-bg);border-radius:12px;padding:24px;width:580px;max-height:85vh;display:flex;flex-direction:column;gap:16px;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 style="margin:0;font-size:16px;font-weight:600">Update Jira Tickets</h3>
          <button onclick="closeJiraImport()" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--text2)">×</button>
        </div>

        <div style="background:var(--bg);border-radius:8px;padding:14px;font-size:13px;color:var(--text2);line-height:1.7">
          <strong style="color:var(--text1);display:block;margin-bottom:6px">How to export from Jira:</strong>
          1. Go to <strong>knops.atlassian.net</strong> → your project → Issues<br>
          2. Search/filter for project = KNL1 (all issues)<br>
          3. Click <strong>Export</strong> → <strong>Export CSV (all fields)</strong><br>
          4. Drag the downloaded CSV file onto the box below
        </div>

        <div id="jira-drop-zone" style="border:2px dashed var(--border);border-radius:10px;padding:32px;text-align:center;cursor:pointer;transition:all 0.2s"
          ondragover="event.preventDefault();this.style.borderColor='var(--accent)';this.style.background='rgba(0,196,176,0.05)'"
          ondragleave="this.style.borderColor='var(--border)';this.style.background=''"
          ondrop="handleJiraCSVDrop(event)"
          onclick="document.getElementById('jira-csv-file').click()">
          <div style="font-size:28px;margin-bottom:8px">📄</div>
          <div style="font-size:14px;font-weight:600;color:var(--text1);margin-bottom:4px">Drop your Jira CSV here</div>
          <div style="font-size:12px;color:var(--text3)">or click to browse</div>
          <input type="file" id="jira-csv-file" accept=".csv" style="display:none" onchange="handleJiraCSVFile(this.files[0])">
        </div>

        <div id="jira-import-status" style="display:none;font-size:13px;padding:10px 14px;border-radius:8px"></div>

        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button onclick="closeJiraImport()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:none;cursor:pointer;font-size:13px">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';
  document.getElementById('jira-import-status').style.display = 'none';
}

function closeJiraImport() {
  const modal = document.getElementById('jira-import-modal');
  if (modal) modal.style.display = 'none';
}

function handleJiraCSVDrop(event) {
  event.preventDefault();
  document.getElementById('jira-drop-zone').style.borderColor = 'var(--border)';
  document.getElementById('jira-drop-zone').style.background = '';
  const file = event.dataTransfer.files[0];
  if (file && file.name.endsWith('.csv')) {
    handleJiraCSVFile(file);
  } else {
    showJiraImportStatus('Please drop a .csv file.', 'error');
  }
}

function handleJiraCSVFile(file) {
  if (!file) return;
  showJiraImportStatus('Reading file…', 'info');
  const reader = new FileReader();
  reader.onload = e => parseJiraCSV(e.target.result);
  reader.readAsText(file, 'UTF-8');
}

function parseJiraCSV(csvText) {
  try {
    const rows = csvText.trim().split('\n');
    if (rows.length < 2) { showJiraImportStatus('CSV appears empty.', 'error'); return; }

    // Parse header row — handle quoted headers
    const headers = parseCSVRow(rows[0]).map(h => h.trim().toLowerCase());

    // Find column indices
    const col = name => headers.findIndex(h => h.includes(name.toLowerCase()));
    const keyCol      = col('issue key') !== -1 ? col('issue key') : col('key');
    const summaryCol  = col('summary');
    const statusCol   = col('status');
    const priorityCol = col('priority');
    const assigneeCol = col('assignee');
    const createdCol  = col('created');
    const updatedCol  = col('updated');
    const dueDateCol  = col('due date') !== -1 ? col('due date') : col('due');

    // Find client name column — try exact then partial
    let clientCol = headers.findIndex(h => h === 'client name');
    if (clientCol === -1) clientCol = headers.findIndex(h => h.includes('client'));
    // Fallback: labels or components
    if (clientCol === -1) clientCol = col('labels');
    if (clientCol === -1) clientCol = col('component');

    const statusMap = {
      'to do': 'open', 'open': 'open', 'new': 'open', 'reopened': 'open',
      'in progress': 'inProgress', 'in review': 'inProgress',
      'on hold': 'onHold', 'blocked': 'onHold', 'waiting': 'onHold',
      'done': 'resolved', 'resolved': 'resolved', 'closed': 'resolved'
    };

    function mapStatus(s) {
      const k = (s || '').toLowerCase();
      for (const [key, val] of Object.entries(statusMap)) {
        if (k.includes(key)) return val;
      }
      return 'open';
    }

    const byClient = {};
    let unassigned = 0;
    let total = 0;

    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].trim()) continue;
      const cells = parseCSVRow(rows[i]);
      total++;

      const clientName = clientCol !== -1 ? (cells[clientCol] || '').trim() : '';
      const name = clientName || '__unassigned__';
      if (!clientName) unassigned++;

      if (!byClient[name]) byClient[name] = { open: 0, inProgress: 0, resolved: 0, onHold: 0, tickets: [] };

      const status = cells[statusCol] || '';
      const cat = mapStatus(status);
      byClient[name][cat]++;
      byClient[name].tickets.push({
        key:      keyCol !== -1 ? cells[keyCol] || '' : '',
        summary:  summaryCol !== -1 ? cells[summaryCol] || '' : '',
        status:   status,
        priority: priorityCol !== -1 ? cells[priorityCol] || '' : '',
        assignee: assigneeCol !== -1 ? cells[assigneeCol] || '' : '',
        created:  createdCol !== -1 ? (cells[createdCol] || '').slice(0, 10) : '',
        updated:  updatedCol !== -1 ? (cells[updatedCol] || '').slice(0, 10) : '',
        dueDate:  dueDateCol !== -1 ? (cells[dueDateCol] || '').slice(0, 10) : '',
      });
    }

    delete byClient['__unassigned__'];

    // Merge into dashboard
    mergeJiraData(byClient);
    saveClientsLocally();
    filteredClients = [...allClients];
    renderOverview();
    renderClientCards();

    const clientCount = Object.keys(byClient).length;
    showJiraImportStatus(
      `✓ Imported ${total} tickets across ${clientCount} clients` +
      (unassigned > 0 ? ` (${unassigned} had no client name)` : ''),
      'success'
    );
    showToast(`✓ Jira updated — ${total} tickets`);

    if (clientCol === -1) {
      showJiraImportStatus(
        `⚠ Could not find a "Client Name" column in the CSV. Tickets were grouped by Labels instead. ` +
        `Headers found: ${headers.slice(0,8).join(', ')}…`,
        'warn'
      );
    }

  } catch(e) {
    showJiraImportStatus('Parse error: ' + e.message, 'error');
  }
}

function parseCSVRow(row) {
  // Handles quoted fields with commas and newlines
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') {
      if (inQuotes && row[i+1] === '"') { cur += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

function showJiraImportStatus(msg, type) {
  const el = document.getElementById('jira-import-status');
  if (!el) return;
  const colors = {
    info:    { bg: '#e6faf8', color: '#007a70', border: '#00c4b0' },
    success: { bg: '#e6fff4', color: '#007a40', border: '#00c070' },
    error:   { bg: '#fff0f0', color: '#c00',    border: '#f95757' },
    warn:    { bg: '#fff8e6', color: '#7a5500',  border: '#f8a221' },
  };
  const c = colors[type] || colors.info;
  el.style.cssText = `display:block;background:${c.bg};color:${c.color};border:1px solid ${c.border};border-radius:8px;padding:10px 14px;font-size:13px`;
  el.textContent = msg;
}

// ─── NOTES TIMELINE ──────────────────────────────────────────────────────────
function parseNotes(c) {
  // Notes stored as JSON array of {text, ts} or legacy plain string
  if (!c.notes) return [];
  try {
    const parsed = JSON.parse(c.notes);
    if (Array.isArray(parsed)) return parsed;
  } catch(e) {}
  // Legacy: plain string → wrap as single entry with no timestamp
  return c.notes.trim() ? [{ text: c.notes.trim(), ts: null }] : [];
}

function renderNotesTimeline(c) {
  const entries = parseNotes(c);
  if (!entries.length) return '<p style="font-size:12px;color:var(--text3);margin:0">No notes yet — add one below.</p>';
  return entries.slice().reverse().map(e => `
    <div class="note-entry">
      ${e.ts ? `<span class="note-ts">${new Date(e.ts).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})} · ${new Date(e.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>` : ''}
      <p class="note-text">${esc(e.text)}</p>
    </div>
  `).join('');
}

function addNote(clientId) {
  const c = allClients.find(x => x.id === clientId);
  const input = document.getElementById(`notes-input-${clientId}`);
  if (!c || !input || !input.value.trim()) return;

  const entries = parseNotes(c);
  entries.push({ text: input.value.trim(), ts: new Date().toISOString() });
  c.notes = JSON.stringify(entries);
  input.value = '';

  // Re-render timeline
  const tl = document.getElementById(`notes-timeline-${clientId}`);
  if (tl) tl.innerHTML = renderNotesTimeline(c);

  if (!pendingEdits[clientId]) pendingEdits[clientId] = {};
  pendingEdits[clientId].notes = c.notes;
  renderDetailHeader(c);
  scheduleAutoSave(clientId);
}

// ─── RENEWALS VIEW ────────────────────────────────────────────────────────────
function renderRenewals() {
  const el = document.getElementById('renewals-content');
  const now = new Date();

  const withRenewals = allClients
    .filter(c => c.contractEndDate && c.tier !== 'Churn')
    .map(c => {
      const d = parseDate(c.contractEndDate);
      const days = d ? Math.ceil((d - now) / 86400000) : null;
      return { ...c, renewalDays: days, contractEndDateObj: d };
    })
    .filter(c => c.renewalDays !== null)
    .sort((a, b) => a.renewalDays - b.renewalDays);

  const overdue  = withRenewals.filter(c => c.renewalDays < 0);
  const d30      = withRenewals.filter(c => c.renewalDays >= 0  && c.renewalDays <= 30);
  const d60      = withRenewals.filter(c => c.renewalDays > 30  && c.renewalDays <= 60);
  const d90      = withRenewals.filter(c => c.renewalDays > 60  && c.renewalDays <= 90);
  const beyond   = withRenewals.filter(c => c.renewalDays > 90);
  const noDate   = allClients.filter(c => !c.contractEndDate && isPaid(c));

  const totalAtRisk = [...overdue, ...d30]
    .reduce((s, c) => s + toUSD(c.contractValue || 0, c.currency || 'USD'), 0);

  el.innerHTML = `
    <div class="digest-stats" style="margin-bottom:24px">
      <div class="digest-stat digest-stat--red">
        <span class="digest-stat-label">Overdue</span>
        <span class="digest-stat-val">${overdue.length}</span>
      </div>
      <div class="digest-stat digest-stat--warn">
        <span class="digest-stat-label">Due in 30 days</span>
        <span class="digest-stat-val">${d30.length}</span>
      </div>
      <div class="digest-stat">
        <span class="digest-stat-label">Due in 31–60 days</span>
        <span class="digest-stat-val">${d60.length}</span>
      </div>
      <div class="digest-stat">
        <span class="digest-stat-label">ARR at risk (≤30d)</span>
        <span class="digest-stat-val">${formatUSD(totalAtRisk)}</span>
      </div>
    </div>
    ${renewalBucket('🔴 Overdue', overdue, true)}
    ${renewalBucket('🟠 Due within 30 days', d30, true)}
    ${renewalBucket('🟡 Due in 31–60 days', d60)}
    ${renewalBucket('🟢 Due in 61–90 days', d90)}
    ${renewalBucket('⚪ Beyond 90 days', beyond)}
    ${noDate.length ? renewalBucket('— No renewal date set', noDate) : ''}
  `;
}

function renewalBucket(title, clients, highlight = false) {
  if (!clients.length) return '';
  const rows = clients.map(c => {
    const days = c.renewalDays;
    const daysLabel = days === undefined || days === null ? '—'
      : days < 0 ? `${Math.abs(days)}d overdue`
      : days === 0 ? 'Today'
      : `${days}d`;
    const valUSD = toUSD(c.contractValue || 0, c.currency || 'USD');
    return `
      <tr onclick="showDetail('${c.id}')" style="cursor:pointer">
        <td class="client-name-cell">${esc(c.name)}</td>
        <td><span class="tier-badge tier-badge--${(c.tier||'').toLowerCase()}">${esc(c.tier||'—')}</span></td>
        <td style="color:${days < 0 ? 'var(--red)' : days <= 30 ? 'var(--yellow)' : 'var(--text2)'};font-weight:500">${daysLabel}</td>
        <td>${c.contractEndDate ? new Date(c.contractEndDate).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}) : '—'}</td>
        <td>${c.contractValue ? formatCurrency(c.contractValue, c.currency||'USD') : '—'}</td>
        <td style="color:var(--text2);font-size:12px">${valUSD && c.currency !== 'USD' ? formatUSD(valUSD) : ''}</td>
      </tr>`;
  }).join('');
  return `
    <div class="overview-panel" style="${highlight ? 'border-color:var(--red);' : ''}margin-bottom:16px">
      <div class="overview-panel-header">
        <span class="overview-panel-title">${title}</span>
        <span class="overview-panel-sub">${clients.length} client${clients.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="table-wrap">
        <table class="client-table">
          <thead><tr><th>Client</th><th>Tier</th><th>Days</th><th>Contract End</th><th>Contract Value</th><th>USD</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

// ─── WEEKLY DIGEST ────────────────────────────────────────────────────────────
function renderDigest() {
  const el = document.getElementById('digest-content');
  const now = new Date();
  const today = now.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const rd = typeof REDASH_DATA !== 'undefined' ? REDASH_DATA : null;
  const weeks = rd?.weeks || [];
  const latestWeek = rd?.latestWeek;
  const prevWeek = weeks.length >= 2 ? weeks[weeks.length - 2] : null;

  // WAU drops >20%
  const wauDrops = [];
  if (rd && latestWeek && prevWeek) {
    allClients.forEach(c => {
      const wauData = rd.wau[c.name] || {};
      const curr = wauData[latestWeek];
      const prev = wauData[prevWeek];
      if (curr !== undefined && prev && prev > 0) {
        const drop = (prev - curr) / prev;
        if (drop >= 0.2) wauDrops.push({ c, curr, prev, drop });
      }
    });
    wauDrops.sort((a, b) => b.drop - a.drop);
  }

  // Overdue activities
  const overdueActivities = allClients.filter(c => {
    if (!c.nextActivityDate) return false;
    const d = parseDate(c.nextActivityDate);
    return d && d < now;
  }).sort((a, b) => parseDate(a.nextActivityDate) - parseDate(b.nextActivityDate));

  // Renewals in 30 days
  const renewalsSoon = allClients.filter(c => {
    if (!c.contractEndDate || c.tier === 'Churn') return false;
    const d = parseDate(c.contractEndDate);
    if (!d) return false;
    const days = Math.ceil((d - now) / 86400000);
    return days >= 0 && days <= 30;
  }).sort((a,b) => parseDate(a.contractEndDate) - parseDate(b.contractEndDate));

  // No check-in in 45+ days
  const BAU_MONTHS = ['January','February','March','April','May','June','July'];
  const stale = allClients.filter(c => {
    if (!isPaid(c)) return false;
    if (!c.bau?.months?.length) return true;
    const lastDone = [...(c.bau.months || [])].reverse().find(m => m.done);
    if (!lastDone) return true;
    const mIdx = BAU_MONTHS.indexOf(lastDone.month);
    if (mIdx < 0) return false;
    const lastDate = new Date(now.getFullYear(), mIdx, 1);
    const daysSince = Math.ceil((now - lastDate) / 86400000);
    return daysSince > 45;
  });

  const totalIssues = wauDrops.length + overdueActivities.length + renewalsSoon.length;

  el.innerHTML = `
    <div style="margin-bottom:24px">
      <p style="font-size:13px;color:var(--text2)">${today}</p>
      ${totalIssues === 0
        ? '<div class="digest-ok">✓ All clear — no urgent items this week</div>'
        : `<p style="font-size:13px;color:var(--text2);margin-top:4px">${totalIssues} item${totalIssues!==1?'s':''} need${totalIssues===1?'s':''} your attention.</p>`
      }
    </div>

    ${wauDrops.length ? `
    <div class="digest-section">
      <div class="digest-section-title">📉 WAU Drop &gt;20% (${latestWeek} vs ${prevWeek})</div>
      ${wauDrops.map(({c, curr, prev, drop}) => `
        <div class="digest-row" onclick="showDetail('${c.id}')">
          <span class="digest-client">${esc(c.name)}</span>
          <span class="digest-detail">${prev.toLocaleString()} → ${curr.toLocaleString()} WAU</span>
          <span class="digest-badge digest-badge--red">▼ ${Math.round(drop*100)}%</span>
        </div>`).join('')}
    </div>` : ''}

    ${overdueActivities.length ? `
    <div class="digest-section">
      <div class="digest-section-title">⏰ Overdue Activities</div>
      ${overdueActivities.map(c => `
        <div class="digest-row" onclick="showDetail('${c.id}')">
          <span class="digest-client">${esc(c.name)}</span>
          <span class="digest-detail">${esc(c.nextActivityTitle || 'Activity')} · due ${new Date(c.nextActivityDate).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</span>
          <span class="digest-badge digest-badge--red">${Math.ceil((now - parseDate(c.nextActivityDate)) / 86400000)}d late</span>
        </div>`).join('')}
    </div>` : ''}

    ${renewalsSoon.length ? `
    <div class="digest-section">
      <div class="digest-section-title">📋 Renewals in 30 Days</div>
      ${renewalsSoon.map(c => {
        const days = Math.ceil((parseDate(c.contractEndDate) - now) / 86400000);
        return `
        <div class="digest-row" onclick="showDetail('${c.id}')">
          <span class="digest-client">${esc(c.name)}</span>
          <span class="digest-detail">${c.contractValue ? formatCurrency(c.contractValue, c.currency||'USD') : 'No contract value'}</span>
          <span class="digest-badge digest-badge--warn">${days === 0 ? 'Today' : `${days}d`}</span>
        </div>`;
      }).join('')}
    </div>` : ''}

    ${stale.length ? `
    <div class="digest-section">
      <div class="digest-section-title">🔕 No Check-in in 45+ Days</div>
      ${stale.map(c => `
        <div class="digest-row" onclick="showDetail('${c.id}')">
          <span class="digest-client">${esc(c.name)}</span>
          <span class="digest-detail">${c.bau?.months ? 'Last: ' + ([...c.bau.months].reverse().find(m=>m.done)?.month || 'Never') : 'No BAU data'}</span>
          <span class="digest-badge digest-badge--gray">Stale</span>
        </div>`).join('')}
    </div>` : ''}
  `;
}

// ─── ONBOARDING PIPELINE ─────────────────────────────────────────────────────
function renderOnboardingPipeline() {
  const el = document.getElementById('onboarding-pipeline-content');
  const OB_STEPS = [
    'Set up org account','Provide features/modules',
    'Client provides user details','Configure permissions',
    'Client provides content','Digitize forms/checklists',
    'Digitize training content','Alignment meeting',
    'Share KNOW guides','Set up support channels',
    'Users/Comms/Ops/Learn/Shifts','Launch',
    'Feedback/Review meeting','Post-launch catch up',
  ];
  const total = OB_STEPS.length;

  const pilots = allClients.filter(c => c.tier === 'Pilot' || (!isPaid(c) && !isChurn(c)));

  if (!pilots.length) {
    el.innerHTML = '<p style="color:var(--text2);padding:24px">No pilot clients currently.</p>';
    return;
  }

  // Group into stages by % complete
  const withProgress = pilots.map(c => {
    const ob = c.onboarding || {};
    const done = OB_STEPS.filter(s => ob[s]).length;
    const pct = Math.round(done / total * 100);
    let stage;
    if (pct === 0)       stage = 'Not started';
    else if (pct <= 25)  stage = 'Early setup';
    else if (pct <= 50)  stage = 'In progress';
    else if (pct <= 75)  stage = 'Almost there';
    else if (pct < 100)  stage = 'Final steps';
    else                 stage = 'Complete ✓';
    return { c, done, pct, stage };
  }).sort((a, b) => b.pct - a.pct);

  const stages = ['Complete ✓','Final steps','Almost there','In progress','Early setup','Not started'];
  const grouped = {};
  stages.forEach(s => { grouped[s] = []; });
  withProgress.forEach(p => grouped[p.stage].push(p));

  el.innerHTML = `
    <div class="ob-pipeline">
      ${stages.map(stage => {
        const items = grouped[stage];
        if (!items.length) return '';
        return `
          <div class="ob-column">
            <div class="ob-column-header">
              <span class="ob-column-title">${stage}</span>
              <span class="ob-column-count">${items.length}</span>
            </div>
            ${items.map(({c, done, pct}) => `
              <div class="ob-card" onclick="showDetail('${c.id}')">
                <div class="ob-card-name">${esc(c.name)}</div>
                <div class="ob-progress-bar">
                  <div class="ob-progress-fill" style="width:${pct}%"></div>
                </div>
                <div class="ob-card-meta">${done}/${total} steps · ${pct}%</div>
                <div class="ob-steps-mini">
                  ${OB_STEPS.map(s => `<div class="ob-step-dot ${c.onboarding?.[s] ? 'ob-step-dot--done' : ''}" title="${s}"></div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>`;
      }).join('')}
    </div>`;
}

// ─── TRANSCRIPT → TASKS ───────────────────────────────────────────────────────

let transcriptExtractedActions = [];

function openTranscriptModal(clientId) {
  // Populate client dropdown
  const sel = document.getElementById('transcript-client');
  if (sel) {
    while (sel.options.length > 1) sel.remove(1);
    allClients.filter(c => !isChurn(c))
      .sort((a,b) => a.name.localeCompare(b.name))
      .forEach(c => {
        const o = document.createElement('option');
        o.value = c.id; o.textContent = c.name;
        sel.appendChild(o);
      });
    if (clientId) sel.value = clientId;
  }
  showTranscriptStep1();
  document.getElementById('transcript-modal').style.display = 'flex';
  setTimeout(() => document.getElementById('transcript-text').focus(), 50);
}

function closeTranscriptModal() {
  document.getElementById('transcript-modal').style.display = 'none';
  document.getElementById('transcript-text').value = '';
  transcriptExtractedActions = [];
}

function showTranscriptStep1() {
  document.getElementById('transcript-step-1').style.display = 'block';
  document.getElementById('transcript-step-2').style.display = 'none';
  document.getElementById('transcript-loading').style.display = 'none';
}

function resetApiKey() {
  localStorage.removeItem('claude_api_key');
  showToast('API key cleared — you\'ll be prompted next time.');
}

async function analyseTranscript() {
  const text = document.getElementById('transcript-text').value.trim();
  if (!text) { showToast('Please paste a transcript first.', 'warn'); return; }

  const clientId = document.getElementById('transcript-client').value;
  const client = clientId ? allClients.find(c => c.id === clientId) : null;

  // Get API key — always prompt if missing or blank
  let apiKey = (localStorage.getItem('claude_api_key') || '').trim();
  if (!apiKey) {
    apiKey = (prompt('Enter your Anthropic API key\n(get one at console.anthropic.com → API Keys)\n\nIt will be saved locally on your machine:') || '').trim();
    if (!apiKey) {
      document.getElementById('transcript-loading').style.display = 'none';
      document.getElementById('transcript-step-1').style.display = 'block';
      return;
    }
    localStorage.setItem('claude_api_key', apiKey);
  }

  document.getElementById('transcript-step-1').style.display = 'none';
  document.getElementById('transcript-step-2').style.display = 'none';
  document.getElementById('transcript-loading').style.display = 'block';

  const prompt = `You are a customer success manager's assistant. Analyse the following call transcript or meeting notes and extract:
1. A brief summary (2-3 sentences max) of what was discussed
2. A list of clear action items — things that need to be done after this call

${client ? `This call was with client: ${client.name}` : ''}

For each action item, provide:
- "text": the action item (clear, specific, starts with a verb)
- "owner": who should do it (e.g. "Me", "Client", "Engineering") — infer from context
- "priority": "high", "medium", or "low" — infer from urgency in the call
- "type": one of: "follow-up", "qbr", "renewal", "onboarding", "escalation", "other"
- "dueDate": suggested due date in YYYY-MM-DD format if mentioned or inferable, otherwise null. Today is ${new Date().toISOString().slice(0,10)}.

Respond ONLY with valid JSON in this exact format, no explanation, no markdown:
{"summary":"...","actions":[{"text":"...","owner":"...","priority":"medium","type":"follow-up","dueDate":null}]}`;

  try {
    const response = await fetch('http://localhost:8081/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: `${prompt}\n\n---TRANSCRIPT---\n${text.slice(0, 8000)}` }]
      })
    });

    const data = await response.json();
    const raw = data.content?.[0]?.text || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    transcriptExtractedActions = (parsed.actions || []).map((a, i) => ({
      ...a,
      id: 'ta_' + i,
      clientId: clientId || null,
      selected: true,
    }));

    // Show results
    document.getElementById('transcript-loading').style.display = 'none';
    document.getElementById('transcript-step-2').style.display = 'block';

    // Summary box
    document.getElementById('transcript-summary-box').innerHTML =
      `<strong style="display:block;margin-bottom:6px;color:var(--text)">Summary</strong>${esc(parsed.summary || 'No summary extracted.')}`;

    // Actions list
    renderTranscriptActions();

  } catch(e) {
    document.getElementById('transcript-loading').style.display = 'none';
    document.getElementById('transcript-step-1').style.display = 'block';
    // If auth error, clear the saved key so they're prompted again
    if (e.message && (e.message.includes('401') || e.message.includes('auth'))) {
      localStorage.removeItem('claude_api_key');
      showToast('Invalid API key — please try again.', 'error');
    } else {
      showToast('Analysis failed: ' + e.message + '. Make sure the dashboard was opened via Launch Dashboard.command', 'error');
    }
  }
}

function renderTranscriptActions() {
  const el = document.getElementById('transcript-actions-list');
  if (!el) return;

  if (!transcriptExtractedActions.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text3)">No action items found in the transcript.</p>';
    return;
  }

  el.innerHTML = transcriptExtractedActions.map((a, i) => {
    const priorityColor = a.priority === 'high' ? 'var(--red)' : a.priority === 'medium' ? 'var(--yellow)' : 'var(--text3)';
    return `
      <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:8px;background:var(--bg2)">
        <div style="padding-top:1px;cursor:pointer" onclick="toggleTranscriptAction(${i})">
          <div style="width:16px;height:16px;border-radius:4px;border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;background:${a.selected ? 'var(--green)' : 'var(--bg2)'}">
            ${a.selected ? '<span style="color:white;font-size:10px">✓</span>' : ''}
          </div>
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:500;color:var(--text);margin-bottom:6px">${esc(a.text)}</div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <span style="font-size:11px;color:var(--text2)">${esc(a.owner || 'Me')}</span>
            <span style="font-size:11px;color:${priorityColor};font-weight:500">${a.priority}</span>
            <span style="font-size:11px;color:var(--text3)">${a.type}</span>
            <input type="date" value="${a.dueDate || ''}"
              onchange="transcriptExtractedActions[${i}].dueDate = this.value"
              style="font-size:11px;border:1px solid var(--border);border-radius:4px;padding:2px 6px;background:var(--bg);color:var(--text);font-family:var(--font)">
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update button label
  const selected = transcriptExtractedActions.filter(a => a.selected).length;
  const btn = document.getElementById('transcript-add-selected-btn');
  if (btn) btn.textContent = `Add ${selected} task${selected !== 1 ? 's' : ''} →`;
}

function toggleTranscriptAction(idx) {
  transcriptExtractedActions[idx].selected = !transcriptExtractedActions[idx].selected;
  renderTranscriptActions();
}

function addSelectedTasksFromTranscript() {
  const selected = transcriptExtractedActions.filter(a => a.selected);
  if (!selected.length) { showToast('No tasks selected.', 'warn'); return; }

  selected.forEach(a => {
    allTasks.push({
      id: 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2,6),
      text:      a.text,
      clientId:  a.clientId || null,
      priority:  a.priority || 'medium',
      dueDate:   a.dueDate || null,
      type:      a.type || 'follow-up',
      notes:     `From call transcript. Owner: ${a.owner || 'Me'}`,
      jiraLink:  null,
      done:      false,
      createdAt: new Date().toISOString(),
    });
  });

  saveTasksToStorage();
  closeTranscriptModal();
  updateTasksBadge();

  if (currentView === 'tasks') renderTasksView();
  if (currentView === 'overview') renderOverview();
  if (currentView === 'detail' && activeClientId) renderClientTasksSection(activeClientId);

  showToast(`✓ ${selected.length} task${selected.length !== 1 ? 's' : ''} added`);
}

