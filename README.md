# Portfolio — Einar Sigurður

Ein síða, engar ytri tengingar, engin byggingarskref. HTML, CSS og 30 línur af JS.

## Skoða

```bash
cd portfolio
python3 -m http.server 8770 --bind 127.0.0.1
open http://127.0.0.1:8770
```

Eða einfaldlega opna `index.html` í vafranum — allt er afstætt (`assets/…`).

## Efnið

Allt efni er raunverulegt og sótt í eigin skrár og á lifandi vefi 1. nóvember 2026:

| Hluti | Heimild |
|---|---|
| Aðalgarður, Hnýfill, 2 Naglar, BaraMatur | Skjámyndir af lifandi vefjum (`*.vercel.app`, `baramatur.is`) |
| Stóreldhúsið | Þrívíddarmynd úr `~/Desktop/Stjörnugrís/Stóreldhúsið/` |
| Grís herferð | `~/Desktop/Stjörnugrís/Grís herferð 2026/1.jpg` |
| Umbúðir | `Stjörnugrís kassi.png` (klippt á pappírsgrunnan bakgrunn) |
| Tölur | 24 vefir og 8 vöruflokkar úr eigin skjölum; 141 uppskrift og 16.000+ fylgjendur eru birtar tölur á BaraMatur |

## Breyta

- **Texti:** `index.html`. Hver kafli er merktur `01 — …` upp í `05 — …`.
- **Litur og letur:** `:root` efst í `styles.css` (`--paper`, `--ink`, `--gold`).
- **Myndir:** settu nýja skrá í `assets/` og vísaðu á hana; hafðu `width`/`height` rétt.
- **Netfang:** `mailto:` í `#samband` — skiptu um ef þú vilt annað.

## Birta

Vercel: dragðu möppuna inn í vercel.com eða keyrðu `npx vercel` í þessari möppu.
Engin stilling þarf — þetta er stöðugt HTML. Eftir birtingu færðu fast `*.vercel.app`-slóð.

## Prófað

- 1440, 768 og 390 px (Chrome, `--headless`), engin lárétt flæði.
- `prefers-reduced-motion` virðir stillingu; innihald er sýnilegt án JS.
- Engar ytri beiðnir: engin leturgerð, engin greining, ekkert CDN.
