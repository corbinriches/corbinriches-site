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

## Blog Posts

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

## Now Panel

Update the homepage Now panel by editing `src/data/now.json`.

## Bookshelf

Bookshelf entries live in `src/data/bookshelf.json`.

Add or edit items in the `entries` array. Each item can use:

```json
{
	"title": "Book or paper title",
	"creator": "Author, host, or source",
	"type": "book, textbook, audiobook, podcast, paper, notes",
	"status": "current, reference, queue, or archive",
	"notes": "Short shelf note.",
	"tags": ["photonics", "simulation"],
	"year": 2026,
	"link": "https://optional-link.example"
}
```

The `status` field controls the page grouping.

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
