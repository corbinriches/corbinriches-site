import { z } from 'astro:content';
import paperNotes from '../data/paper-notes.json';

const paperNoteSchema = z.object({
	slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
	title: z.string().trim().min(1),
	authors: z.array(z.string().trim().min(1)).min(1),
	citation: z.string().trim().min(1),
	link: z.string().url().refine((url) => /^https?:\/\//.test(url), 'Use an HTTP(S) paper link.'),
	date: z.coerce.date(),
	summary: z.string().trim().min(1),
	interest: z.string().trim().min(1),
	idea: z.string().trim().min(1),
	draft: z.boolean().default(true),
});

export const paperArchive = z.object({
	title: z.string().trim().min(1),
	entries: z.array(paperNoteSchema),
}).parse(paperNotes);

const slugs = paperArchive.entries.map((entry) => entry.slug);
if (new Set(slugs).size !== slugs.length) {
	throw new Error('Paper note slugs must be unique.');
}

export const publishedPaperNotes = paperArchive.entries
	.filter((entry) => !entry.draft)
	.sort((a, b) => b.date.valueOf() - a.date.valueOf());
