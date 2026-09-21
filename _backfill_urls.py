import pathlib
p = pathlib.Path(r"C:\Users\lorfp\Desktop\Effective Giving Map\eg_data.js")
s = p.read_text(encoding="utf-8")

# name -> official URL (from About-page research; only orgs currently u:"")
URLS = {
 "Elevate Philanthropy":"https://www.elevatephilanthropy.org/",
 "Ellis Impact":"https://www.ellisimpact.org/",
 "Etkili Bağış":"https://etkilibagis.org/",
 "GiveWise":"https://www.givewise.org.hk/",
 "GoodWallet":"https://www.thegoodwallet.org/",
 "Impactful Giving":"https://impactfulgiving.in/",
 "Jewish Effective Giving Initiative":"https://www.jewisheffectivegiving.org/",
 "Lahjoittaminen":"https://lahjoittaminen.fi/",
 "Macroscopic Ventures":"https://www.macroscopic.org/",
 "Maximum Impact":"https://www.maximpact.org.il/",
 "Momentum":"https://www.givemomentum.com/",
 "Navigation Fund":"https://www.navigation.org/",
 "Pepper":"https://www.joinpepper.org/",
 "Power for Democracies":"https://www.powerfordemocracies.org/",
 "Raise":"https://www.joinraise.org/",
 "Raising Impact":"https://www.raisingimpact.org/",
 "Senterra Funders":"https://www.senterrafunders.org/",
 "Sentinel Bio":"https://www.sentinelbio.org/",
 "Serica":"https://www.sericaadvisory.org/",
 "Tien Procent Club":"https://tienprocent.club/",
 "Ultra Philanthropy":"https://www.ultraphilanthropy.org/",
 "Więcej Dobra":"https://wiecejdobra.pl/",
 "Ziedo Efektīvi":"https://ziedoefektivi.lv/",
 "Efektif Berbagi":"https://efektifberbagi.id/",
}
changed = 0
for name, url in URLS.items():
    old = f'{{n:"{name}",u:"",'
    new = f'{{n:"{name}",u:"{url}",'
    if old in s:
        s = s.replace(old, new); changed += 1
    else:
        print("NOT FOUND (skipped):", name)
p.write_text(s, encoding="utf-8")
print(f"backfilled {changed} URLs")
# report any still-empty
import re
empties = re.findall(r'\{n:"([^"]+)",u:"",', s)
print("still without URL:", empties)
