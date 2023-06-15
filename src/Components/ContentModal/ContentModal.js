import {
	BASE_IMAGE_URL,
	GET_MOVIE_DETAILS,
	GET_SERIES_DETAILS,
} from '../../RequestManager/ConfigRequests';
import React from 'react';
import useAxios from '../../Hooks/useAxios';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';

const ContentModal = ({ movieId, setModal, contentType }) => {
	const [type, setContentType] = React.useState(GET_MOVIE_DETAILS(movieId));
	const { data, loading, error, axiosGet } = useAxios();

	React.useEffect(() => {
		const { url, options } = type;

		axiosGet(url, options);
	}, [movieId, axiosGet]);

	const genres = ['Animation', 'War', 'Comedy'];

	console.log(data);

	const numberToTime = (number) => {
		const hours = Math.floor(number / 60);
		const minutes = number % 60;

		return `0${hours}:${minutes}`;
	};

	const handleClickOutside = (event) => {
		if (event.target === event.currentTarget) {
			setModal(null);
		}
	};

	return (
		<div onClick={handleClickOutside} className="modal">
			{loading && <Loading />}
			{error && <Error />}
			{data && (
				<div
					style={{
						backgroundImage: `url(${BASE_IMAGE_URL}/${data.backdrop_path})`,
					}}
					className="modalBackground"
				>
					<div className="modalContainer">
						<div>
							<img
								src={`${BASE_IMAGE_URL}/${data.poster_path}`}
								alt={`${BASE_IMAGE_URL}/${data.title}' poster`}
							/>
							<div className="md-extraInfo">
								<p>Release date: {data.release_date}</p>
								<p>Duration: {numberToTime(data.runtime)}</p>
								<p>
									Rate: <span>{data.vote_average.toFixed(1)}</span>
								</p>
							</div>
							<div className="officialSiteButton">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={data.homepage}
								>
									Official Site
								</a>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={`https://www.youtube.com/results?search_query=${data.title} trailer`}
								>
									Trailer
								</a>
							</div>
						</div>
						<div className="modal-description">
							<h1>{data.title}</h1>

							<div className="md-genres">
								{genres.map((movie, index) => (
									<p key={index}>{movie}</p>
								))}
							</div>
							<p className="md-description">{data.overview}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContentModal;
