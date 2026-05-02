# corbinriches.com

Static Astro personal website and digital portfolio.

## Blog Posts

Blog posts live in `src/content/blog/` as Markdown files.

To add a post:

1. Create a new `.md` file in `src/content/blog/`.
2. Add frontmatter:

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

Set `draft: true` to hide a post from the blog list and static routes.

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

| Command | Action |
| :-- | :-- |
| `npm.cmd run dev` | Start the local dev server |
| `npm.cmd run build` | Build the static site |
| `npm.cmd run preview` | Preview the production build |
