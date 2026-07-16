# Newegg Design System

An HTML-first recreation of Newegg's 2026 NEUX design guideline — colors, typography, components, and an in-browser UI kit for quickly mocking up Newegg storefront screens.

## Sources

- **Figma** — *Guideline_2026-New.fig* (mounted as a read-only virtual filesystem). 9 pages, 23 top-level frames: Cover, 01-Layout, 02-Color, 03-Typography, 04-Button, 05_Icons, 06-Ratings, Badge, Summary. Authored by the **NEUX** team.
- **Brand**: Newegg — the online retailer for computer hardware, electronics, gaming, and consumer tech. The system is designed for the **newegg.com** desktop storefront (with tablet and phone responsive breakpoints called out in typography).

## What's in here

| File / folder | Purpose |
| --- | --- |
| `colors_and_type.css` | Root CSS variables — colors (GY / OG / BL / SB / NB / GR / RE / YE / ROSE / brand) and type scale |
| `assets/` | Real logos and icon SVGs copied out of the Figma |
| `preview/` | Cards that render on the Design System tab |
| `ui_kits/newegg-storefront/` | Interactive HTML mock of a Newegg product page w/ JSX components |
| `SKILL.md` | Agent-skill manifest (portable to Claude Code) |
| `fonts/` | *(empty — uses Google Fonts fallback, see CAVEATS below)* |

---

## Brand context

Newegg is a US-based online retailer founded in 2001, best known as the go-to destination for **PC builders, gamers, and prosumer tech buyers**. The storefront is dense, information-rich, and optimized for comparison-shopping: long product grids, aggressive price callouts, badge-heavy deal merchandising ("Shell Shocker", "Combo Savings", rebates, coupons), and first-party features like **PC Builder** and **Gamer Community**.

The 2026 **NEUX** guideline is a refresh of the storefront visual system — it keeps Newegg's historic yellow-and-navy DNA but pushes toward a cleaner, more modular component library with a proper typographic scale and semantic color roles (vs. hex-by-hand).

---

## Content fundamentals

**Voice**: direct, transactional, deal-driven. Newegg copy is written to move product — short headlines, sentence-case labels, no hand-holding. Second person ("Your cart", "Shop Now") used sparingly; most UI copy is imperative or nominal.

**Casing**:
- Page titles and primary nav — **Title Case Italic Bold** ("Digital games", "Shell Shocker", "PC Builder", "Gamer Community"). The italic + bold combo is a Newegg signature.
- Secondary nav / subcategories — Sentence case regular ("Xbox Digital games", "Best seller in digital games").
- Buttons — Title Case ("Add to Cart", "View more", "Sign In").
- Badge labels — lowercase for save amounts ("save"), UPPERCASE for urgency ("HOT DEAL", "CLEARANCE").

**Tone examples** (from the Figma):
- `Menu`, `Shell Shocker`, `PC Builder`, `Best Sellers`, `Newegg Card`, `Gamer Community`, `Free Gift w/ AMD`
- `Newegg Business` *(italic — sub-brand callout)*
- `Feedback`, `Help Center`
- Breadcrumbs: `Home › Software & Services › Digital Games` — terminal crumb italic + navy

**No emoji.** Newegg does not use emoji in UI chrome. Icons are always SVG. Unicode arrows / bullets are avoided in favor of explicit icon components (arrow-view-more-16, arrow-right-16, etc.).

**Numbers**: prices always use `$` prefix and often paired with strike-through MSRP and a red "save $X" badge. Star ratings are numeric + rating egg (not star).

---

## Visual foundations

**Colors** — a large ramped system with named scales. Core families:
- **GY** (Gray, 16 steps: GY1 #F7F7F7 → GYD #121212) — backgrounds, borders, body copy
- **OG** (Orange, 16 steps: OG1 #FCF8F2 → ORD #220C01) — deep deal callouts, "save" badges
- **BL / Blue** (link + primary) — `#1061CD` default link, `#084BA6` hover/strong
- **SB** (Steelblue, 15 steps) — cool neutrals, icon secondary
- **NB** (Turquoise New, 16 steps: NB1 #F1F8FB → NBD #001619) — headers use `NB14 #00283A` (NE Navy)
- **RE** (Red, 15 steps) — **#DB1600 (RE9)** is the sale price color
- **YE** (Canary, 15 steps) — **#FFBB00** rating-egg fill, deal yellows
- **GR / ROSE / PUR** — semantic (success, promo, premium)
- **Brand anchors**: NE Logo Blue `#09144F`, NE Navy `#00283A`, NE Yellow `#FA9D28`, NE Orange `#F06C00`, NE Light Orange `#FF8500`, NE Light Blue `#084BA6`

**Typography** — **Open Sans** (Regular 400, Medium 500, Bold 700, Extrabold 800, plus Italic and Bold Italic) is used for 95%+ of text. Arial is a fallback, Inter appears in spec annotations only. Defining characteristic: **Bold Italic at 11–24px for section / page titles and brand lockups** ("Newegg Business", "Digital games", breadcrumb terminals).

Scale (desktop): Display 56/78 · LargeTitle 34/48 · H1 32/44 · H2 28/36 · H3 24/32 · H4 20/24 · Body 17/22 · Body-md 16/22 · Caption 13/18 · Micro 12/16 · XXS 11/14. Responsive breakpoints: Desktop `>1000`, Tablet up to 1000, Phone `<580`.

**Layout** — max content width **1740px** with **30px** side gutters. Content centers in the viewport; the navy header + light-blue sub-nav strip run edge-to-edge but their content stays within the 1740 grid.

**Backgrounds** — solid, rarely gradient. Page is white; panels step down to GY1/GY2. The navy header and the `#EEF5FF` light-blue sub-nav are the only recurring colored surfaces. No full-bleed hero images in the system spec — product imagery sits on white with thin gray borders. No hand-drawn illustration or pattern. No grain or noise. The Cover frame uses a deep navy `#071C58` with a diagonal diamond-gradient of translucent ellipses — this is cover-art only, not a UI surface.

**Corner radii** — buttons are a **40px pill**. Cards/chips use **6px**. Tiny decorations (input border) **2–4px**. Rating egg is an organic non-circle shape (not a star).

**Cards** — white fill, `1px solid #E8E8E8` (GY3) border, `6–8px` radius, subtle `0 1px 3px rgba(0,0,0,0.08)` shadow appearing on hover.

**Borders** — hairlines are GY3 `#E8E8E8`. Input + button outlines GY4 `#D1D1D1`. Dividers between nav items are 1px rounded GY4 pipes.

**Shadows** — minimal. Card-rest barely visible; hover adds a 6–8px drop.

**Animation** — no documented bespoke motion. Hover states are **color swaps** (not transforms): Primary yellow → softer peach-orange (`#FFB25D`) on hover → deeper orange on active. Press-states use `#FF8500` (NE Light Orange). No bouncing, no big fades, no parallax.

**Hover states** — color darken/lighten; links get underline on hover. No opacity-to-60 conventions.
**Press / active** — color shifts one step darker; no scale-shrink.
**Disabled** — GY4 `#D1D1D1` fill, GY7 `#949494` text, no border change.

**Transparency / blur** — not used in the guideline.

**Imagery tone** — product-centric photography on white. Not warm, not cool — neutral studio. No B&W. No grain.

---

## Iconography

Icons are **24×24 max, mostly 16/20/26px**, always SVG, single-color (GY15 `#212121` default; recolored via `fill`). There is **no icon font** — each icon is a standalone SVG copied from Figma. Line weights are ~1.5–2px; corners gently rounded.

**Sizes in use**:
- `16` — inline with body text (arrow-view-more-16, arrow-right-16, info-16, feedback-16, question-16, btn-arrow-16, dots-16)
- `20` — primary UI (search, menu, close, dark-mode, heart, heart-selected, like, eye-open, eye-closed, student, price-alert, more-offer, selected, filter)
- `24` — CTAs, nav accents (arrow)
- `26` — mobile footer bar icons (type=home / cart / category / account / community / ai, each with `status=default | selected`)

**Categories present in Figma**:
Arrows (view-more, small, large, right, tail, btn-arrow), nav (menu, dots, filter, search, close), state (heart, heart-selected, like, like-selected, unlike, eye-open, eye-closed, selected, success, bad), commerce (price-alert, more-offer, combo-saving, deal, gift, rebate, cart, compare, save-search, feedback, history), tools (copy, edit, edit-simply, add, minus, remove, setting, delete-error, student, light-mode, dark-mode, ai).

**Emoji**: never.
**Unicode chars as icons**: never — even `?` in the "question" icon is drawn inside a circled SVG.

All copied icons live in `assets/icons/` (we copied the most common ones directly from Figma SVGs). For any icon not yet extracted, open the Figma path `/05_Icons/components/<Name>/` and copy the SVG into `assets/icons/`.

---

## Rating "egg"

Newegg's rating primitive is **not a star**. It's an ovoid "egg" shape (from the brand name) with three states:
- `orange` — filled `#FFBB00` with `#F29A36` stroke (rated)
- `half` — left half filled, right half GY3
- `gray` — empty GY3 fill with GY5 stroke

Default sizes: 20×20 (cards), 16×16 (list rows).

---

## Index of files

- [colors_and_type.css](./colors_and_type.css) — all design tokens
- [assets/logo-newegg-light.png](./assets/logo-newegg-light.png) — full Newegg lockup (dark navy + yellow)
- [assets/icons/](./assets/icons/) — copied SVG icons
- [preview/](./preview/) — Design-System-tab cards (palettes, type, components)
- [ui_kits/newegg-storefront/](./ui_kits/newegg-storefront/) — interactive product-page mock
- [SKILL.md](./SKILL.md) — Claude-Code-compatible skill manifest

---

## CAVEATS

- **Fonts**: Open Sans is loaded from Google Fonts. If you have the licensed TTF/WOFF files Newegg ships with, drop them in `fonts/` and replace the `@import` in `colors_and_type.css`.
- **Inter** appears in annotations (13px mostly) — we use Open Sans as a fallback.
- **Montserrat ExtraBold** appears once (183px) on the Cover — we did not replicate the Cover.
- **Color names** follow the Figma's own tokens (GY, OG, BL, SB, NB, RE, YE, ROSE, PUR) so designers using the Figma will recognize them one-to-one.
- We did not crawl newegg.com itself — everything is from the guideline Figma. Real production pages may diverge.
