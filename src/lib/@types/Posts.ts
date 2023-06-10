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
	date?: string;
	content: string;
	tags?: string[];
}
