# corbinriches.com

Static Astro personal website and digital portfolio.

## Development Workflow

Branch roles:

- `main` is production. Netlify deploys this branch to the live site.
- `dev` is staging and experiments. Push here when you want to test changes before they go live.
- Feature branches are optional for larger changes, such as `feature/blog-polish` or `feature/project-pages`.

Typical flow:

1. Start from `dev`.
2. Run `npm.cmd run dev` and work locally.
3. Edit content in `src/data/` or `src/content/` when possible.
4. Run `npm.cmd run build` before committing.
5. Commit and push to `dev` for staging/testing.
6. Merge `dev` into `main` when the change is ready for production.

For larger experiments, create a feature branch from `dev`, then merge it back into `dev`
when it is stable.

Do not commit `node_modules`, secrets, API keys, or private `.env` files. Content updates
usually happen in `src/data/` for JSON-driven pages or `src/content/` for Markdown posts.

## Writing

Blog posts live in `src/content/blog/` as Markdown files. The blog index, tag pages, and
homepage latest-writing module are generated from those files.

To add a post:

1. Copy `templates/blog-post.md`.
2. Paste it into `src/content/blog/`.
3. Rename it with a lowercase URL-style filename, such as `my-lab-note.md`.
4. Edit the frontmatter:

```md
---
title: My Post Title
date: 2026-05-02
description: One short sentence about the post.
tags:
  - tag one
  - tag two
draft: false
asciiHeader: "[ optional ascii header ]"
---

Write the post here.
```

Use `draft: true` while writing. Draft posts are hidden from the blog index, tag pages,
homepage latest-writing module, and static blog routes.

Set `draft: false` when the post is ready to publish.

Tags are plain text strings. Tag pages are generated automatically at `/blog/tags/` and
`/blog/tags/my-tag/`.

Preview locally with `npm.cmd run dev`, then make sure the static build passes with
`npm.cmd run build`.

## Portrait

The homepage uses `src/assets/portrait.webp`, an unchanged copy of the supplied
headshot. It is imported as a URL and served without image processing. The crop,
grayscale/contrast filter, duotone blend layers, print texture, and edge fades are
defined in `Portrait.astro` using CSS. An inline SVG filter reduces the tonal range
in the browser. Adjust `--portrait-paper` and `--portrait-ink` there for each theme.
The portrait aligns with the identity block on desktop and sits before the
introduction on mobile. The original ASCII art and component remain in the repository.

## Reading

The navigation says Reading; its existing URL remains `/bookshelf/`.
Add or edit personal books only in `src/data/reading.ts`. Each entry requires
`title`, `author`, and `status` (`current` or `finished`). `series`, `seriesNumber`,
and publication `year` are optional. A short editing guide and a commented example
are at the top of the data source. Only list books actually being read or finished.

The page groups books under Currently Reading and Recently Finished, preserving
their order in the data file and hiding empty groups. All book markup and
card-specific styles live in `src/components/BookCard.astro`; no page markup needs
to change when adding a book. Paper notes remain separate.

Paper notes live in `src/data/paper-notes.json`. Its `title` sets the section name.
The archive starts empty. Each entry requires:

- `slug`: unique lowercase words separated by hyphens, used for a permanent anchor
- `title`, `authors` (array), `citation`, and `link` (HTTP/HTTPS source URL)
- `date`: date of the note, in YYYY-MM-DD format
- `summary`: what the paper is about
- `interest`: why it interested you
- `idea`: the important idea explained in your own words
- `draft`: defaults to true; set false only when ready to publish

Published notes appear newest first at `/bookshelf/#paper-notes`, with individual
links at `/bookshelf/#paper-SLUG`. Validation runs during the build. Write short
original notes; do not reproduce papers or generate sample entries.

## Hidden components and writing

The local guestbook is unmounted and its demo entries have been removed. It must
have shared persistence before being restored publicly. The Now and newsletter
components have been removed. The coin toss is at the bottom of the homepage,
inside a collapsed experiment panel.

Both starter articles are marked as drafts and excluded from all public routes,
lists, and tags. Publish only real writing. Navigation uses Writing while retaining
the existing `/blog/` URLs.

## Projects

Project entries live in `src/data/projects.json`.

Add or edit items in the `projects` array. Each item can use:

```json
{
	"title": "Project title",
	"slug": "project-url-anchor",
	"status": "in progress",
	"type": "computational physics",
	"summary": "Short project summary.",
	"details": ["Optional extra detail line."],
	"tags": ["simulation", "photonics"],
	"year": 2026,
	"flagship": false,
	"featured": true,
	"links": [{ "label": "demo", "href": "https://example.com" }]
}
```

Set `featured: true` to put a project first on the Projects page and include it in the homepage project cards.

## Commands

Use `npm.cmd` on this Windows setup to avoid the PowerShell script shim issue.

### Common Commands

| Command | Action |
| :-- | :-- |
| `npm.cmd run dev` | Start the local dev server |
| `npm.cmd run build` | Build the static site |
| `npm.cmd run preview` | Preview the production build |
| `git status` | Check changed files |
| `git add .` | Stage current changes |
| `git commit -m "message"` | Commit staged changes |
| `git push` | Push the current branch |
