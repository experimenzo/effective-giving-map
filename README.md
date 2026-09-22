# The Effective Giving Islands

An interactive map of the effective-giving landscape — 77 organisations that help direct
money to high-impact charities, grouped by what they actually do with a donor's money.

Modelled on [aisafety.com/map](https://aisafety.com/map). Built as a single static page
(no build step): open `index.html` or view the hosted version on GitHub Pages.

## What's here
- **`index.html`** — the map (islands = primary category; hover a logo for a summary, click for detail; Map/Grid toggle; cause/group/size filters).
- **`eg_data.js`** — the organisations and their attributes, the primary classification (`GROUPS`), secondary categories (`SECONDARY`), and geographic sub-regions (`SUBTERR`).
- **`eg_blurbs.js`** — one-paragraph summaries per organisation.

## Groups
Charity evaluator · National fundraising (sub-divided by region) · Broad fundraising · Philanthropy advisory · Grantmakers & pooled funds · Talent & careers · Niche fundraising.

Five of these names are Giving What We Can's own "Primary type(s)" labels, kept verbatim.
"Grantmakers & pooled funds" merges their "Grantmaking foundation" and "Pooled fund" tags;
"Talent & careers" is this map's addition, for organisations that route people into
high-impact work rather than money into high-impact charities.

## Primary vs. secondary categories
The **Map** shows every organisation once, under its **primary** category, decided by
this project (not GWWC). The **Grid** additionally lists an organisation under any
**secondary** category it verifiably and prominently performs — either because GWWC itself
tagged the organisation with two types, or because its own site describes a named, distinct
programme (e.g. an expert-directed pooled fund, not just a themed donation option). Secondary
entries are marked "Primary: …" and separated from an island's core members. This is an
independent editorial judgment, applied the same way to every organisation on the map.

## Sources & caveats
Organisation list and attributes are based on Giving What We Can's public ["effective giving
ecosystem" database](https://givingwhatwecan.notion.site/fb3752a779ac4e779015db6a8a2e0cc4?v=d93c0365c3e14753877ff0da08a11a69) plus per-organisation website research. Summaries reflect a reading of
public information and may contain errors. Figures are indicative, not audited. Suggestions
and corrections are welcome via the link in the map's footer.
