/* ============================================================
   Effective Giving Landscape — shared data
   85 organisations (from GWWC's "Active EG organisations" Notion
   database plus separately-researched additions). Loaded by
   index.html (The Effective Giving Islands).

   GROUPS holds each org's PRIMARY category — a relabelling of
   GWWC's own 8 "Primary type(s)" tags into functional groups
   (Charity evaluator / National fundraising / Broad fundraising /
   Philanthropy advisory / Niche fundraising are GWWC's original
   names, kept verbatim; "Grantmakers & pooled funds" merges
   GWWC's "Grantmaking foundation" + "Pooled fund"; "Talent, careers &
   communities" is a new group for orgs that route people, not money).

   SECONDARY holds each org's additional categories, applied
   uniformly: any org gets a secondary entry for a function it
   verifiably and prominently performs beyond its primary one —
   either because GWWC itself dual-tagged it, or because its own
   site describes a named, distinct programme (e.g. an expert-
   directed pooled fund, not just a themed donation bucket).
   ============================================================ */

const CAUSE_COLORS={
  "Humans":"var(--c-humans)","Animals":"var(--c-animals)","Climate":"var(--c-climate)",
  "X-risk":"var(--c-xrisk)","AI risks":"var(--c-ai)","Pandemics":"var(--c-pandemics)",
  "Nuclear":"var(--c-nuclear)","Democracy":"var(--c-democracy)","Other(s)":"var(--c-other)",
  "Multiple":"var(--c-other)"
};
const TYPE_ORDER=["Charity evaluator","National fundraising","Broad fundraising","Niche fundraising",
  "Philanthropy advisory","Grantmaking foundation","Pooled fund","Other"];
const SIZE_ORDER=["<$1M","$1M—$10M","$10M—$50M","$50M—$100M","$100M—$500M","$500M—$1B",">$1B","Not disclosed","N/A"];

const ORGS=[
 {n:"AI Risk Mitigation Fund",u:"https://www.airiskfund.com/",t:["Pooled fund"],usd:"$1M—$10M",mkt:"US",c:["AI risks"],y:2023,fte:"1-5"},
 {n:"AI Safety Tactical Opportunities Fund",u:"https://forum.effectivealtruism.org/users/jueyan",t:["Philanthropy advisory","Pooled fund"],usd:"$10M—$50M",mkt:"Global",c:["AI risks"],y:2023,fte:"1-5"},
 {n:"Ambitious Impact",u:"https://www.ambitiousimpact.com/",t:["Other"],usd:"<$1M",mkt:"Global",c:["Humans","Animals","Other(s)"],y:2018,fte:"11-20"},
 {n:"Animal Charity Evaluators",u:"https://animalcharityevaluators.org/",t:["Charity evaluator","Pooled fund"],usd:"$1M—$10M",mkt:"US",c:["Animals"],y:2012,fte:"11-20"},
 {n:"Anneta Targalt",u:"https://annetatargalt.ee/",t:["National fundraising"],usd:"<$1M",mkt:"Estonia",c:["Humans","Animals","Climate"],y:2021,fte:"<1"},
 {n:"Ark Philanthropy",u:"https://www.arkphilanthropy.org/",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"US (major donors)",c:["Animals","Humans","Climate","Other(s)","Democracy","AI risks","Pandemics"],y:2024,fte:"1-5"},
 {n:"Astralis Foundation",u:"https://astralisfoundation.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"Europe (major donors)",c:["AI risks"],y:2024,fte:"1-5"},
 {n:"Ayuda Efectiva",u:"https://ayudaefectiva.org/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Spain",c:["Humans","Animals","Climate"],y:2020,fte:"1-5"},
 {n:"Bedrock Philanthropy",u:"https://bedrockphilanthropy.com/",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"Global (major donors)",c:["Humans","Animals","X-risk","Climate","Other(s)"],y:2024,fte:"1-5"},
 {n:"Benefficienza",u:"https://benefficienza.it/",t:["National fundraising"],usd:"<$1M",mkt:"Italy",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Better Futures Guide",u:"https://www.betterfuturesguide.com/",t:["Charity evaluator"],usd:"<$1M",mkt:"Global",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Center on Long-Term Risk",u:"https://longtermrisk.org/grantmaking/",t:["Pooled fund"],usd:"<$1M",mkt:"Global",c:["AI risks"],y:2013,fte:"11-20"},
 {n:"Centre for Exploratory Altruism Research",u:"https://exploratory-altruism.org/",t:["Philanthropy advisory","Pooled fund"],usd:"<$1M",mkt:"Global, Asia",c:["Humans","Animals","X-risk","Other(s)"],y:2022,fte:"1-5"},
 {n:"Charity Navigator",u:"https://www.charitynavigator.org/",t:["Broad fundraising"],usd:"$50M—$100M",mkt:"US",c:["Humans","Animals","Climate","Other(s)"],y:2001,fte:"51-100"},
 {n:"CharityBox",u:"https://www.linkedin.com/company/the-charity-box",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"China",c:["Humans"],y:2021,fte:"1-5"},
 {n:"Coefficient Giving",u:"https://coefficientgiving.org/",t:["Grantmaking foundation","Philanthropy advisory"],usd:">$1B",mkt:"US, UK (major donors)",c:["Humans","Animals","X-risk","Other(s)","AI risks","Pandemics"],y:2011,fte:"51-100"},
 {n:"doebem",u:"https://doebem.org.br/",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"Brazil",c:["Humans"],y:2017,fte:"1-5"},
 {n:"Doneer Effectief",u:"https://doneereffectief.nl/",t:["National fundraising"],usd:"$10M—$50M",mkt:"Netherlands",c:["Humans","Animals","Climate"],y:2022,fte:"1-5"},
 {n:"Double Up Drive",u:"https://doubleupdrive.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US",c:["Humans","Animals","Climate","Other(s)"],y:2014,fte:"<1"},
 {n:"Effectief Geven",u:"https://www.effectiefgeven.be/",t:["National fundraising"],usd:"<$1M",mkt:"Belgium",c:["Humans","Animals","Climate"],y:2023,fte:"1-5"},
 {n:"Effective Altruism Australia",u:"https://effectivealtruism.org.au/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Australia",c:["Humans","Climate"],y:2015,fte:"1-5"},
 {n:"Effective Altruism Funds",u:"https://funds.effectivealtruism.org/",t:["Pooled fund"],usd:"$10M—$50M",mkt:"US/UK (global)",c:["Humans","Animals","X-risk"],y:2017,fte:"1-5"},
 {n:"Effective Altruism New Zealand",u:"https://effectivealtruism.nz/",t:["National fundraising"],usd:"<$1M",mkt:"New Zealand",c:["Humans","Animals","X-risk","Climate","AI risks","Pandemics"],y:2016,fte:"1-5"},
 {n:"Effective Giving Ireland",u:"https://effectivegiving.ie/",t:["National fundraising"],usd:"<$1M",mkt:"Ireland",c:["Humans","Animals","Climate"],y:2024,fte:"<1"},
 {n:"Effective Institutions Project",u:"https://effectiveinstitutionsproject.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"US",c:["Other(s)","AI risks","Democracy","Nuclear","Pandemics"],y:2021,fte:"6-10"},
 {n:"Effektiv Spenden",u:"https://effektiv-spenden.org/",t:["National fundraising","Philanthropy advisory"],usd:"$10M—$50M",mkt:"Germany, Switzerland, Austria, Czechia",c:["Humans","Animals","X-risk","Climate","Democracy"],y:2019,fte:"6-10"},
 {n:"Elevate Philanthropy",u:"https://elevatephilanthropy.com/",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"Global (major donors)",c:["Humans","Animals","Other(s)"],y:2026,fte:"1-5"},
 {n:"Etkili Bağış",u:"https://etkilibagis.org/",t:["National fundraising"],usd:"<$1M",mkt:"Turkey",c:["Humans","Animals","Climate"],y:2025,fte:"1-5"},
 {n:"FarmKind",u:"https://farmkind.giving/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US, UK",c:["Animals"],y:2024,fte:"1-5"},
 {n:"Founders Pledge",u:"https://www.founderspledge.com/",t:["Philanthropy advisory","Charity evaluator"],usd:"$100M—$500M",mkt:"Global (founders)",c:["Humans","Animals","X-risk","Climate","Other(s)"],y:2015,fte:"51-100"},
 {n:"Future of Life Institute",u:"https://futureoflife.org/",t:["Grantmaking foundation"],usd:"$1M—$10M",mkt:"n/a",c:["X-risk"],y:2014,fte:"21-50"},
 {n:"Ge Effektivt",u:"https://geeffektivt.se/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Sweden",c:["Humans","Animals","Climate"],y:2020,fte:"1-5"},
 {n:"Gi Effektivt",u:"https://gieffektivt.no/",t:["National fundraising","Philanthropy advisory"],usd:"$1M—$10M",mkt:"Norway",c:["Humans"],y:2016,fte:"6-10"},
 {n:"Giv Effektivt",u:"https://giveffektivt.dk/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Denmark",c:["Humans"],y:2021,fte:"1-5"},
 {n:"GiveWell",u:"https://www.givewell.org/",t:["Charity evaluator","Philanthropy advisory"],usd:"$500M—$1B",mkt:"US, UK",c:["Humans"],y:2007,fte:"51-100"},
 {n:"GiveWise",u:"https://www.givewise.org.hk/",t:["National fundraising"],usd:"<$1M",mkt:"Hong Kong",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Giving Green",u:"https://www.givinggreen.earth/",t:["Charity evaluator"],usd:"$10M—$50M",mkt:"US, UK",c:["Climate"],y:2019,fte:"11-20"},
 {n:"Giving Multiplier",u:"https://www.givingmultiplier.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US",c:["Humans","Animals","X-risk","Climate"],y:2020,fte:"1-5"},
 {n:"Giving What We Can",u:"https://www.givingwhatwecan.org/",t:["Broad fundraising"],usd:"$10M—$50M",mkt:"Global",c:["Humans","Animals","X-risk","Climate","Other(s)"],y:2009,fte:"11-20"},
 {n:"GoodWallet",u:"https://www.thegoodwallet.org/",t:["Broad fundraising"],usd:"<$1M",mkt:"Global",c:["Humans","Animals"],y:2025,fte:"<1"},
 {n:"Happier Lives Institute",u:"https://www.happierlivesinstitute.org/",t:["Charity evaluator"],usd:"$1M—$10M",mkt:"US, UK",c:["Humans"],y:2019,fte:"1-5"},
 {n:"High-Impact Athletes",u:"https://www.highimpactathletes.org/",t:["Niche fundraising"],usd:"$1M—$10M",mkt:"Global (athletes and sports fans)",c:["Humans","Animals","Climate"],y:2020,fte:"6-10"},
 {n:"Impactful Giving",u:"https://impactfulgiving.in/",t:["National fundraising"],usd:"<$1M",mkt:"India",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Longview Philanthropy",u:"https://www.longview.org/",t:["Philanthropy advisory","Pooled fund"],usd:"$100M—$500M",mkt:"US, UK (major donors)",c:["AI risks","Pandemics","Nuclear","Other(s)"],y:2018,fte:"21-50"},
 {n:"Macroscopic Ventures",u:"https://www.macroscopic.org/",t:["Grantmaking foundation"],usd:"$50M—$100M",mkt:"Global (major donors)",c:["AI risks","X-risk","Animals","Democracy","Other(s)"],y:2019,fte:"6-10"},
 {n:"Manifund",u:"https://manifund.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"n/a",c:["Humans","Animals","X-risk"],y:2023,fte:"1-5"},
 {n:"Maximum Impact",u:"https://www.maximpact.org.il/",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"Israel",c:["Humans","Animals","Other(s)"],y:2022,fte:"1-5"},
 {n:"Mieux Donner",u:"https://www.mieuxdonner.org/",t:["National fundraising"],usd:"<$1M",mkt:"France",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Navigation Fund",u:"https://www.navigation.org/",t:["Grantmaking foundation"],usd:"$50M—$100M",mkt:"US",c:["Animals","Climate","Other(s)"],y:2023,fte:"6-10"},
 {n:"One for the World",u:"https://www.1fortheworld.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US, UK (students and young professionals)",c:["Humans"],y:2014,fte:"1-5"},
 {n:"Power for Democracies",u:"https://www.powerfordemocracies.org/",t:["Charity evaluator"],usd:"<$1M",mkt:"Global",c:["Democracy","Other(s)"],y:2024,fte:"6-10"},
 {n:"Raise",u:"https://www.joinraise.org/",t:["Niche fundraising"],usd:"<$1M",mkt:"UK (students)",c:["Humans"],y:2017,fte:"<1"},
 {n:"Raising Impact",u:"https://www.raisingimpact.org/",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"India (major donors)",c:["Humans"],y:2024,fte:"1-5"},
 {n:"RC Forward",u:"https://rcforward.org/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Canada",c:["Humans","Animals","Climate"],y:2017,fte:"1-5"},
 {n:"Regeneration Group",u:"https://www.regenerationgroup.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"Global",c:["Humans","Climate"],y:2018,fte:"6-10"},
 {n:"Senterra Funders",u:"https://www.senterrafunders.org/",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"Global (major donors)",c:["Animals"],y:2018,fte:"1-5"},
 {n:"Sentinel Bio",u:"https://www.sentinelbio.org/",t:["Philanthropy advisory","Pooled fund"],usd:"$10M—$50M",mkt:"Global",c:["Pandemics"],y:2024,fte:"6-10"},
 {n:"Serica",u:"https://www.sericaadvisory.org/",t:["Philanthropy advisory"],usd:"<$1M",mkt:"Asia, Africa",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Survival and Flourishing Fund",u:"https://survivalandflourishing.fund/",t:["Grantmaking foundation"],usd:"$50M—$100M",mkt:"Global",c:["X-risk","AI risks","Pandemics","Animals","Climate"],y:2019,fte:"6-10"},
 {n:"The Life You Can Save",u:"https://www.thelifeyoucansave.org/",t:["Broad fundraising","Charity evaluator"],usd:"$10M—$50M",mkt:"US",c:["Humans"],y:2013,fte:"11-20"},
 {n:"Tien Procent Club",u:"https://tienprocent.club/",t:["National fundraising"],usd:"<$1M",mkt:"Netherlands",c:["Humans","Other(s)"],y:2022,fte:"1-5"},
 {n:"Ultra Philanthropy",u:"https://www.ultraphilanthropy.org/",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"US, UK (major donors)",c:["Humans","Animals","Other(s)"],y:2024,fte:"1-5"},
 {n:"Więcej Dobra",u:"https://wiecejdobra.pl/",t:["National fundraising"],usd:"<$1M",mkt:"Poland",c:["Humans","Animals","Climate"],y:2023,fte:"1-5"},
 {n:"Ziedo Efektīvi",u:"https://ziedoefektivi.lv/",t:["National fundraising"],usd:"<$1M",mkt:"Latvia",c:["Humans","Animals","X-risk"],y:2024,fte:"1-5"},
 {n:"Efektif Berbagi",u:"https://efektifberbagi.id/",t:["National fundraising"],usd:"<$1M",mkt:"Indonesia",c:["Humans"],y:2026,fte:"6-10"},
 {n:"Aidwise",u:"https://aidwise.org",t:["Charity evaluator"],usd:"<$1M",mkt:"Global",c:["Humans"],y:2026,fte:"1-5"},
 {n:"DIV Fund",u:"https://div.fund/",t:["Charity evaluator"],usd:"$100M—$500M",mkt:"US",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Centre for Effective Altruism",u:"https://www.centreforeffectivealtruism.org/",t:["Charity evaluator"],usd:"$10M—$50M",mkt:"US, UK",c:["Humans","Animals","Other(s)","AI risks","Other(s)"],y:2017,fte:"51-100"},
 {n:"Lightcone Commons",u:"https://lightconecommons.com",t:["Infrastructure"],usd:"$10M—$50M",mkt:"Global",c:["AI risks","X-risk"],y:2026,fte:"1-5"},
 {n:"Rethink Priorities",u:"https://rethinkpriorities.org/",t:["Pooled fund"],usd:"Not disclosed",mkt:"Global",c:["Multiple"],y:"—",fte:"11-20"},
 {n:"Hikanos Project",u:"https://hikanos.org",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"Global (post-exit founders)",c:["Humans","Animals","X-risk","Other(s)"],y:2026,fte:"1-5"},
 {n:"Everydrop",u:"https://everydropapp.com",t:["Broad fundraising"],usd:"<$1M",mkt:"UK",c:["Humans","Animals","Climate"],y:2025,fte:"<1"},
 {n:"Lahjoita tehokkaasti",u:"https://lahjoitatehokkaasti.fi",t:["National fundraising"],usd:"<$1M",mkt:"Finland",c:["Humans","Animals","Climate"],y:2026,fte:"<1"},
 {n:"Original Position",u:"https://www.original-position.org/",t:["Broad fundraising"],usd:"<$1M",mkt:"US",c:["Humans"],y:2024,fte:"<1"},
 {n:"School for Moral Ambition",u:"https://www.moralambition.org",t:["GWWC pledge partner"],usd:"N/A",mkt:"Global",c:["Multiple"],y:"—",fte:"6-10"},
 {n:"Yield & Spread",u:"https://yieldandspread.org",t:["GWWC pledge partner"],usd:"N/A",mkt:"US (FIRE community)",c:["Humans","Animals","X-risk","Other(s)"],y:"—",fte:"<1"},
 {n:"Profit for Good",u:"https://profitforgood.com",t:["Niche fundraising"],usd:"<$1M",mkt:"Global (businesses)",c:["Humans","Animals","Climate"],y:2025,fte:"1-5"},
 {n:"World Climate Relay",u:"https://www.worldclimaterelay.org",t:["Niche fundraising"],usd:"<$1M",mkt:"Global (outdoor and sports communities)",c:["Climate"],y:2025,fte:"<1"},
 /* --- board-only orgs, researched separately (attributes lower-confidence) --- */
 {n:"Alpha Epsilon",u:"https://alphaepsilon.org/",t:["Grantmaking foundation"],usd:"Not disclosed",mkt:"US",c:["Humans","Nuclear","Pandemics","Animals","AI risks"],y:"—",fte:"100+"},
 {n:"Animal Advocacy Careers",u:"https://www.animaladvocacycareers.org/",t:["Niche fundraising"],usd:"Not disclosed",mkt:"Global",c:["Animals"],y:2019,fte:"6-10"},
 {n:"Consultants for Impact",u:"https://www.consultantsforimpact.org/",t:["Niche fundraising"],usd:"N/A",mkt:"Global",c:["Humans","Animals","Climate","X-risk","AI risks","Pandemics","Nuclear"],y:2019,fte:"1-5"},
 {n:"EA for Christians",u:"https://www.eaforchristians.org/",t:["Niche fundraising"],usd:"Not disclosed",mkt:"Global",c:["Humans","Animals"],y:2021,fte:"1-5"},
 {n:"High Impact Professionals",u:"https://www.highimpactprofessionals.org/",t:["Niche fundraising"],usd:"N/A",mkt:"Global (working professionals)",c:["Other(s)","Humans","Animals","X-risk"],y:2021,fte:"1-5"},
 {n:"Livelihood Impact Fund",u:"https://www.livelihoodimpactfund.org/",t:["Other"],usd:"Not disclosed",mkt:"Sub-Saharan Africa",c:["Humans"],y:2023,fte:"—"},
 {n:"Renaissance Philanthropy",u:"https://renaissancephilanthropy.org/",t:["Philanthropy advisory","Pooled fund"],usd:"$100M—$500M",mkt:"US",c:["Other(s)"],y:2024,fte:"51-100"}
];

/* ---- functional classification (GWWC's own type names, kept verbatim where possible) ---- */
const GROUP_ORDER=["Charity evaluator","National fundraising","Broad fundraising","Philanthropy advisory","Grantmakers & pooled funds","Talent, careers & communities","Niche fundraising"];
const REGION_ORDER=["Nordics","Western Europe","Central & Eastern Europe","Anglosphere","Asia & Latin America"];
const FLAGGED={};
const GROUPS={
 "Aidwise":"Charity evaluator",
 "DIV Fund":"Grantmakers & pooled funds",
 "Centre for Effective Altruism":"Talent, careers & communities",
 "Lightcone Commons":"Grantmakers & pooled funds",
 "Rethink Priorities":"Grantmakers & pooled funds",
 "Hikanos Project":"Philanthropy advisory",
 "Everydrop":"Broad fundraising",
 "Lahjoita tehokkaasti":"National fundraising",
 "Original Position":"Broad fundraising",
 "School for Moral Ambition":"Talent, careers & communities",
 "Yield & Spread":"Talent, careers & communities",
 "Profit for Good":"Niche fundraising",
 "World Climate Relay":"Niche fundraising",
 "GiveWell":"Charity evaluator","Animal Charity Evaluators":"Charity evaluator","Giving Green":"Charity evaluator","Happier Lives Institute":"Charity evaluator","The Life You Can Save":"Charity evaluator","Better Futures Guide":"Charity evaluator","Centre for Exploratory Altruism Research":"Charity evaluator","Power for Democracies":"Charity evaluator","Charity Navigator":"Charity evaluator",
 "Ge Effektivt":"National fundraising","Gi Effektivt":"National fundraising","Giv Effektivt":"National fundraising","Ayuda Efectiva":"National fundraising","Benefficienza":"National fundraising","Doneer Effectief":"National fundraising","Effectief Geven":"National fundraising","Effektiv Spenden":"National fundraising","Mieux Donner":"National fundraising","Effective Giving Ireland":"National fundraising","Więcej Dobra":"National fundraising","Anneta Targalt":"National fundraising","Ziedo Efektīvi":"National fundraising","Etkili Bağış":"National fundraising","Effective Altruism Australia":"National fundraising","Effective Altruism New Zealand":"National fundraising","RC Forward":"National fundraising","doebem":"National fundraising","CharityBox":"National fundraising","GiveWise":"National fundraising","Impactful Giving":"National fundraising","Maximum Impact":"National fundraising","Efektif Berbagi":"National fundraising",
 "Giving What We Can":"Broad fundraising","One for the World":"Broad fundraising","Giving Multiplier":"Broad fundraising","Double Up Drive":"Broad fundraising","GoodWallet":"Broad fundraising","FarmKind":"Broad fundraising","Manifund":"Broad fundraising",
 "Ark Philanthropy":"Philanthropy advisory","Bedrock Philanthropy":"Philanthropy advisory","Ultra Philanthropy":"Philanthropy advisory","Serica":"Philanthropy advisory","Longview Philanthropy":"Philanthropy advisory","Founders Pledge":"Philanthropy advisory","Raising Impact":"Philanthropy advisory","Regeneration Group":"Philanthropy advisory","Elevate Philanthropy":"Philanthropy advisory","Effective Institutions Project":"Philanthropy advisory","Senterra Funders":"Philanthropy advisory",
 "Coefficient Giving":"Grantmakers & pooled funds","Effective Altruism Funds":"Grantmakers & pooled funds","Survival and Flourishing Fund":"Grantmakers & pooled funds","Navigation Fund":"Grantmakers & pooled funds","Future of Life Institute":"Grantmakers & pooled funds","Macroscopic Ventures":"Grantmakers & pooled funds","AI Risk Mitigation Fund":"Grantmakers & pooled funds","Center on Long-Term Risk":"Grantmakers & pooled funds","Sentinel Bio":"Grantmakers & pooled funds","Astralis Foundation":"Grantmakers & pooled funds","AI Safety Tactical Opportunities Fund":"Grantmakers & pooled funds","Alpha Epsilon":"Grantmakers & pooled funds","Renaissance Philanthropy":"Grantmakers & pooled funds","Livelihood Impact Fund":"Grantmakers & pooled funds",
 "Ambitious Impact":"Talent, careers & communities","Animal Advocacy Careers":"Talent, careers & communities","High Impact Professionals":"Talent, careers & communities","Consultants for Impact":"Talent, careers & communities",
 "EA for Christians":"Niche fundraising","Raise":"Niche fundraising","High-Impact Athletes":"Niche fundraising","Tien Procent Club":"Niche fundraising"
};

/* Secondary categories — every function an org verifiably & prominently
   performs beyond its primary group. Bucket A (most orgs here): derived
   directly from GWWC's own dual "Primary type(s)" tags. Bucket B: a named,
   distinct programme documented on the org's own site (an expert-directed
   fund/regrantor, not just a themed donation bucket) — Founders Pledge's
   pledge community + thematic Funds, Giving Green's Fund, Manifund's
   regranting, GiveWell's Giving Funds, CEARCH's own grantmaking. */
const SECONDARY={
 "Centre for Effective Altruism":["Grantmakers & pooled funds"],
 "AI Safety Tactical Opportunities Fund":["Philanthropy advisory"],
 "Animal Charity Evaluators":["Grantmakers & pooled funds"],
 "CharityBox":["Charity evaluator"],
 "Centre for Exploratory Altruism Research":["Philanthropy advisory","Grantmakers & pooled funds"],
 "Coefficient Giving":["Philanthropy advisory"],
 "doebem":["Charity evaluator"],
 "Effektiv Spenden":["Philanthropy advisory"],
 "Founders Pledge":["Charity evaluator","Grantmakers & pooled funds","Niche fundraising"],
 "Gi Effektivt":["Philanthropy advisory"],
 "GiveWell":["Philanthropy advisory","Grantmakers & pooled funds"],
 "Giving Green":["Grantmakers & pooled funds"],
 "Longview Philanthropy":["Grantmakers & pooled funds"],
 "Manifund":["Grantmakers & pooled funds"],
 "Maximum Impact":["Charity evaluator"],
 "Renaissance Philanthropy":["Philanthropy advisory"],
 "Sentinel Bio":["Philanthropy advisory"],
 "The Life You Can Save":["Broad fundraising"]
};
const SUBTERR={
 "Lahjoita tehokkaasti":"Nordics","Ge Effektivt":"Nordics","Gi Effektivt":"Nordics","Giv Effektivt":"Nordics",
 "Ayuda Efectiva":"Western Europe","Benefficienza":"Western Europe","Doneer Effectief":"Western Europe","Effectief Geven":"Western Europe","Effektiv Spenden":"Western Europe","Mieux Donner":"Western Europe","Effective Giving Ireland":"Western Europe",
 "Więcej Dobra":"Central & Eastern Europe","Anneta Targalt":"Central & Eastern Europe","Ziedo Efektīvi":"Central & Eastern Europe","Etkili Bağış":"Central & Eastern Europe",
 "Effective Altruism Australia":"Anglosphere","Effective Altruism New Zealand":"Anglosphere","RC Forward":"Anglosphere",
 "doebem":"Asia & Latin America","CharityBox":"Asia & Latin America","GiveWise":"Asia & Latin America","Impactful Giving":"Asia & Latin America","Maximum Impact":"Asia & Latin America","Efektif Berbagi":"Asia & Latin America"
};

/* Direct logo overrides for orgs where Google's favicon service returns its
   generic fallback icon (byte-identical across unrelated domains) or nothing
   at all, even though the org has a real icon/logo of its own. */
const LOGO_OVERRIDE={
 "Ge Effektivt":"https://geeffektivt.se/favicon.ico",
 "Gi Effektivt":"https://gieffektivt.no/favicon.ico",
 "Giv Effektivt":"https://giveffektivt.dk/favicon.ico",
 
 "Raising Impact":"https://raisingimpact.org/og-image.jpg",
 "Efektif Berbagi":"https://efektifberbagi.id/favicon.svg",
 "CharityBox":"charitybox-logo.jpg"
};
