export interface ActivityStreamCollectionPage {
	'@context': unknown;
	items: ActivityStreamObject[];
	partOf: string;
	totalItems: number;
	type: 'CollectionPage';
}

export interface ActivityStreamObject {
	actor: string;
	cc: string[];
	id: string;
	object: {
		attributedTo: string[];
		cc: string[];
		content: string;
		id: string;
		license: string;
		name: string;
		published: string;
		source: {
			content: string;
			mediaType: string;
		};
		summary: string;
		tag: string[];
		to: string[];
		type: string;
		url: string;
	};
	to: string[];
	type: string;
}
