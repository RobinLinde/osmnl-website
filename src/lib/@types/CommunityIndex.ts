export interface Resource {
	/**
	 * Unique identifier for the resource.
	 */
	id: string;

	/**
	 * Type of community resource.
	 */
	type:
		| 'aparat'
		| 'discord'
		| 'discourse'
		| 'facebook'
		| 'forum'
		| 'github'
		| 'gitlab'
		| 'group'
		| 'irc'
		| 'linkedin'
		| 'mailinglist'
		| 'mastodon'
		| 'matrix'
		| 'meetup'
		| 'newsletter'
		| 'osm'
		| 'osm-lc'
		| 'reddit'
		| 'signal'
		| 'slack'
		| 'telegram'
		| 'twitter'
		| 'url'
		| 'wiki'
		| 'xmpp'
		| 'youthmappers'
		| 'youtube'
		| 'zulip'
		| string;

	/**
	 * Resource account string, for some types
	 */
	account?: string;

	/**
	 * Locationset for the resource
	 */
	locationSet: LocationSet;

	/**
	 * Array of language codes for the resource
	 */
	languageCodes?: string[];

	/**
	 * Source text strings for the resource
	 */
	strings: {
		community?: string;
		communityId?: string;
		name?: string;
		description?: string;
		extendedDescription?: string;
		signupUrl?: string;
		url?: string;
	};

	/**
	 * Contacts for the resource
	 */
	contacts?: unknown;
	order?: number;
	events?: unknown;
}

interface LocationSet {
	/**
	 * Locations included
	 */
	include: (string | number[])[];

	/**
	 * Locations excluded
	 */
	exclude?: (string | number[])[];
}

export interface DefaultItem {
	/**
	 * Standard name to use, replacing {community} with the community name
	 */
	name: string;

	/**
	 * Standard description to use, replacing {community} with the community name, and {account} with the account name
	 */
	description?: string;

	/**
	 * URL to use, replacing {community} with the community name, and {account} with the account name
	 */
	url?: string;
}
