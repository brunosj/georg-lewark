export interface Project {
	name: string;
	year: string;
	url: string;
	description: string;
	type: 'documentary' | 'fiction';
	slug: string;
}

export interface Blog {
	name: string;
	date: string;
	slug: string;
	description: string;
	technologies: string[];
}

export interface Heading {
	level: number;
	text: string;
	id: string;
}
