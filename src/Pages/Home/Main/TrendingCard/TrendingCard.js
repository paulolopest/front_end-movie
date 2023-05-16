import React, { useState } from 'react';
import {
	BASE_IMAGE_URL,
	GET_GENRES,
	GET_TRENDING_MOVIES,
} from '../../../../Request/ConfigRequests';
import useAxios from '../../../../Hooks/useAxios';
import { POSTER_URL } from './../../../../Request/ConfigRequests';

const TrendingCard = () => {
	const [currentCard, setCurrentCard] = useState(1);

	const getTrending = useAxios();
	const getGenres = useAxios();

	const topRated = getTrending.data;

	const genres = getGenres?.data?.genres;
	const genresIds = getTrending.data?.results[currentCard].genre_ids;

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

	const cardImage = {
		backgroundImage: `url(${BASE_IMAGE_URL}/${topRated?.results[currentCard]?.backdrop_path})`,
	};

	const card = {
		name: topRated?.results[currentCard].name,
		poster: `${POSTER_URL}/${topRated?.results[currentCard].poster_path}`,
		description: topRated?.results[currentCard].overview,
		year: topRated?.results[currentCard].first_air_date,
	};

	const limitDescription = (text) => {
		if (text.length > 200) {
			return text.substring(0, 200) + '...';
		} else {
			return text;
		}
	};

	console.log(topRated);

	if (getTrending.loading || getGenres.loading) return <p>Loading...</p>;
	if (topRated)
		return (
			<div className="trending-content">
				<div className="tc-card-backImage" style={cardImage}>
					<div className="tc-card">
						<img
							className="tc-poster-image"
							alt={`${card.name}' poster`}
							src={card.poster}
						></img>
						<div className="tc-card-box-description">
							<h2 className="title">{card.name}</h2>
							<p>{card.year.slice(0, 4)}</p>
							<p className="tc-film-description">
								{limitDescription(card.description)}
							</p>
							<div className="tc-card-genres">
								{filmGenres.map((movie, index) => (
									<p key={index}>{movie}</p>
								))}
							</div>
							<div className="tc-card-buttons">
								<button>Trailer</button>
								<button>Details</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="tc-miniCard-backImage"
					style={{
						backgroundImage: `url(${BASE_IMAGE_URL}/${
							topRated?.results[currentCard + 1]?.backdrop_path
						})`,
					}}
				>
					<div className="tc-miniCard">
						<img
							className="tc-poster-image"
							alt={`${card.name}' poster`}
							src={`${POSTER_URL}/${
								topRated?.results[currentCard + 1].poster_path
							}`}
						></img>
					</div>
				</div>
			</div>
		);
};
export default TrendingCard;
