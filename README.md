# surajitbasak109.github.io

Personal site of Surajit Basak, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add content

| What | Where |
|---|---|
| Name, bio, social links, nav | `src/site.ts` |
| Blog post | `src/content/blog/<slug>.md` (see `my-first-post.md`; `draft: true` hides it) |
| Note / interview prep | `src/content/notes/<slug>.md` with `title`, `group`, optional `order`, `difficulty`, `link` |
| Project | `src/content/projects/<slug>.md` with `title`, `tagline`, `year`, optional `repo`, `demo`, `download`, `tech`, `featured`, `order`, `cover` |
| Resume, images | `public/files/`, `public/images/` |

## Deploy

Every push to `master` builds and deploys via `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
