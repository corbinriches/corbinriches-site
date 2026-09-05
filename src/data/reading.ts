// To add a book, duplicate an entry below and edit title, author, and status
// ("current" or "finished"). Add series and seriesNumber only when relevant.
// year is optional; it records the publication year.

export interface Book {
	title: string;
	author: string;
	status: 'current' | 'finished';
	series?: string;
	seriesNumber?: number;
	year?: number;
}

export const books: Book[] = [
	{
		title: 'Iron Gold',
		author: 'Pierce Brown',
		status: 'current',
		series: 'Red Rising',
		seriesNumber: 4,
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		status: 'current',
	},
	{
		title: 'Morning Star',
		author: 'Pierce Brown',
		status: 'finished',
		series: 'Red Rising',
		seriesNumber: 3,
	},
	{
		title: 'Golden Son',
		author: 'Pierce Brown',
		status: 'finished',
		series: 'Red Rising',
		seriesNumber: 2,
	},
	{
		title: 'Red Rising',
		author: 'Pierce Brown',
		status: 'finished',
		series: 'Red Rising',
		seriesNumber: 1,
	},
];
