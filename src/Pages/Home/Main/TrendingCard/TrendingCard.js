import React, { useState } from 'react';
import {
	BASE_IMAGE_URL,
	GET_GENRES,
	GET_TRENDING_MOVIES,
} from '../../../../Request/ConfigRequests';
import useAxios from '../../../../Hooks/useAxios';
import { POSTER_URL } from './../../../../Request/ConfigRequests';
import { ReactComponent as NextIcon } from '../../../../Assets/Icons/next-svgrepo-com.svg';
import { ReactComponent as PreviousIcon } from '../../../../Assets/Icons/previous-svgrepo-com.svg';

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
		genres: filmGenres.map((movie, index) => <p key={index}>{movie}</p>),
	};

	const limitDescription = (text) => {
		if (text.length > 200) {
			return text.substring(0, 200) + '...';
		} else {
			return text;
		}
	};

	const nextCard = () => {
		if (currentCard <= 19) {
			setCurrentCard(currentCard + 1);
		} else return null;
	};
	const previousCard = () => {
		if (currentCard >= 1) {
			setCurrentCard(currentCard - 1);
		} else return null;
	};

	if (getTrending.loading || getGenres.loading) return <p>Loading...</p>;
	if (topRated)
		return (
			<div className="trending-content">
				<h1>Trending </h1>

				<div className="tc-mainContent">
					<div className="backCardImage" style={cardImage}>
						<div className="tc-mc-mainCard">
							<img
								className="tc-poster"
								src={card.poster}
								alt={`${card.name}' poster`}
							></img>

							<div className="tc-mc-mc-description">
								<h1>{card.name}</h1>
								<p>{card.year.slice(0, 4)}</p>
								<p className="tc-mc-mc-d-description">
									{limitDescription(card.description)}
								</p>
								<div className="tc-mc-mc-d-genres">{card.genres}</div>
								<div>
									<button>Trailer</button>
									<button>Details</button>
								</div>
							</div>
							<span onClick={previousCard} className="test">
								{currentCard > 1 && <PreviousIcon />}
							</span>
						</div>
					</div>

					<div
						className="backCardImage2"
						style={{
							backgroundImage: `url(${BASE_IMAGE_URL}/${
								topRated?.results[currentCard + 1]?.backdrop_path
							})`,
						}}
					>
						<div className="tc-mc-miniCard">
							<img
								className="tc-poster"
								src={`${POSTER_URL}/${
									topRated?.results[currentCard + 1].poster_path
								}`}
								alt="poster"
							></img>
							<span onClick={nextCard} className="test2">
								<NextIcon />
							</span>
						</div>
					</div>
				</div>
			</div>
		);
};
export default TrendingCard;
