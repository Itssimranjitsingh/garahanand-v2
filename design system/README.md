# GarhAnand Design System

## Overview

**GarhAnand** is a cultural, educational, and spiritual web platform dedicated to teaching the importance of **Larivaar** (continuous, unspaced Gurmukhi script) writing in Sikhism. The platform serves learners, scholars, and devotees who wish to deepen their connection to Sikh scripture through authentic textual traditions.

This is **not a SaaS product or startup**. It is a sacred, scholarly, and mission-driven platform rooted in Sikh heritage.

### Sources
- Design system created from scratch based on brand brief and spiritual/cultural context
- No external codebase or Figma file provided; all foundations defined from brief

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Calm, reverent, and scholarly** — never promotional or salesy
- **First person plural** ("we", "our mission") for institutional statements; second person ("you") for learner-facing copy
- **No emoji** — the platform uses no emoji; ornamental flourishes are typographic, not decorative icons
- **No exclamation marks** — calm confidence, not excitement
- **Capitalization**: Sentence case for UI labels and body copy; Title Case for page/section headings; ALL CAPS avoided
- **Sanskrit/Punjabi terms** are used reverently and always explained on first use (e.g. "Seva — selfless service")
- **Donation language**: Never "buy", "checkout", "purchase" — always "Contribute", "Seva", "Support the Mission"
- **Learning language**: "Explore", "Deepen", "Practice", "Understand" — not "Buy course" or "Enroll now"

### Copy Examples
- "Larivaar is not merely a style of writing — it is a way of approaching the sacred."
- "Your seva supports the continuation of this learning for generations to come."
- "Contribute with Seva"
- "Deepen your understanding of Gurbani through traditional script."

---

## VISUAL FOUNDATIONS

### Colors
- **Primary**: `#0F2A2A` — Deep teal/forest. Used for backgrounds, navbars, dark sections (70%+ of surfaces)
- **Secondary**: `#EAE3D5` — Muted sand/cream. Used for light backgrounds, cards on dark, body text on dark
- **Accent**: `#C2A36B` — Antique gold. Used sparingly for borders, decorative marks, active states
- **CTA**: `#7FAF9B` — Soft sage. Primary interactive element color (buttons, links)
- **Text light**: `#F5F1E8` — Near-white warm. Headings on dark backgrounds
- **Dark variant**: `#0A1E1E` — Deeper teal for footer/nav
- Dark-first design: 70% dark surfaces, 30% light/sand sections

### Typography
- **Display/Heading**: Cormorant Garamond — elegant serif with historical resonance
- **Body**: Inter — clean, legible, accessible sans-serif
- **Gurmukhi**: Noto Sans Gurmukhi — for Larivaar and Pad Ched rendering
- Scale: 48px (h1) → 10px (caption), 8px base unit
- Generous line heights (1.6–1.8 for body), tight for display (1.1–1.2)

### Backgrounds
- Dark primary (`#0F2A2A`) full-bleed sections dominate
- Sand (`#EAE3D5`) for alternating content sections
- Hero: Desaturated, warm-toned heritage imagery with a deep teal overlay
- Subtle noise/grain texture on key sections for manuscript feel
- No gradients — flat or textured only

### Spacing & Layout
- 12-column grid, 1200px max-width
- Base unit: 8px (spacing scale: 8, 16, 24, 32, 48, 64, 80, 96, 128px)
- Section spacing: 80px desktop / 40px mobile

### Animation
- Fade-in only: `opacity 0→1`, `transform translateY(12px)→0`
- Duration: 300–500ms, `ease-out` easing
- No bounces, no parallax, no aggressive motion
- Hover states: subtle opacity shift (0.8) or color transition (200ms)

### Cards
- Very light or no shadow — `box-shadow: 0 1px 3px rgba(0,0,0,0.12)` max
- Border: `1px solid rgba(194,163,107,0.2)` (gold tint) on dark; none on light
- Border radius: `4px` — minimal, not pill or heavy-rounded
- No colored left-border accents; no heavy drop shadows

### Borders & Radius
- Corner radius: `4px` (small), `2px` (inputs/badges) — conservative, editorial
- Dividers: `1px solid rgba(194,163,107,0.15)` — extremely subtle gold tint
- No heavy outlines or box decorations

### Iconography
- **Minimal icon usage** — this is a typography-driven platform
- When icons are used: Lucide (thin stroke, 1.5px weight) via CDN
- No icon fonts; no emoji; no PNG icons
- Decorative elements: Unicode quotation marks, em-dashes, and Gurmukhi Ik Onkar symbol (ੴ) used as brand accent
- Logo: Text-based wordmark "GarhAnand" in Cormorant Garamond + Ik Onkar glyph

### Hover & Press States
- Buttons: background lightens slightly (sage → lighter sage), 200ms transition
- Links: opacity 0.7 on hover; no underline by default in nav
- Cards: very subtle border brightening (`rgba(194,163,107,0.4)`)
- Press: `scale(0.98)` transform, 100ms

### Shadows & Elevation
- Flat hierarchy — elevation is expressed through color contrast, not shadows
- Only one shadow level used: `0 1px 4px rgba(0,0,0,0.15)` for floating elements (navbar on scroll)

### Imagery Style
- Historical Sikh art, manuscripts, gurdwara architecture
- Desaturated 20–30%, warm amber/teal tone overlay
- Never modern stock photography
- Images always full-bleed within their containers, never bordered or framed

---

## ICONOGRAPHY

GarhAnand uses **minimal iconography**. The platform is text and typography-driven; visual communication happens through type, layout, and historical imagery — not icons.

- **Icon library**: Lucide Icons (CDN) — thin stroke, 24px base size
- **Usage**: Navigation only (menu toggle on mobile), form fields (email, amount inputs)
- **Brand glyph**: ੴ (Ik Onkar) — used as a logo prefix and section divider
- **Decorative**: typographic ornaments (— em dash, « » guillemets for Gurbani quotes)
- **No**: emoji, PNG icons, colored icon sets, animated icons

---

## FILE INDEX

| File/Folder | Description |
|---|---|
| `README.md` | This file — brand overview and design foundations |
| `colors_and_type.css` | CSS custom properties: color tokens + typography scale |
| `preview/` | Design system card previews (shown in Design System tab) |
| `ui_kits/garhanand/` | Website UI kit — interactive HTML prototype |
| `assets/` | Brand assets: logo SVG, textures |
| `SKILL.md` | Skill descriptor for Claude Code agent integration |

### UI Kits
- **`ui_kits/garhanand/index.html`** — Full website prototype (Homepage, interactive)

### Preview Cards
- Colors: brand palette, semantic tokens
- Type: display scale, body scale, Gurmukhi specimens
- Spacing: token scale, component examples
- Components: buttons, cards, quote blocks, Larivaar mode, donation section
