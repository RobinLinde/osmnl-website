import type { Post } from './Posts';

export interface ProjectsFile {
	[key: string]: Project[];
}

export interface Project extends Omit<Post, 'date'> {
	/**
	 * Image URL for the project
	 */
	image: string;
}
