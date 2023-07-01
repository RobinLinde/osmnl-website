import type { Post, PostsFile } from '$lib/@types/Posts';
import postData from '../posts.json';

const posts = postData as PostsFile;

export function load({ params }) {
	const languages: string[] = [];
	const filteredPosts: (Post & { language: string })[] = [];
	for (const language in posts) {
		const post = posts[language].find((post) => post.slug === params.slug);
		if (post) {
			filteredPosts.push({ ...post, language });
			languages.push(language);
		}
	}
	if (filteredPosts.length > 0) {
		return {
			props: {
				posts: filteredPosts,
				languages
			}
		};
	}
	return {
		status: 404,
		error: new Error('Not found')
	};
}
