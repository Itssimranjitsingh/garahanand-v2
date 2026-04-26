---
name: garhanand-design
description: Use this skill to generate well-branded interfaces and assets for GarhAnand, a sacred educational platform teaching Larivaar Gurmukhi writing in the Sikh tradition. Contains essential design guidelines, colors, type, fonts, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick Reference

**Brand**: GarhAnand — calm, sacred, scholarly. Never commercial.
**Stack**: Next.js + Tailwind (production); React + inline styles (prototypes)

**Colors**
- Primary bg: `#0F2A2A` (deep teal, dark-first)
- Sand/light: `#EAE3D5`
- Gold accent: `#C2A36B` (sparingly — borders, decorative only)
- CTA/sage: `#7FAF9B`
- Text on dark: `#F5F1E8`

**Fonts** (all via Google Fonts)
- Display/Headings: `Cormorant Garamond` 300/400 (light, serif, editorial)
- Body: `Inter` 400/500
- Gurmukhi: `Noto Sans Gurmukhi` 300/400

**Tone**: Calm, reverent. No emoji. No exclamation marks. Sentence case for UI.
Donation copy: "Seva", "Contribute", "Support the Mission" — never "Buy" or "Checkout".

**Key feature**: Larivaar mode — continuous Gurmukhi text (`word-spacing: -0.48em`) with per-word hover reveal and tooltip for meaning.

**Components**: See `ui_kits/garhanand/` for full interactive prototype.
**Design tokens**: See `colors_and_type.css` for all CSS variables.
**Preview cards**: See `preview/` folder for all component specimens.
