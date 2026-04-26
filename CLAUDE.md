# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on `http://localhost:5173`.
- `npm run build` — type-checks (`tsc -b`) then builds to `dist/`. Build fails on TS errors.
- `npm run preview` — serve the production build locally.
- `npm run lint` — ESLint (flat config, `eslint.config.js`).
- `npm run typecheck` — `tsc -b --noEmit`.
- `npm run format` — Prettier write; the Tailwind plugin auto-sorts class names.

No test runner is configured yet.

## Deployment

Firebase Hosting project `mensakovci` (see `.firebaserc`). Both GitHub workflows in `.github/workflows/` run `npm ci && npm run build` and deploy `dist/`. The build step needs `VITE_FIREBASE_*` values as repo secrets — without them, Firestore calls in the built bundle will fail at runtime, not at build time.

`firebase.json` has a SPA rewrite (`**` → `/index.html`). Do not remove it — `react-router-dom` uses `BrowserRouter` and relies on this fallback for deep links like `/rsvp`.

## Environment

Only variables prefixed `VITE_` are exposed to the client bundle. Typed in `src/vite-env.d.ts`; consumed in `src/lib/firebase.ts`. Local dev reads from `.env.local` (gitignored); the template is `.env.example`.

## Architecture

**Single-page React app, two routes** (`src/App.tsx`): `/` → `HomePage`, `/rsvp` → `RsvpPage`. Both routes wrap shared `NavBar` + `Footer`.

**Home page is section-composed.** `src/routes/HomePage.tsx` just stacks `src/sections/*` components in order (Hero, Miesto, Harmonogram, Oblecenie, Dary, Kontakt, RsvpCta). Each section is self-contained and reads its content from `src/data/*.ts` — adding a schedule row, contact, or dresscode swatch means editing the data file, not JSX. `NavBar`/`Footer` links come from `src/data/navLinks.ts`; keep anchors in sync with section `id`s.

**Hash-anchor scrolling** lives in `src/hooks/useScrollToHash.ts` and is only called from `HomePage`. It watches `useLocation()` and scrolls on hash change; `RsvpPage` uses a plain `window.scrollTo(0, 0)` effect instead.

**RSVP form** (`src/routes/RsvpPage.tsx`) is the only stateful surface. Flow: `react-hook-form` + `zodResolver(rsvpSchema)` (`src/routes/rsvp/schema.ts`) → `addDoc` into Firestore collection `rsvps` via `getDb()` (`src/lib/firebase.ts`, lazy-initialized). The page drives a local `'idle' | 'submitting' | 'success' | 'error'` status; the form is replaced with a thank-you panel on success. Field components (`IdentityFields`, `DietFields`, `PhotosUpload`) receive `register`/`errors` as props — keep them dumb; state stays in the page.

**Firestore security rules live in `firestore.rules`** at the repo root and are referenced by `firebase.json`. Deploy with `firebase deploy --only firestore:rules --project=mensakovci`. The current rules allow anonymous `create` on `rsvps` (with a strict schema validator: 5 expected fields, type/size/range checks, guests 1–6) and deny everything else. When the RSVP schema changes (`src/routes/rsvp/schema.ts`), update `firestore.rules` and redeploy.

## Styling system

Tailwind v3, config in `tailwind.config.ts`. The color palette is a Material 3 token set (`primary`, `on-background`, `surface-container-*`, etc.) — **prefer these tokens over arbitrary `bg-[#...]` values**, which bypass the theme. A handful of off-palette hexes (`#f3f2ee`, `#252725`) remain in `Footer`; if you touch them, consider adding proper tokens.

Reusable class compositions live in `@layer components` in `src/styles/tailwind.css`: `.eyebrow`, `.eyebrow-sm`, `.nav-link`, `.section-title`, plus `.sticky-header-offset`, `.vertical-rl`, `.liptov-pattern`. Reach for these before re-inlining class strings.

Dark mode is `darkMode: 'class'` but no toggle is wired — `dark:` variants are scaffolded only.

## Path alias

`@/` → `src/`. Configured in both `vite.config.ts` (runtime) and `tsconfig.app.json` (type resolution). If you add another alias, update both.

## Content language

UI copy is Slovak. When adding new strings, match the existing tone (formal, lowercase eyebrows, Newsreader italic for display headlines). Dates use `DD. MM. YYYY` format.
