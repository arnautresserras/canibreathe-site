# Hallmark polish: fix the audit findings

Source: Hallmark audit, 2026-10-27 (`.hallmark/before.txt`, screenshots in `.hallmark/before/`).
Before: **31 FAIL · 42 REFLEX · 16 WARN** across index, privacy and changelog.

## Current state

- One stylesheet, [style.css](../../style.css): ten colour tokens in `:root`, no font, spacing or shadow tokens. Several literals (font stack, bezel, shadows) sit outside the token block.
- Copy lives in [i18n.js](../../i18n.js), with seven dictionaries applied through `innerHTML` on `[data-i18n]`. The static HTML text is only a no-JS fallback, and parts of it are stale (27 vs 29 pollens, "Android" only, no Google Pollen).
- Motion is one scroll reveal (`.reveal` / `.in`) driven by an inline script in [index.html](../../index.html). It is hidden at rest, so the page depends on JS.
- Icons are emoji: the language toggle, the nine-item "more" grid, and an `emoji` field on every changelog item in [changelog-data.js](../../changelog-data.js) (all seven languages).
- No `:focus-visible` anywhere.

## Depth

This plan is a **polish**: the brand green, layout and section order stay. Only what a gate names changes, fixed in place.

Under the polish check stamp (Task 8), sloplint reports the layout and spacing gates (6b, 8, 9, 44c, 58, 59, 77, 78, 79, 24b) as **notes**. They are listed at the bottom under "Not in this plan". Fixing them needs a restyle or a full redesign.

---

## Task 1: Reveal content visible without JavaScript (62) ✅ done

**Outcome:** the feature rows and setup steps render with scripting off, and still animate in when JS runs.

**Context files:** `index.html`, `style.css`

**Changes**
- `index.html`: add `<script>document.documentElement.classList.add('js')</script>` in `<head>`, before the stylesheet link, so the class is on before the first paint and nothing flashes.
- `style.css:212`: change `.reveal { opacity: 0; transform: … }` to `.js .reveal { … }`. Change `.reveal.in` to `.js .reveal.in`. Scope the reduced-motion override the same way.

**Check:** turn JS off in DevTools and reload: all five feature rows and three steps are visible. With JS on, they still fade in. `sloplint` shows no 62.

## Task 2: Focus and active states (26a, 26b, 15) ✅ done

**Outcome:** every link and button shows an instant focus ring at 3:1 or better, and the store buttons respond on press.

**Context files:** `style.css`

**Changes**
- Add a `--focus` token in `:root`, set to `var(--green-dark)`.
- Add `:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }` for `a`, `button` and `.store-btn`. No transition on the outline.
- Add `.store-btn:active { transform: translateY(0); opacity: 1; }` and `.lang-btn:active { background: var(--border); }`.
- `:disabled`: the site has no disabled controls, so the guard holds and nothing is added.

**Check:** Tab through all three pages. Every stop has a visible ring, including the language options inside the open menu. `sloplint` shows no 26a, and 26b only for `:disabled`.

## Task 3: Tokens, overflow and grid tracks (48, 34, 50) ✅ done

**Outcome:** no colour or font literal outside `:root`, no horizontal scroll path, and image grids can't blow out.

**Context files:** `style.css`

**Changes**
- `:root`: add `--font-body` (the current system stack), `--device-bezel: #0f0f0f`, `--shadow-device` (the two-layer shadow at :89) and `--shadow-menu` (:440). Use them at `body`, `.device` and `.lang-menu`.
- Add `html, body { overflow-x: clip; }`.
- Change grid tracks to `minmax(0, …)`:
  - `.hero-grid` (:123): `minmax(0, 1.05fr) minmax(0, 0.95fr)`
  - `.frow` (:163) and `.setup-steps` (:275)
  - the three single-column overrides at :479, :484 and :491
- Add `overflow-wrap: break-word; min-width: 0;` to `.hero h1`, `.frow-copy h2`, `.setup h2`, `.more h2`, `.download h2` and `.policy-header h1`.

**Check:** `sloplint` shows no 48, 34 or 50. The page looks unchanged at 1440 and 375 (compare against `.hallmark/before/`).

## Task 4: Eyebrows become headings (54, 67, 40) ✅ done

**Outcome:** "Private by design" and "Trusted data" read as plain section headings. That also fixes the 3.66:1 contrast failure.

**Context files:** `index.html`, `style.css`

**Changes**
- `index.html:91` and `:190`: change `<p class="eyebrow">` to `<h2 class="band-title">`. Keep the `data-i18n` keys (`trust.eyebrow`, `sources.eyebrow`) so none of the seven dictionaries change.
- `style.css`: delete `.eyebrow`. Add `.band-title`: body face, about `1.1rem`, weight 700, `var(--green-dark)`, sentence case, no tracking, no uppercase.

**Check:** `sloplint` shows no 54, 67 or 40 on index. Switch languages and confirm both headings read naturally in sentence case. The source strings are already sentence case.

## Task 5: Replace emoji icons on index and in the header (30a) ✅ done

**Outcome:** the "more" grid and the language toggle use inline SVG icons from one set.

**Context files:** `index.html`, `privacy.html`, `changelog.html`, `style.css`

**Changes**
- Language toggle, on all three pages: remove `🌐`. Replace `▾` with an inline SVG chevron (`aria-hidden="true"`). `.lang-current` stays, so `i18n.js` needs no change.
- `index.html:174-182`: replace each `<span class="more-icon">emoji</span>` with an inline 24px SVG (`aria-hidden="true"`, `stroke="currentColor"`). Use one icon set for all of them; see open question 1.
- `style.css`: `.more-icon` becomes a 24px box coloured `var(--green)`. Drop the `font-size` and `line-height` emoji sizing.

**Check:** `sloplint` shows no 30a on index or privacy. The icons inherit the brand green and stay sharp at 375.

## Task 6: Changelog icons (30a) ✅ done

**Outcome:** the changelog renders without emoji.

**Context files:** `changelog.html`, `changelog-data.js`, `style.css`

**Changes** depend on open question 2:
- **(a) Drop icons from the changelog.** Remove the `<span class="more-icon">` from the template at `changelog.html:85`, delete the `emoji` field from every item in `changelog-data.js`, and remove `.changelog-items .more-icon`.
- **(b) Map icons by key.** Replace `emoji` with an `icon` key, the same value in all seven languages, and render it from a small SVG map in `changelog.html`.

**Check:** `sloplint --render` on changelog shows no 30a. Every version still lists every item in all seven languages.

## Task 7: Text sizes, measure and finish details (75, 25, 3, F3, F19, F20, F26) ✅ done

**Outcome:** no text under 12px, prose within readable line lengths, and headings balanced.

**Context files:** `style.css`

**Changes**
- `.store-btn-text small` (:112): `0.66rem` → `0.75rem` (12px). This fixes 75.
- `.frow-copy p` (:182): `42ch` → `48ch`. `.setup-steps p` (:307): `26ch` → `30ch`. Add `.policy-body p, .policy-body ul { max-width: 68ch; }` for privacy's 97-character lines. This fixes 25.
- `.policy-body .highlight` (:373): replace the 3px left stripe with a 1px `var(--border)` hairline all round and a uniform radius. This fixes 3.
- Add `text-wrap: balance` to the h1/h2 rules and `text-wrap: pretty` to body `p`. This fixes F3 and F26.
- `.trust-points li` (:255): weight 600 → 700, which brings the page down to three weights. This fixes F19.
- `.trust-points`: let the three points sit on one row at 1440 by widening `.wrap-narrow` for the trust band only, or by reducing the gap. This fixes F20.

**Check:** `sloplint --render` shows no 75, 25 or 3. F3, F19, F20 and F26 are cleared, or answered in the stamp.

## Task 8: Static fallback and stale facts ✅ done

**Outcome:** what crawlers and no-JS visitors see matches the translations.

**Context files:** `index.html`, `i18n.js` (read only, `ca` and `en` blocks)

**Changes**
- `index.html:108`: "27 pollens" → "29 pollens".
- `index.html:7`: change the meta description to the `ca` value of `meta.description.index` ("…Disponible per a iOS i Android.").
- `index.html:191`: add "and Google Pollen" to match the `en` value of `sources.text`.
- Compare every remaining `data-i18n` fallback against the `en` dictionary, and list any other drift at the bottom of this file. Don't fix those in this task.

**Check:** view the source of index.html: the fallback text matches `i18n.js`.

## Task 9: Stamp, re-sweep, record ✅ done

**Outcome:** the polish is on the record, and sloplint reports 0 Floor FAIL.

**Context files:** `style.css`, `.hallmark/before.txt`

**Changes**
- `style.css` line 1: add the check stamp:
  ```css
  /* Hallmark · checked: <date> · genre: editorial (inferred)
   * floor: 0 FAIL · fixed: <n> (<gates>) · structural: <n> printed (8, 9, 44c, 58, 77, 78, 79)
   * built: the project · redesign: polish · v2.0.0 */
  ```
  Add one `answered` line each for F4 (official store badges sit side by side by convention) and any remaining F-check. If no disabled control exists, also add a `waive 26b` line.
- Run `sloplint index.html privacy.html changelog.html style.css --genre editorial --render --kept` with `CHROME_PATH` set to the x86 Chrome path.
- Fix anything it reports. Then hand over `.hallmark/compare.html` and the final counts.

**Check:** `--kept` reports 0 FAIL and no `kept` losses: 23 links, 2 handlers and 10 script hooks still present.

---

## Not in this plan (structural, printed as notes at polish depth)

| Gate | Finding | What would fix it |
|---|---|---|
| 58 | Hero lead is 21 words (limit 12). The "more" grid has 203 words in one screen; changelog 221; privacy 326 | Copy cuts across all seven dictionaries. Privacy is legal text and is never reworded |
| 8 / 9 / 85 | Template sequence. Every section boundary is a tinted band plus a hairline | Full redesign |
| 47b | Nine phone frames. The language and location screenshots appear twice | Full redesign: drop the setup phones or merge them with the feature rows |
| 44c / 79 | The hero ends at 637 of 900px at 1440, leaving a 232px empty band | Full redesign, or a restyle that grows the phone and headline |
| 77 | Trust, sources and download bands are 32–42% wide and have no mass | Full redesign |
| 78 / 59 | h2s render at 27px (gate wants ~52). Section gaps are 93px (gate wants 120+) | Restyle |
| 1 / 7b / 24b | System font as display; pure `#fff` background; 23 spacing values off the 4px scale | Restyle (a display face is a new font dependency) |
| F1 | Straight quotes: about 55 on index and privacy, plus every `\'` in `i18n.js` | Its own task across all seven dictionaries, if wanted |

## Open questions

1. **Icon set for Task 5.** Hand-copied inline SVGs from Lucide (ISC licence, no build step, no dependency) are the leanest option. Is that acceptable, or do you have icons from the app you'd rather match?
2. **Changelog icons (Task 6):** drop them (a), or keep them as keyed SVGs (b)? (a) is smaller and the list reads fine without them. (b) keeps the visual parity with the app's release notes, if that matters to you.
3. **The stamp (Task 9)** adds a Hallmark comment block to the top of `style.css`. Without it, future sloplint runs fail gate 20 and can't tell this was a polish. Keep it?
4. **The changelog is empty without JS.** A static fallback would duplicate `changelog-data.js` into the HTML. Acceptable as is, or worth a `<noscript>` link to the store listing?
5. **`.hallmark/`** is in the repo root, with its own `.gitignore` covering the screenshots and records. Commit the folder as it stands, or ignore it entirely?
6. **This plan's location.** It's in `.claude/plans/`, because the site appears to be served by GitHub Pages (CNAME, no `.nojekyll`). Jekyll skips dot-folders but would publish a root `plans/` folder. Move it if you keep plans elsewhere.

## Found while working

- `policy.date` uses `&nbsp;·&nbsp;` as a separator. That's a single dot in a byline-like line, which gate 63 allows, so it's left as is.
- Resolved open questions by default on "proceed": Lucide inline SVGs; changelog icons dropped (6a, `emoji` field removed from all 7 languages); stamp kept; changelog no-JS left as is; `.hallmark/` left with its own `.gitignore`.
- Task 6 left an orphaned 20px indent on changelog items (inherited from `.policy-body ul`); reset with `.policy-body .changelog-items { margin-left: 0; }`.
- Gate 19: removed the en dash in the German changelog (now a comma).
- Asset versions bumped: `style.css?v=5`, `changelog-data.js?v=2`.
- privacy.html no-JS fallback for `policy.date` still says "Darrera actualització: 1 d'abril de 2025"; i18n says 5 August 2026. Legal text, not touched.
- Result: sloplint 0 FAIL · 0 REFLEX · 6 waived (7b ×5, 26b) · 3 answered · 1 dismissed · 40 notes; kept 23/23 links, 2/2 handlers, 24/24 script hooks, 25/25 headings.

## Rebase onto origin/master (PR #1 content), 2026-10-27

The polish was first built on `b1a91bd`, a local 1.5 update never pushed to master. `origin/master` got a separate 1.5 update (PR #1). Branch `polish-v1.5` rebuilds on `origin/master`:

- Kept PR #1's content (7-language screenshots, insights row, reworked more grid) as canonical.
- Carried over the changelog page from `b1a91bd`: `changelog.html`, `changelog-data.js` (polished), changelog CSS, nav and footer links, and five keys (`nav.changelog`, `meta.description.changelog`, `page.title.changelog`, `changelog.heading`, `changelog.intro`) in all seven dictionaries.
- Re-applied the polish markup: `.js` class, eyebrows to `band-title`, Lucide icons for the seven grid items and the language toggle.
- Removed all 196 em dashes (i18n.js, index.html, privacy.html). Rules: a dash after a bold label becomes a colon; the list dashes in `f2.desc` and `more.why.desc` become colons (French ` : `); the paired dashes in `f4.desc` become parentheses; every other one becomes a comma. Privacy wording is otherwise unchanged.
- Synced two stale fallbacks in index.html (`f2.desc`, `f4.desc`).
- Four trust points now sit in a 2 x 2 grid (one column under 500px).
- Versions: `style.css?v=5`, `i18n.js?v=5`, `changelog-data.js?v=2`.
- Result: sloplint 0 FAIL, 0 WARN; every link, handler, data-i18n key and data-shot hook from origin/master present.
- Not carried from `b1a91bd`: its `f5.*`, `more.verdict.*`, `more.freshness.*` and `s3.nominatim` keys. PR #1 removed those sections, so they stay removed. Check whether dropping Nominatim from the privacy policy was intended: if the app still calls it, the policy should list it.
