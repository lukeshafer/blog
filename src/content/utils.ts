import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getBlogPosts() {
	return (await getCollection('blog', filterDraftsInProd)).map(
		addPrefixIfDraft
	);
}

const filterDraftsInProd = ({ data }: CollectionEntry<'blog'>) =>
	data.draft !== true || import.meta.env.DEV;

const addPrefixIfDraft = (post: CollectionEntry<'blog'>) =>
	post.data.draft
		? {
				...post,
				data: { ...post.data, title: `(DRAFT) ${post.data.title}` },
		  }
		: post;
