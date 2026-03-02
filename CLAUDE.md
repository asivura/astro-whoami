# CLAUDE.md

Minimal, text-forward, AI-agent-friendly personal website template built with Astro.

## Quick Start

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
```

## Structure

```
astro-whoami/
├── src/
│   ├── site.config.ts      # Single config file for personalization
│   ├── content.config.ts   # Content collection schemas (blog, projects)
│   ├── styles/global.css   # Theme variables (light/dark/sepia) + typography
│   ├── layouts/             # BaseLayout, PageLayout, PostLayout
│   ├── components/          # Nav, Footer, ThemeToggle, PostList, ProjectCard
│   ├── pages/               # Routes: index, blog, projects, about, rss, 404
│   └── data/                # Markdown content (blog/, projects/)
├── public/                  # Static assets (favicon, robots.txt)
├── astro.config.ts
└── tailwind.css
```

## Key Files

- `src/site.config.ts` -- all personalization (name, bio, socials, nav, featured posts)
- `src/styles/global.css` -- theme colors and prose typography
- `src/content.config.ts` -- Zod schemas for blog and project frontmatter

## Stack

- Astro 5 (static output, no client-side framework)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript
- Shiki (code highlighting with light/dark theme support)

## Conventions

- No branch protection. Commit and push directly to main.
- Pure Astro components, no React/Vue/Svelte
- Markdown only for content (no MDX)
- Semantic HTML5 throughout
- JSON-LD structured data on every page type
