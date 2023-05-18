import { ReactComponent as PreviousIcon } from '../../../../Assets/Icons/previous-svgrepo-com.svg';
import { ReactComponent as NextIcon } from '../../../../Assets/Icons/next-svgrepo-com.svg';
import useAxios from '../../../../Hooks/useAxios';
import React, { useState } from 'react';
import {
	POSTER_URL,
	GET_MOVIE_GENRES,
} from './../../../../Request/ConfigRequests';
import {
	BASE_IMAGE_URL,
	GET_SERIES_GENRES,
	GET_TRENDING_CONTENT,
} from '../../../../Request/ConfigRequests';

const TrendingCard = () => {
	const [currentCard, setCurrentCard] = useState(1);
	const [animeDirection, setAnimeDirection] = useState('animeLeft');
	const timeoutRef = React.useRef();

	const getTrending = useAxios();
	const getSeriesGenres = useAxios();
	const getMovieGenres = useAxios();

	const topRated = getTrending.data;

	const seriesGenres = getSeriesGenres?.data?.genres;
	const movieGenres = getMovieGenres?.data?.genres;
	const currentCardGenresIds =
		getTrending.data?.results[currentCard].genre_ids;

	let allGenresConcatenated = seriesGenres?.concat(movieGenres);
	allGenresConcatenated?.shift();

	const filteredGenres = allGenresConcatenated?.filter((item, index) => {
		return !allGenresConcatenated
			.slice(0, index)
			.some((obj) => obj.id === item.id && obj.name === item.name);
	});

	React.useEffect(() => {
		const getTopRated = () => {
			const { url, options } = GET_TRENDING_CONTENT();
			getTrending.axiosGet(url, options);
		};
		getTopRated();

		const getAllGenres = () => {
			const { url, options } = GET_SERIES_GENRES();
			getSeriesGenres.axiosGet(url, options);

			const { url1, options1 } = GET_MOVIE_GENRES();
			getMovieGenres.axiosGet(url1, options1);
		};
		getAllGenres();

		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			if (currentCard < 19) {
				setAnimeDirection('animeLeft');
				setCurrentCard(currentCard + 1);
			}
			if (currentCard === 18) {
				setCurrentCard(1);
			}
		}, 155000);
	}, [currentCard]);

	const currentCardGenres = [];

	const getCurrentCardGenres = () => {
		for (let i = 0; i < currentCardGenresIds?.length; i++) {
			for (let j = 0; j < filteredGenres?.length; j++) {
				if (currentCardGenresIds[i] === filteredGenres[j].id) {
					currentCardGenres.push(filteredGenres[j].name);
				}
			}
		}
	};

	getCurrentCardGenres();

	console.log(currentCardGenres);

	const card = {
		backdropImage: {
			backgroundImage: `url(${BASE_IMAGE_URL}/${topRated?.results[currentCard]?.backdrop_path})`,
		},
		name: topRated?.results[currentCard].title,
		poster: `${POSTER_URL}/${topRated?.results[currentCard].poster_path}`,
		description: topRated?.results[currentCard].overview,
		year: topRated?.results[currentCard].release_date,
	};

	const limitDescription = (text) => {
		if (text.length > 200) {
			return text.substring(0, 200) + '...';
		} else {
			return text;
		}
	};

	const nextCard = () => {
		if (currentCard <= topRated?.results.length - 2) {
			setAnimeDirection('animeLeft');
			setCurrentCard(currentCard + 1);
			clearTimeout(5000);
		}
	};
	const previousCard = () => {
		if (currentCard >= 1) {
			setAnimeDirection('animeRight');
			setCurrentCard(currentCard - 1);
			clearTimeout(5000);
		}
	};

	if (getTrending.loading || getSeriesGenres.loading) return <p>Loading...</p>;
	if (topRated)
		return (
			<div className="trending-content">
				<h1 className="tc-title">Trending 🔥</h1>

				<div className={`tc-mainContent ${animeDirection}`}>
					<div className="backCardImage" style={card.backdropImage}>
						<div className={'tc-mc-mainCard '}>
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
								<div className="tc-mc-mc-d-genres">
									{currentCardGenres.map((movie, index) => (
										<p key={index}>{movie}</p>
									))}
								</div>
								<div className="tc-mc-mc-d-buttons">
									<button>Trailer</button>
									<button>Details</button>
								</div>
							</div>
							{currentCard >= 2 ? (
								<span
									onClick={previousCard}
									className="selectCardButton"
								>
									<PreviousIcon />
								</span>
							) : null}
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
							{currentCard < 18 ? (
								<span onClick={nextCard} className="selectCardButton2">
									<NextIcon />
								</span>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
};
export default TrendingCard;
