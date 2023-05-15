import React, { useState } from 'react';
import {
	BASE_IMAGE_URL,
	GET_GENRES,
	GET_TRENDING_MOVIES,
} from '../../../../Request/ConfigRequests';
import useAxios from '../../../../Hooks/useAxios';
import { POSTER_URL } from './../../../../Request/ConfigRequests';

const TrendingCard = () => {
	const [imageIndex, setImageIndex] = useState(1);

	const getTrending = useAxios();
	const getGenres = useAxios();

	const topRated = getTrending.data;

	const genres = getGenres?.data?.genres;
	const genresIds = getTrending.data?.results[imageIndex].genre_ids;

	const filmGenres = [];

	React.useEffect(() => {
		const getTopRated = () => {
			const { url, options } = GET_TRENDING_MOVIES();
			getTrending.axiosGet(url, options);
		};
		getTopRated();

		const getAllGenres = () => {
			const { url, options } = GET_GENRES();
			getGenres.axiosGet(url, options);
		};
		getAllGenres();
	}, []);

	const getFilmGenres = () => {
		for (let i = 0; i < genresIds?.length; i++) {
			for (let j = 0; j < genres?.length; j++) {
				if (genresIds[i] === genres[j].id) {
					filmGenres.push(genres[j].name);
				}
			}
		}
	};

	getFilmGenres();

	console.log(filmGenres);

	const cardImage = {
		backgroundImage: `url(${BASE_IMAGE_URL}/${topRated?.results[imageIndex]?.backdrop_path})`,
	};

	if (getTrending.loading) return <p>Loading...</p>;
	if (topRated)
		return (
			<div className="trending-content">
				<div className="tc-card-backImage" style={cardImage}>
					<div className="tc-card">
						<img
							className="tc-poster-image"
							alt={`${topRated.results[imageIndex]?.name}' poster`}
							src={`${POSTER_URL}/${topRated.results[imageIndex]?.poster_path}`}
						></img>
						<div>
							<h2>{topRated.results[imageIndex]?.name}</h2>
							<p>Ano / duration</p>
							<p className="tc-film-description">
								{topRated.results[imageIndex]?.overview}
							</p>
							<div className="tc-card-genres">
								{filmGenres.map((movie, index) => (
									<p key={index}>{movie}</p>
								))}
							</div>
							<div className="tc-card-buttons">
								<button>Trailer</button>
								<button>Watch Movie</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};
export default TrendingCard;
