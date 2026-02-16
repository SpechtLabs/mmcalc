# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
bun run dev       # Vite dev server with HMR
bun run build     # Type-check (tsc -b) + production build to dist/
bun run lint      # ESLint (flat config)
```

Tool versions are managed via `.mise.toml` (node 22, bun latest).

## Architecture

React 19 SPA with Vercel serverless API functions. Tailwind CSS 4 via Vite plugin. React Router DOM 7.

### Frontend (`src/`)

- `App.tsx` - BrowserRouter with routes wrapped in `Layout`
- `pages/CalculatorPage.tsx` - Multi-card calculator with URL state sync
- `components/CalculatorCard.tsx` - Single comparison card (sensor select, focal length, aperture, optional DoF)
- `data/sensors.ts` - Sensor definitions with `Sensor` interface (id, name, width, height, models, category)
- `utils/calculations.ts` - Pure math functions (crop factor, equivalent FL/aperture, DoF, formatting)
- `hooks/useTheme.ts` - Dark mode via `dark` class on `<html>`, persisted to localStorage

### API (`api/`)

- `calc.ts` - Parses URL paths like `/gfx-80-1.7`. CLI user-agents get plain text; browsers get 302 redirect to SPA.
- `legal.ts` - Serves legal pages. Browsers get `dist/index.html` (SPA routing); CLI gets raw markdown from `public/`.

The API has its own duplicate sensor definitions, independent from the frontend bundle.

### Vercel Rewrites (`vercel.json`)

Legal pages (`/terms`, `/privacy`, `/impressum`) rewrite to `/api/legal`. CLI-style paths matching `/<sensor>-<fl>-<aperture>` rewrite to `/api/calc`.

## URL State Format

Cards sync to URL via `replaceState`:
```
/?c=gfx-80-1.7&c=apsc-50-1.8@2.5
```
Format: `{sensorId}-{focalLength}-{aperture}` with optional `@{distanceMeters}` for DoF. Legacy format `?sensor=...&fl=...&ap=...` is also parsed on load.

## TypeScript

Strict mode with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` (no enums/namespaces), and `verbatimModuleSyntax` (use `import type` for type-only imports). Target ES2022.

## Style

- Teal accent color (`teal-500`/`teal-400` dark)
- Dark mode via `dark` class strategy
- No em-dashes in code or text output
