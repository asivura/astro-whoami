# Contributing

Thanks for your interest in contributing to astro-whoami.

## Setup

```bash
git clone https://github.com/asivura/astro-whoami.git
cd astro-whoami
npm install
npm run dev
```

## Development

- `npm run dev` starts the dev server at `localhost:4321`
- `npm run build` builds the production site
- `npm run format` auto-formats with Prettier
- `npm run lint` runs ESLint
- `npm run check` runs Astro type checking
- `npm run lint:md` lints markdown files

Pre-commit hooks run automatically via husky. They will format staged files and validate your commit message.

## Commit messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add dark mode toggle animation
fix: correct RSS feed date format
docs: update deployment instructions
```

## Pull requests

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `npm run format && npm run lint && npm run check && npm run build` to verify
4. Push and open a PR against `main`

All PRs must pass CI checks (lint, build, Lighthouse) before merging.

## Guidelines

- Keep changes focused. One feature or fix per PR.
- Follow existing code patterns and conventions.
- No React, Vue, or Svelte. Pure Astro components only.
- Markdown only for content (no MDX).
