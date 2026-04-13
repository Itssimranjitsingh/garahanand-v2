# AGENTS

## Principles
- Clarity and consistency over cleverness. Minimal changes. Match existing patterns.
- Keep components/functions short; break down when it improves structure.
- TypeScript everywhere; no `any` unless isolated and necessary.
- No unnecessary `try/catch`. Avoid casting; use narrowing.
- Named exports only (no default exports, except Next.js pages).
- Absolute imports via `@/` unless same directory.
- Follow existing ESLint setup; don't reformat unrelated code.
- Zod type-only: `import type * as z from 'zod';`.
- Let compiler infer return types unless annotation adds clarity.
- Options object for 3+ params, optional flags, or ambiguous args.
- Hypothesis-driven debugging: 1-3 causes, validate most likely first.

## Token efficiency
- Skip recaps unless the result is ambiguous or you need more input.

## Commands
Only these `bun run` scripts: `build-local`, `lint`, `check:types`, `check:deps`, `check:i18n`, `test`, `test:e2e`.

## Git Commits
Conventional Commits: `type: summary` without scope. The summary should be a short, specific sentence that explains what changed and where or why, not a vague phrase. Types: `feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert`. `BREAKING CHANGE:` footer when needed.

## Env
All env vars validated in `Env.ts`; never read `process.env` directly.

## Styling
Tailwind v4 utility classes. Reuse shared components. Responsive. No unnecessary classes.

## React
- No `useMemo`/`useCallback` (React compiler handles it). Avoid `useEffect`.
- Single `props` param with inline type; access as `props.foo` (no destructuring).
- Use `React.ReactNode`, not `ReactNode`.
- Inline short event handlers; extract only when complex.

## Pages
- Default export name ends with `Page`. Props alias (if reused) ends with `PageProps`.
- Locale pages: `props: { params: Promise<{ locale: string }> }` → `await props.params` → `setRequestLocale(locale)`.
- Escape glob chars in shell commands for Next.js paths.
- Dashboard pages (sit behind auth); define meta once in layout, not in each page.

## i18n (next-intl)
- Never hard-code user-visible strings. Page namespaces end with `Page`.
- Server: `getTranslations`; Client: `useTranslations`.
- Context-specific keys (`card_title`, `meta_description`). Use `t.rich(...)` for markup.
- Use sentence case for translations.
- Error messages: short, no "try again" variants.

## JSDoc
- Start each block with `/**` directly above the symbol.
- Short, sentence-case, present-tense description of intent.
- Order: description → `@param` → `@returns` → `@throws` (only if it can throw).

## Tests
- `*.test.ts` for unit tests; `*.spec.ts` for integration tests; `*.e2e.ts` for Playwright tests.
- `*.test.ts` co-located with implementation; `*.spec.ts` and `*.e2e.ts` in `tests/` directory.
- Top `describe` = subject; nested `describe` to group scenarios or contexts.
- `it` titles: short, third-person present, `verb + object + context`. Sentence case, no period.
- Omit "should/works/handles/checks/validates". State what, not how.
- Avoid mocking unless necessary.

## Design System

### Principles
- Sacred, minimal, and storytelling-focused UI
- Prioritize readability over visual complexity
- UI should feel calm, archival, and respectful

### Colors
- Use design tokens only (no hardcoded colors)
- Avoid pure black (`#000`)
- Accent colors are used sparingly (especially saffron)
- Prefer `ink`, `faded`, `saffron`, `earth` tokens

### Typography
- Headings: Playfair Display
- Body: EB Garamond
- Gurmukhi: Noto Serif Gurmukhi
- Maintain generous line height (1.7+)
- Max reading width: `max-w-3xl`

### Background
- Global paper texture applied on `<body>`
- Always use overlay for readability
- Components must remain flat (no textured UI elements)

### Components
- Flat design only (no shadows)
- Use subtle borders (`border-subtle`)
- Hover = background tint only
- Avoid heavy visual separation

### Spacing
- Prefer whitespace over dividers
- Use vertical rhythm (`space-y-*`, `py-*`)

## UI Rules

- No shadows (`shadow-*` not allowed)
- No gradients unless explicitly defined
- No bordered containers inside bordered containers
- Avoid nested cards
- Limit to 1 primary action per section
- Keep layouts centered and readable

## i18n UI

- Always support EN + ਪੰਜਾਬੀ toggle
- Do not mix languages in the same paragraph
- Gurmukhi text must have increased line-height
- Layout must not break when switching languages
- Avoid fixed-width UI elements that break with translation

## Content Rendering

- Use `prose` styles for all article content
- Paragraph spacing must be consistent (`mb-6`)
- Avoid dense text blocks
- Use quote blocks for important lines
- Optional drop caps for first paragraph only

## Interaction

- Animations must be subtle and calm
- Use `transition-all duration-300 ease`
- No bounce or aggressive motion
- Hover effects should be minimal
- Avoid distracting UI behavior

## Components

- Reuse existing components before creating new ones
- Components must be small and composable
- Variants via props (not duplication)
- No inline styles unless dynamic
- Use semantic HTML

## Anti-Patterns

- Do not use pure black text
- Do not add shadows or glassmorphism
- Do not use bright or saturated colors
- Do not create complex layouts for simple content
- Do not break reading flow with excessive UI