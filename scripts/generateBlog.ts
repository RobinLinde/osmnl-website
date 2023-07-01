import type { Post, PostsFile } from '../src/lib/@types/Posts';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import fm from 'front-matter';

function generatePostObject(folder: string): PostsFile {
	const languages = readdirSync(folder);
	const postsObject: PostsFile = {};
	for (const language in languages) {
		// Create item in object
		postsObject[languages[language]] = [];

		// Read posts from folder
		const posts = readdirSync(`${folder}/${languages[language]}`);

		// Loop through posts
		for (const post in posts) {
			// Check if file is actually a Markdown file
			if (!posts[post].endsWith('.md')) continue;

			const postData = readFileSync(`${folder}/${languages[language]}/${posts[post]}`, 'utf-8');

			// Extract frontmatter
			const frontmatter = fm(postData);
			if (typeof frontmatter.attributes == 'object') {
				if (frontmatter.attributes !== null) {
					const postObject: Post = {
						slug: posts[post].slice(0, -3),
						title: frontmatter.attributes['title'] || '',
						content: frontmatter.body,
						date: frontmatter.attributes['date'],
						tags: frontmatter.attributes['tags']
					};
					postsObject[languages[language]].push(postObject);
				} else throw 'Empty attribute list';
			} else throw 'Attributes are not correctly set';
		}

		// Sort posts by date
		postsObject[languages[language]].sort((a, b) => {
			if (a.date && b.date) {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			} else {
				return 0;
			}
		});
	}
	return postsObject;
}

const postData = generatePostObject('blog');

writeFileSync('src/routes/blog/posts.json', JSON.stringify(postData, null, 2));
