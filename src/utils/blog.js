import { getCollection } from 'astro:content';

export const getPostSlug = (post) => (post.slug || post.id).replace(/\.(md|mdx)$/, '');

export const getReadingTime = (body = '') => {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));

	return `${minutes} min read`;
};

export const formatPostDate = (date) =>
	date.toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	});

export const slugifyTag = (tag = '') =>
	tag
		.toString()
		.trim()
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '') || 'tag';

export const getPublishedPosts = async () => {
	const posts = await getCollection('blog', ({ data }) => !data.draft);

	return posts.sort(
		(firstPost, secondPost) => secondPost.data.date.valueOf() - firstPost.data.date.valueOf(),
	);
};

export const getTagSummaries = (posts = []) => {
	const tagsBySlug = new Map();

	posts.forEach((post) => {
		(post.data.tags ?? []).forEach((tag) => {
			const slug = slugifyTag(tag);
			const existingTag = tagsBySlug.get(slug);

			tagsBySlug.set(slug, {
				tag: existingTag?.tag ?? tag,
				slug,
				count: (existingTag?.count ?? 0) + 1,
			});
		});
	});

	return [...tagsBySlug.values()].sort((firstTag, secondTag) =>
		firstTag.tag.localeCompare(secondTag.tag),
	);
};
