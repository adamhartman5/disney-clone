import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react';

type Props = {
	params: {
		id: string;
	};
	searchParams: {
		genre: string;
	};
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
	const movies = await getDiscoverMovies(id);

	return (
		<div>
			Welcome to the genre with ID: {id} and name: {genre}
		</div>
	);
}

export default GenrePage;
