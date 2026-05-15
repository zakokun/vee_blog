# 雑魚君のブログ

Personal blog built with [Astro](https://astro.build), based on the
[Astro Scholar](https://github.com/whydevils/astro-scholar) theme.

Production domain: <https://blog.zakokun.com>

## Local Development

```bash
npm install
npm run dev
```

Astro will print a local preview URL, usually <http://localhost:4321>.

## Writing Posts

Each blog post lives in its own folder under `src/pages/blog/`.

```text
src/pages/blog/
├── index.astro
└── my-post-slug/
    ├── index.md
    ├── cover.png
    └── other-file.pdf
```

Use this frontmatter in each `index.md`:

```markdown
---
layout: '../../../layouts/BlogPost.astro'
title: 'Post title'
date: '2026-05-13'
description: 'One sentence shown on the blog index.'
tags: ['notes']
---
```

Assets in the same post folder can be referenced from Markdown with relative paths:

```markdown
![Cover](./cover.png)
```

The route is based on the folder name. For example:

```text
src/pages/blog/my-post-slug/index.md
```

becomes:

```text
https://blog.zakokun.com/blog/my-post-slug/
```

## Site Settings

Edit `src/constants.ts` for the site name, tagline, social links, SEO description,
and deployed URL.

Edit `astro.config.mjs` if the production domain changes.

## Cloudflare Pages

Recommended settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22` or newer

After pushing to GitHub, connect the repository in Cloudflare Pages and add the
custom domain `blog.zakokun.com`.

## Useful Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the built site
```

## Theme Credit

Original theme: [whydevils/astro-scholar](https://github.com/whydevils/astro-scholar)
under the MIT license.
