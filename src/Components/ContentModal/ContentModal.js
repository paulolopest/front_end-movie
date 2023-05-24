import React from 'react';
import {
	BASE_IMAGE_URL,
	GET_MOVIE_DETAILS,
	GET_SERIES_DETAILS,
} from '../../RequestManager/ConfigRequests';
import useAxios from '../../Hooks/useAxios';
import Loading from './../Loading/Loading';
import Error from './../Error/Error';
import Image from './../Image/Image';

const ContentModal = ({ movieId }) => {
	const { data, loading, error, axiosGet } = useAxios();

	React.useEffect(() => {
		const { url, options } = GET_MOVIE_DETAILS(movieId);

		axiosGet(url, options);
	}, [movieId, axiosGet]);

	console.log(data);

	return (
		<div className="modal">
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
							<img src={`${BASE_IMAGE_URL}/${data.poster_path}`} />
						</div>
						<div>
							<h1>{data.title}</h1>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContentModal;
