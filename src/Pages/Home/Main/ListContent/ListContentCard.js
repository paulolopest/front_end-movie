import React from 'react';
import Image from './../../../../Components/Image/Image';
import { BASE_IMAGE_URL } from '../../../../RequestManager/ConfigRequests';

const ListContentCard = ({ movie, setModal }) => {
	const handleClick = () => setModal(movie);
	return (
		<div className="lc-card" key={movie.id} onClick={handleClick}>
			<Image
				onClick={handleClick}
				src={`${BASE_IMAGE_URL}/${movie?.poster_path}`}
				alt="Backdrop"
			/>
		</div>
	);
};

export default ListContentCard;
