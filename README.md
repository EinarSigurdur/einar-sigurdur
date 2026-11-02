# Portfolio — Einar Sigurður Eiríksson

**Lifandi:** https://einar-sigurdur.vercel.app
**Frumkóði:** https://github.com/EinarSigurdur/einar-sigurdur

Ein síða, engar ytri tengingar, engin byggingarskref: HTML, CSS og ~50 línur af JS.

## Uppbygging

| Kafli | Innihald |
|---|---|
| Hero | Andlitsmynd, staða og tveir hnappar |
| Tölur | 150+ miðaskrár, 13 vefir, 4 vörumerki, 141 uppskrift |
| 01 Vöruumbúðir | 8 miðar/umbúðir með síu eftir vörumerki |
| 02 Vefir | 4 skjámyndir + listi yfir 13 vefi |
| 03 Prent og herferðir | Stóreldhúsið, Grís herferð, gjafakassi |
| 04 Um mig | Portrett, ferill, menntun, störf og vinnulag |
| 05 Samband | Netfang og sími |

## Efnið og heimildir

| Efni | Heimild |
|---|---|
| Vefir (Aðalgarður, Hnýfill, 2 Naglar, BaraMatur) | Skjámyndir af lifandi vefjum, teknar 1. nóvember 2026 |
| Vöruumbúðir | `~/Desktop/Stjörnugrís/Vörumiðar/` — prenttilbúin hönnun |
| Stóreldhúsið | Þrívíddarmynd úr `Stóreldhúsið/` |
| Grís herferð | `Grís herferð 2026/1.jpg` |
| Gjafakassi | `Stjörnugrís kassi.png` |
| Portrett | `~/…/Háskóli/Útskrift HÍ/` (2024) |
| Menntun | Háskóli Íslands, útskrift 2024; Google Analytics-vottun 2024 |

## Breyta

- **Texti:** `index.html`, kaflar merktir `01 — …` til `05 — …`.
- **Litur og letur:** `:root` efst í `styles.css` (`--paper`, `--ink`, `--gold`).
- **Nýr miði:** settu mynd í `assets/`, bættu við `<figure class="pack__item" data-brand="…">`.
- **Sía:** `data-brand` er `stjornugris`, `baramatur` eða `annad`.
- **Netfang/sími:** `#samband` í `index.html`.

## Birta

Repóið er tengt Vercel-projektinu `einar-sigurdur` (teymi `telva-vefhysing`).
Birting: ýttu á `main` og endurbirtu með `vercel --prod`, eða sendu mér boð.

## Prófað

1440, 768 og 390 px í Chrome (headless). Ekkert lárétt flæði, `prefers-reduced-motion`
virt, innihald sýnilegt án JS, allar myndir með `width`/`height`.
