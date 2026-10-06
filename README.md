# thiago8rocha.github.io

[![CI](https://github.com/thiago8rocha/thiago8rocha.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/thiago8rocha/thiago8rocha.github.io/actions/workflows/ci.yml)

Portfolio of Thiago Oliveira Rocha, Senior QA Analyst. Live at <https://thiago8rocha.github.io>, with the Playwright report at <https://thiago8rocha.github.io/test-report/>.

The site is itself a portfolio item: it ships with a Playwright + axe suite and a pipeline that blocks deploys when a test fails.

## Architecture

- **Astro + TypeScript**, static output, no UI framework, hand-written CSS with design tokens (`src/styles/global.css`).
- Client JavaScript is limited to theme toggle, mobile menu, "show more" and project filters (`src/layouts/Base.astro`).
- English is the default (`/`), Portuguese lives at `/pt/`. Both pages render the same components from per-language data.

```
src/
  data/{en,pt}/   all site content, one typed file per section
  data/types.ts   the shape every content file must follow
  components/     Header, Hero, Sections, Footer (no hard-coded text)
  layouts/Base.astro   head, SEO, JSON-LD, theme init, client scripts
  pages/          index.astro (en) and pt/index.astro
public/resume/    resume PDFs, robots.txt, favicon
tests/            Playwright specs and fixtures
```

## Editing content

Edit the files in `src/data/en/` and `src/data/pt/`; no component changes needed. Keep both languages in sync. Lines marked `TODO` in those files are pending content decisions. Resume PDFs go in `public/resume/` and are referenced from `profile.ts`.

## Running

```bash
npm install
npm run dev            # local dev server
npm run build          # static build into dist/
npx playwright install chromium
npm test               # builds, serves the build and runs the suite
npm run test:report    # open the HTML report
```

## Test suite

Selectors use roles and labels only. Each spec runs in two Playwright projects, `desktop` and `mobile` (360px), configured in `playwright.config.ts`.

| Spec | Covers | Why |
| --- | --- | --- |
| `routes` | Home in each language, `sitemap`, `robots.txt` return 200 | Catches broken builds and SEO files |
| `navigation` | Menu anchors, "show more", project filters, language and theme switch | The only interactive behavior on the site |
| `resume` | Resume button points to a real PDF | The main call to action must not break |
| `links` | LinkedIn, GitHub and `mailto:` destinations | A wrong contact link defeats the site |
| `a11y` | axe (WCAG 2.2 AA) in both languages and both themes, zero violations | Accessibility is part of the QA brand |
| `content` | No visible `TODO` and no images of people | Keeps unfinished content out of production |

## Pipeline

`.github/workflows/ci.yml`:

1. Pull request: install, type check, build, run the suite against the local build, upload the report as an artifact.
2. Push to `main`: same steps, then the report is copied to `/test-report/` inside the site and deployed to GitHub Pages. The `deploy` job `needs: test`, so a failing test blocks the deploy.

Requires Settings > Pages > Source set to **GitHub Actions**.
