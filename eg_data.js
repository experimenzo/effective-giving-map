/* ============================================================
   Effective Giving Landscape — shared data
   81 organisations (72 from GWWC "Active EG organisations"
   table + 9 board-only orgs researched separately).
   Loaded by both eg_map_v1_archipelago.html and
   eg_map_v2_pangea.html.
   ============================================================ */

const CAUSE_COLORS={
  "Humans":"var(--c-humans)","Animals":"var(--c-animals)","Climate":"var(--c-climate)",
  "X-risk":"var(--c-xrisk)","AI risks":"var(--c-ai)","Pandemics":"var(--c-pandemics)",
  "Nuclear":"var(--c-nuclear)","Democracy":"var(--c-democracy)","Other(s)":"var(--c-other)",
  "Multiple":"var(--c-other)"
};
const TYPE_ORDER=["Charity evaluator","National fundraising","Broad fundraising","Niche fundraising",
  "Philanthropy advisory","Grantmaking foundation","Pooled fund","Other"];
const SIZE_ORDER=["<$1M","$1M—$10M","$10M—$50M","$50M—$100M","$100M—$500M",">$500M","Not disclosed","N/A"];

const ORGS=[
 {n:"AI Risk Mitigation Fund",u:"https://www.airiskfund.com/",t:["Pooled fund"],usd:"Not disclosed",mkt:"US",c:["AI risks"],y:2023,fte:"1-5"},
 {n:"AI Safety Tactical Opportunities Fund",u:"https://forum.effectivealtruism.org/users/jueyan",t:["Philanthropy advisory","Pooled fund"],usd:"$10M—$50M",mkt:"Global",c:["AI risks"],y:2023,fte:"1-5"},
 {n:"Ambitious Impact",u:"https://www.ambitiousimpact.com/",t:["Other"],usd:"N/A",mkt:"n/a",c:["Humans","Animals"],y:2018,fte:"11-20"},
 {n:"Animal Charity Evaluators",u:"https://animalcharityevaluators.org/",t:["Charity evaluator","Pooled fund"],usd:"$1M—$10M",mkt:"US/UK (global)",c:["Animals"],y:2012,fte:"11-20"},
 {n:"Anneta Targalt",u:"https://annetatargalt.ee/",t:["National fundraising"],usd:"<$1M",mkt:"Estonia",c:["Humans","Animals","Climate"],y:2021,fte:"<1"},
 {n:"Ark Philanthropy",u:"https://www.arkphilanthropy.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"US",c:["Animals","Humans","X-risk","Climate"],y:2024,fte:"1-5"},
 {n:"Astralis Foundation",u:"https://astralisfoundation.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"Global",c:["AI risks"],y:2024,fte:"1-5"},
 {n:"Ayuda Efectiva",u:"https://ayudaefectiva.org/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Spain",c:["Humans","Animals","Climate"],y:2020,fte:"1-5"},
 {n:"Bedrock Philanthropy",u:"https://bedrockphilanthropy.com/",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"Global",c:["Humans","Animals","X-risk","Climate"],y:2024,fte:"1-5"},
 {n:"Benefficienza",u:"https://benefficienza.it/",t:["National fundraising"],usd:"<$1M",mkt:"Italy",c:["Humans","Animals"],y:2024,fte:"1-5"},
 {n:"Better Futures Guide",u:"https://www.betterfuturesguide.com/",t:["Charity evaluator"],usd:"<$1M",mkt:"Global",c:["Humans","Other(s)"],y:2025,fte:"1-5"},
 {n:"Bloom Wellbeing Fund",u:"https://bloomwellbeing.fund/",t:["Philanthropy advisory","Pooled fund"],usd:"$1M—$10M",mkt:"Global",c:["Humans"],y:2024,fte:"1-5"},
 {n:"Center on Long-Term Risk",u:"https://longtermrisk.org/grantmaking/",t:["Pooled fund"],usd:"<$1M",mkt:"Global",c:["AI risks"],y:2013,fte:"11-20"},
 {n:"Centre for Exploratory Altruism Research",u:"https://exploratory-altruism.org/",t:["Philanthropy advisory","Pooled fund"],usd:"<$1M",mkt:"Asia",c:["Humans","Animals","X-risk"],y:2022,fte:"1-5"},
 {n:"Charity Navigator",u:"https://www.charitynavigator.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US",c:["Humans","Animals","Climate"],y:2001,fte:"21-50"},
 {n:"CharityBox",u:"https://www.charitybox.cn/",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"China",c:["Humans"],y:2021,fte:"1-5"},
 {n:"Coefficient Giving",u:"https://coefficientgiving.org/",t:["Grantmaking foundation","Philanthropy advisory"],usd:">$500M",mkt:"Global",c:["Humans","Animals","X-risk","Other(s)","AI risks","Pandemics"],y:2011,fte:"51-100"},
 {n:"doebem",u:"https://doebem.org.br/",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"Brazil",c:["Humans"],y:2017,fte:"1-5"},
 {n:"Doneer Effectief",u:"https://doneereffectief.nl/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Netherlands",c:["Humans","Animals","Climate"],y:2022,fte:"1-5"},
 {n:"Double Up Drive",u:"https://doubleupdrive.org/",t:["Broad fundraising"],usd:"<$1M",mkt:"US",c:["Humans","Animals","X-risk","Climate"],y:2014,fte:"<1"},
 {n:"Effectief Geven",u:"https://www.effectiefgeven.be/",t:["National fundraising"],usd:"<$1M",mkt:"Belgium",c:["Humans","Animals","Climate"],y:2023,fte:"1-5"},
 {n:"Effective Altruism Australia",u:"https://effectivealtruism.org.au/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Australia",c:["Humans","Climate"],y:2015,fte:"6-10"},
 {n:"Effective Altruism Funds",u:"https://funds.effectivealtruism.org/",t:["Pooled fund"],usd:"$10M—$50M",mkt:"US/UK (global)",c:["Humans","Animals","X-risk"],y:2017,fte:"1-5"},
 {n:"Effective Altruism New Zealand",u:"https://eanz.org.nz/",t:["National fundraising"],usd:"<$1M",mkt:"New Zealand",c:["Humans","Animals","X-risk","Climate"],y:2016,fte:"1-5"},
 {n:"Effective Giving Ireland",u:"https://effectivegiving.ie/",t:["National fundraising"],usd:"<$1M",mkt:"Ireland",c:["Humans","Animals","Climate"],y:2024,fte:"<1"},
 {n:"Effective Institutions Project",u:"https://effectiveinstitutionsproject.org/",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"US/UK (global)",c:["Other(s)","AI risks","Democracy"],y:2021,fte:"1-5"},
 {n:"Effektiv Spenden",u:"https://effektiv-spenden.org/",t:["National fundraising","Philanthropy advisory"],usd:"$10M—$50M",mkt:"Germany, Switzerland, Austria",c:["Humans","Animals","X-risk","Climate"],y:2019,fte:"6-10"},
 {n:"Elevate Philanthropy",u:"",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"Global",c:["Multiple"],y:2026,fte:"1-5"},
 {n:"Ellis Impact",u:"",t:["Philanthropy advisory"],usd:"<$1M",mkt:"US",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Enough Project",u:"",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"Global",c:["Humans","Animals","X-risk","Climate"],y:2021,fte:"1-5"},
 {n:"Etkili Bağış",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Turkey",c:["Humans"],y:2025,fte:"1-5"},
 {n:"FarmKind",u:"https://farmkind.giving/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US/UK (global)",c:["Animals"],y:2024,fte:"1-5"},
 {n:"Founders Pledge",u:"https://www.founderspledge.com/",t:["Philanthropy advisory","Charity evaluator"],usd:"$100M—$500M",mkt:"US/UK (global)",c:["Humans","Animals","X-risk","Climate"],y:2015,fte:"51-100"},
 {n:"Future of Life Institute",u:"https://futureoflife.org/",t:["Grantmaking foundation"],usd:"$1M—$10M",mkt:"n/a",c:["X-risk"],y:2014,fte:"21-50"},
 {n:"Ge Effektivt",u:"https://geeffektivt.se/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Sweden",c:["Humans","Animals","Climate"],y:2021,fte:"1-5"},
 {n:"Gi Effektivt",u:"https://gieffektivt.no/",t:["National fundraising","Philanthropy advisory"],usd:"$1M—$10M",mkt:"Norway",c:["Humans"],y:2016,fte:"1-5"},
 {n:"Giv Effektivt",u:"https://giveffektivt.dk/",t:["National fundraising"],usd:"<$1M",mkt:"Denmark",c:["Humans"],y:2021,fte:"1-5"},
 {n:"GiveWell",u:"https://www.givewell.org/",t:["Charity evaluator","Philanthropy advisory"],usd:"$100M—$500M",mkt:"US/UK (global)",c:["Humans"],y:2007,fte:"51-100"},
 {n:"GiveWise",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Hong Kong",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Giving Green",u:"https://www.givinggreen.earth/",t:["Charity evaluator"],usd:"$10M—$50M",mkt:"US/UK (global)",c:["Climate"],y:2020,fte:"1-5"},
 {n:"Giving Multiplier",u:"https://www.givingmultiplier.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"US",c:["Humans","Animals","X-risk","Climate"],y:2020,fte:"1-5"},
 {n:"Giving What We Can",u:"https://www.givingwhatwecan.org/",t:["Broad fundraising"],usd:"$10M—$50M",mkt:"US/UK (global)",c:["Humans","Animals","X-risk","Climate"],y:2009,fte:"11-20"},
 {n:"GoodWallet",u:"",t:["Broad fundraising"],usd:"<$1M",mkt:"Global",c:["Humans"],y:2025,fte:"<1"},
 {n:"Happier Lives Institute",u:"https://www.happierlivesinstitute.org/",t:["Charity evaluator"],usd:"$1M—$10M",mkt:"Global",c:["Humans"],y:2019,fte:"1-5"},
 {n:"High-Impact Athletes",u:"https://www.highimpactathletes.org/",t:["Niche fundraising"],usd:"<$1M",mkt:"Global (athletes, sports)",c:["Humans","Animals","Climate"],y:2020,fte:"1-5"},
 {n:"Impactful Giving",u:"",t:["National fundraising"],usd:"<$1M",mkt:"India",c:["Humans","Animals"],y:2024,fte:"1-5"},
 {n:"Jewish Effective Giving Initiative",u:"",t:["Niche fundraising"],usd:"<$1M",mkt:"US/UK (global)",c:["Humans"],y:2021,fte:"<1"},
 {n:"Lahjoittaminen",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Finland",c:["Humans","Animals","X-risk","Climate"],y:2021,fte:"<1"},
 {n:"Longview Philanthropy",u:"https://www.longview.org/",t:["Philanthropy advisory","Pooled fund"],usd:"$50M—$100M",mkt:"US/UK (global)",c:["AI risks","Pandemics","Nuclear"],y:2018,fte:"11-20"},
 {n:"Macroscopic Ventures",u:"",t:["Grantmaking foundation"],usd:"$10M—$50M",mkt:"n/a",c:["AI risks","X-risk"],y:2019,fte:"6-10"},
 {n:"Manifund",u:"https://manifund.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"n/a",c:["Humans","Animals","X-risk"],y:2023,fte:"1-5"},
 {n:"Maximum Impact",u:"",t:["National fundraising","Charity evaluator"],usd:"<$1M",mkt:"Israel",c:["Humans","Animals","X-risk"],y:2023,fte:"1-5"},
 {n:"Mieux Donner",u:"https://www.mieuxdonner.org/",t:["National fundraising"],usd:"<$1M",mkt:"France, Switzerland",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Momentum",u:"",t:["Other"],usd:"N/A",mkt:"US",c:["Other(s)"],y:2018,fte:"11-20"},
 {n:"Navigation Fund",u:"",t:["Grantmaking foundation"],usd:"$10M—$50M",mkt:"Global",c:["Animals","X-risk","Climate","Other(s)"],y:2023,fte:"6-10"},
 {n:"One for the World",u:"https://www.1fortheworld.org/",t:["Broad fundraising"],usd:"$1M—$10M",mkt:"College/MBA students, US/UK",c:["Humans"],y:2014,fte:"1-5"},
 {n:"Pepper",u:"",t:["Broad fundraising"],usd:"<$1M",mkt:"United States",c:["Humans"],y:2023,fte:"<1"},
 {n:"Power for Democracies",u:"",t:["Charity evaluator"],usd:"<$1M",mkt:"Global",c:["Democracy"],y:2024,fte:"6-10"},
 {n:"Project Resource Optimization",u:"",t:["Charity evaluator","Philanthropy advisory"],usd:"$100M—$500M",mkt:"US",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Raise",u:"",t:["Niche fundraising"],usd:"<$1M",mkt:"Global (college students)",c:["Humans"],y:2018,fte:"<1"},
 {n:"Raising Impact",u:"",t:["Philanthropy advisory"],usd:"Not disclosed",mkt:"India and Asia",c:["Humans"],y:2024,fte:"1-5"},
 {n:"RC Forward",u:"https://rcforward.org/",t:["National fundraising"],usd:"$1M—$10M",mkt:"Canada",c:["Humans","Animals","Climate"],y:2018,fte:"1-5"},
 {n:"Regeneration Group",u:"",t:["Philanthropy advisory"],usd:"$10M—$50M",mkt:"Global",c:["Humans","Climate"],y:2018,fte:"6-10"},
 {n:"Senterra Funders",u:"",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"Global",c:["Animals"],y:2022,fte:"1-5"},
 {n:"Sentinel Bio",u:"",t:["Philanthropy advisory","Pooled fund"],usd:"$1M—$10M",mkt:"Global",c:["Pandemics"],y:2024,fte:"1-5"},
 {n:"Serica",u:"",t:["Philanthropy advisory"],usd:"<$1M",mkt:"Asia, Africa",c:["Humans"],y:2025,fte:"1-5"},
 {n:"Survival and Flourishing Fund",u:"https://survivalandflourishing.fund/",t:["Grantmaking foundation"],usd:"$10M—$50M",mkt:"Global",c:["X-risk"],y:2019,fte:"1-5"},
 {n:"The Life You Can Save",u:"https://www.thelifeyoucansave.org/",t:["Broad fundraising","Charity evaluator"],usd:"$10M—$50M",mkt:"US",c:["Humans","Climate"],y:2013,fte:"11-20"},
 {n:"Tien Procent Club",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Netherlands",c:["Humans","Animals","X-risk","Climate"],y:2022,fte:"1-5"},
 {n:"Ultra Philanthropy",u:"",t:["Philanthropy advisory"],usd:"$1M—$10M",mkt:"Global",c:["Humans","Animals"],y:2024,fte:"1-5"},
 {n:"Więcej Dobra",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Poland",c:["Humans","Animals","Climate"],y:2023,fte:"1-5"},
 {n:"Ziedo Efektīvi",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Latvia",c:["Humans","Animals","Climate"],y:2024,fte:"1-5"},
 {n:"Efektif Berbagi",u:"",t:["National fundraising"],usd:"<$1M",mkt:"Indonesia",c:["Humans"],y:2026,fte:"6-10"},
 /* --- 9 board-only orgs, researched separately (attributes lower-confidence) --- */
 {n:"Afterfund",u:"https://afterfund.co/",t:["Niche fundraising"],usd:"<$1M",mkt:"US",c:["Humans"],y:2023,fte:"1-5"},
 {n:"Alpha Epsilon",u:"https://alphaepsilon.org/",t:["Grantmaking foundation"],usd:"Not disclosed",mkt:"Global",c:["Other(s)"],y:"—",fte:"—"},
 {n:"Animal Advocacy Careers",u:"https://www.animaladvocacycareers.org/",t:["Niche fundraising"],usd:"Not disclosed",mkt:"Global",c:["Animals"],y:2019,fte:"6-10"},
 {n:"Charity Elections",u:"https://charityelections.org/",t:["Broad fundraising"],usd:"<$1M",mkt:"US",c:["Humans","Animals"],y:"—",fte:"1-5"},
 {n:"Consultants for Impact",u:"https://www.consultantsforimpact.org/",t:["Niche fundraising"],usd:"N/A",mkt:"Global",c:["Humans","Animals","Climate","X-risk","AI risks","Pandemics","Nuclear"],y:2019,fte:"1-5"},
 {n:"EA for Christians",u:"https://www.eaforchristians.org/",t:["Niche fundraising"],usd:"Not disclosed",mkt:"Global",c:["Humans","Animals"],y:2021,fte:"1-5"},
 {n:"High Impact Professionals",u:"https://www.highimpactprofessionals.org/",t:["Niche fundraising"],usd:"$1M—$10M",mkt:"Global",c:["Other(s)"],y:2021,fte:"6-10"},
 {n:"Livelihood Impact Fund",u:"https://www.livelihoodimpactfund.org/",t:["Other"],usd:"Not disclosed",mkt:"Sub-Saharan Africa",c:["Humans"],y:2023,fte:"—"},
 {n:"Renaissance Philanthropy",u:"https://renaissancephilanthropy.org/",t:["Philanthropy advisory","Pooled fund"],usd:"$100M—$500M",mkt:"US",c:["Other(s)"],y:2024,fte:"51-100"}
];

/* ---- revised functional classification (6 groups) ---- */
const GROUP_ORDER=["Research & evaluators","National giving portals","Public platforms & pledges","Donor advisory","Grantmakers & pooled funds","Community & talent"];
const REGION_ORDER=["Nordics","Western Europe","Central & Eastern Europe","Anglosphere","Asia & Latin America"];
const FLAGGED={
 "Momentum":"A nonprofit fundraising CRM/AI tool — not itself an effective-giving org.",
 "Enough Project":"A defunct anti-atrocity advocacy group — not part of the effective-giving ecosystem (likely a mislabel).",
 "Afterfund":"Nonprofit endowment/fundraising tech — supplies infrastructure, doesn't route donors to effective charities."
};
const GROUPS={
 "GiveWell":"Research & evaluators","Animal Charity Evaluators":"Research & evaluators","Giving Green":"Research & evaluators","Happier Lives Institute":"Research & evaluators","The Life You Can Save":"Research & evaluators","Better Futures Guide":"Research & evaluators","Centre for Exploratory Altruism Research":"Research & evaluators","Power for Democracies":"Research & evaluators","Project Resource Optimization":"Research & evaluators","Charity Navigator":"Research & evaluators",
 "Ge Effektivt":"National giving portals","Gi Effektivt":"National giving portals","Giv Effektivt":"National giving portals","Lahjoittaminen":"National giving portals","Ayuda Efectiva":"National giving portals","Benefficienza":"National giving portals","Doneer Effectief":"National giving portals","Effectief Geven":"National giving portals","Effektiv Spenden":"National giving portals","Mieux Donner":"National giving portals","Effective Giving Ireland":"National giving portals","Więcej Dobra":"National giving portals","Anneta Targalt":"National giving portals","Ziedo Efektīvi":"National giving portals","Etkili Bağış":"National giving portals","Effective Altruism Australia":"National giving portals","Effective Altruism New Zealand":"National giving portals","RC Forward":"National giving portals","doebem":"National giving portals","CharityBox":"National giving portals","GiveWise":"National giving portals","Impactful Giving":"National giving portals","Maximum Impact":"National giving portals","Efektif Berbagi":"National giving portals",
 "Giving What We Can":"Public platforms & pledges","One for the World":"Public platforms & pledges","Giving Multiplier":"Public platforms & pledges","Double Up Drive":"Public platforms & pledges","GoodWallet":"Public platforms & pledges","Pepper":"Public platforms & pledges","FarmKind":"Public platforms & pledges","Manifund":"Public platforms & pledges","Momentum":"Public platforms & pledges","Afterfund":"Public platforms & pledges",
 "Ark Philanthropy":"Donor advisory","Bedrock Philanthropy":"Donor advisory","Ellis Impact":"Donor advisory","Ultra Philanthropy":"Donor advisory","Serica":"Donor advisory","Longview Philanthropy":"Donor advisory","Founders Pledge":"Donor advisory","Raising Impact":"Donor advisory","Regeneration Group":"Donor advisory","Elevate Philanthropy":"Donor advisory","Effective Institutions Project":"Donor advisory","Senterra Funders":"Donor advisory","Enough Project":"Donor advisory",
 "Coefficient Giving":"Grantmakers & pooled funds","Effective Altruism Funds":"Grantmakers & pooled funds","Survival and Flourishing Fund":"Grantmakers & pooled funds","Navigation Fund":"Grantmakers & pooled funds","Future of Life Institute":"Grantmakers & pooled funds","Macroscopic Ventures":"Grantmakers & pooled funds","AI Risk Mitigation Fund":"Grantmakers & pooled funds","Center on Long-Term Risk":"Grantmakers & pooled funds","Bloom Wellbeing Fund":"Grantmakers & pooled funds","Sentinel Bio":"Grantmakers & pooled funds","Astralis Foundation":"Grantmakers & pooled funds","AI Safety Tactical Opportunities Fund":"Grantmakers & pooled funds","Alpha Epsilon":"Grantmakers & pooled funds","Renaissance Philanthropy":"Grantmakers & pooled funds","Livelihood Impact Fund":"Grantmakers & pooled funds",
 "Ambitious Impact":"Community & talent","Animal Advocacy Careers":"Community & talent","High Impact Professionals":"Community & talent","Consultants for Impact":"Community & talent","EA for Christians":"Community & talent","Jewish Effective Giving Initiative":"Community & talent","Raise":"Community & talent","Charity Elections":"Community & talent","High-Impact Athletes":"Community & talent","Tien Procent Club":"Community & talent"
};
const SUBTERR={
 "Ge Effektivt":"Nordics","Gi Effektivt":"Nordics","Giv Effektivt":"Nordics","Lahjoittaminen":"Nordics",
 "Ayuda Efectiva":"Western Europe","Benefficienza":"Western Europe","Doneer Effectief":"Western Europe","Effectief Geven":"Western Europe","Effektiv Spenden":"Western Europe","Mieux Donner":"Western Europe","Effective Giving Ireland":"Western Europe",
 "Więcej Dobra":"Central & Eastern Europe","Anneta Targalt":"Central & Eastern Europe","Ziedo Efektīvi":"Central & Eastern Europe","Etkili Bağış":"Central & Eastern Europe",
 "Effective Altruism Australia":"Anglosphere","Effective Altruism New Zealand":"Anglosphere","RC Forward":"Anglosphere",
 "doebem":"Asia & Latin America","CharityBox":"Asia & Latin America","GiveWise":"Asia & Latin America","Impactful Giving":"Asia & Latin America","Maximum Impact":"Asia & Latin America","Efektif Berbagi":"Asia & Latin America"
};
