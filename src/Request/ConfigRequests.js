const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b8b7f6cb58c2cb6bbf682c8574ad3888';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const GET_TRENDING_MOVIES = () => {
	return {
		url: `${BASE_URL}/tv/top_rated?language=en-US&page=1`,
		options: {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGI3ZjZjYjU4YzJjYjZiYmY2ODJjODU3NGFkMzg4OCIsInN1YiI6IjY0NTE5ZTczMTA1NjExMDE1NjkzZTJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PxFlk1ox1JW4WF9Oe94Optutc7ck-WJhKlK6LklhGO4',
			},
		},
	};
};
export const GET_GENRES = () => {
	return {
		url: `${BASE_URL}/genre/tv/list?language=en`,
		options: {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGI3ZjZjYjU4YzJjYjZiYmY2ODJjODU3NGFkMzg4OCIsInN1YiI6IjY0NTE5ZTczMTA1NjExMDE1NjkzZTJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PxFlk1ox1JW4WF9Oe94Optutc7ck-WJhKlK6LklhGO4',
			},
		},
	};
};
