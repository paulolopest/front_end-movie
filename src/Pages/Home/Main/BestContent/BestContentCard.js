import React from 'react';
import { BASE_IMAGE_URL } from '../../../../RequestManager/ConfigRequests';

const BestContentCard = ({ movie, setModal }) => {
	const handleClick = () => setModal(movie);
	return (
		<div
			onClick={handleClick}
			className="bc-card"
			style={{
				backgroundImage: `url(${BASE_IMAGE_URL}/${movie.poster_path})`,
			}}
		></div>
	);
};

export default BestContentCard;
