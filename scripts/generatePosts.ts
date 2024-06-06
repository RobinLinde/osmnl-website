import type { Post, PostsFile } from '../src/lib/@types/Posts';
import type { Project } from '../src/lib/@types/Projects';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import fm from 'front-matter';

enum PostType {
	Blog = 'blog',
	Project = 'project'
}

function generatePostObject(folder: string, type: PostType): PostsFile {
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
					// Create postObject based on the type we're generating
					let postObject: Post | Project;
					if (type === PostType.Blog) {
						const blogObject = {
							slug: posts[post].slice(0, -3),
							title: frontmatter.attributes['title'] || '',
							content: frontmatter.body,
							date: frontmatter.attributes['date'],
							tags: frontmatter.attributes['tags']
						};
						postObject = blogObject;
					} else {
						const projectObject: Project = {
							slug: posts[post].slice(0, -3),
							title: frontmatter.attributes['title'] || '',
							content: frontmatter.body,
							image: frontmatter.attributes['image']
						};
						postObject = projectObject;
					}

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

// Read command line arguments
const args = process.argv.slice(2);

// Check if we have the correct amount of arguments
if (args.length !== 3) {
	console.error('Usage: generatePosts <postFolder> <postType> <outputFile>');
	process.exit(1);
}

// Check if the post type is valid
if (!Object.values(PostType).includes(args[1] as PostType)) {
	console.error('Invalid post type');
	process.exit(1);
}

const postData = generatePostObject(args[0], args[1] as PostType);

writeFileSync(args[2], JSON.stringify(postData, null, 2));
