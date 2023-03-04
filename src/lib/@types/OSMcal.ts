export interface Event {
	name: string;
	url: string;
	date: {
		start: string;
		end: string;
		human: string;
		human_short: string;
		whole_day: boolean;
	};
	location: {
		short: string;
		detailed: string;
		coords: number[];
		venue: string;
	};
	cancelled: boolean;
}
