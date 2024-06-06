/**
 * Interface for the posts file
 */
export interface PostsFile {
	[key: string]: Post[];
}

export interface Post {
	/**
	 * Possible URL slug for the post
	 */
	slug: string;

	/**
	 * Already localized title of the post
	 */
	title: string;

	/**
	 * Optional date the post was published
	 */
	date?: string;

	/**
	 * Markdown content of the post
	 */
	content: string;

	/**
	 * Optional list of tags for the post
	 */
	tags?: string[];
}
