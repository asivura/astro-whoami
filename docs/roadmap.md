# Roadmap

Planned improvements for astro-whoami, organized by priority. Based on the [competitive analysis](competitive-analysis.md) and template audit.

Items marked with ~~strikethrough~~ are already shipped.

## Completed (v1.0 - v1.2)

- ~~Tag archive pages (`/blog/tags/[tag]`)~~
- ~~View Transitions (Astro ClientRouter)~~
- ~~Skip-to-main link~~
- ~~Draft post filtering from direct URL access~~
- ~~Empty state messages for blog and projects~~
- ~~Cloudflare deployment guide~~
- ~~Self-hosted fonts via @fontsource~~
- ~~Lighthouse CI with 100 score targets~~
- ~~Husky + lint-staged + commitlint~~

## Next Up

### v1.3: Blog Enhancements

| Feature                   | Description                                                       | Effort |
| ------------------------- | ----------------------------------------------------------------- | ------ |
| Reading time              | Show estimated minutes per post based on word count               | Low    |
| Blog pagination           | Split blog listing into pages when post count exceeds a threshold | Low    |
| Prev/next post navigation | Link to previous and next posts at the bottom of each post        | Low    |
| RSS per tag               | Filtered RSS feeds at `/blog/tags/[tag]/rss.xml`                  | Low    |

**Files likely affected**: `PostLayout.astro`, `blog/index.astro`, `blog/[...slug].astro`, `rss.xml.ts`

### v1.4: Content Features

| Feature                          | Description                                                              | Effort |
| -------------------------------- | ------------------------------------------------------------------------ | ------ |
| Dynamic OG images                | Auto-generate social sharing images per post using satori + resvg        | Medium |
| Table of contents                | Auto-generated heading navigation for long posts, opt-in via frontmatter | Medium |
| Copy-to-clipboard on code blocks | Add a copy button to fenced code blocks                                  | Low    |

**Approach for OG images**: Generate at build time via an Astro endpoint at `/og/[slug].png`. Use satori to convert an HTML template to SVG, then resvg to convert to PNG. Reference the generated image in the `og:image` meta tag. AstroPaper and Cactus both use this pattern.

**Approach for table of contents**: Parse heading elements from rendered markdown. Display as a sticky sidebar on wide screens, collapsible on mobile. Opt-in via `toc: true` in frontmatter to keep simple posts clean.

### v1.5: Search and Discovery

| Feature         | Description                                                    | Effort |
| --------------- | -------------------------------------------------------------- | ------ |
| Pagefind search | Static full-text search with zero JS at rest                   | Medium |
| Related posts   | Suggest posts with overlapping tags at the bottom of each post | Low    |

**Approach for search**: Pagefind runs at build time and generates a static index. It loads JavaScript only when the user opens the search dialog. Add a search trigger in the nav bar (keyboard shortcut: Cmd/Ctrl+K). This is the dominant pattern in the Astro ecosystem (AstroPaper, Cactus, Micro all use it).

### v1.6: Analytics and Monitoring

| Feature             | Description                                                                   | Effort |
| ------------------- | ----------------------------------------------------------------------------- | ------ |
| Analytics slot      | Configurable analytics integration in site.config (Plausible, Fathom, or GA4) | Low    |
| Web Vitals tracking | Optional Core Web Vitals reporting                                            | Low    |

**Approach**: Add an optional `analytics` field to `site.config.ts` with a `provider` and `siteId`. Inject the appropriate script tag in `Head.astro` based on the provider. Default to no analytics (privacy-first).

## Someday / Maybe

Lower priority features that could be valuable but aren't essential for a minimal template:

| Feature            | Notes                                                                    |
| ------------------ | ------------------------------------------------------------------------ |
| Giscus comments    | GitHub Discussions-based comments. Adds external dependency.             |
| i18n routing       | Multi-language support. Significant complexity for a minimal template.   |
| CMS integration    | Decap CMS or similar. Adds admin overhead.                               |
| MDX support        | Adds build complexity. Markdown covers most use cases.                   |
| a11y ESLint plugin | `eslint-plugin-jsx-a11y` for catching accessibility issues at lint time. |

## Principles

These guide what gets added and what doesn't:

1. **Minimal by default**: features should be opt-in, not opt-out
2. **Zero JS unless necessary**: prefer build-time solutions over client-side libraries
3. **No external dependencies for core features**: search, OG images, and analytics should all work without third-party services
4. **Template users shouldn't need to eject**: new features should work through configuration in `site.config.ts`, not by modifying component internals
5. **AI-agent friendliness is a first-class concern**: structured data, semantic HTML, and clean URLs take priority over visual features
