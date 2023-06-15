import React from 'react';
import { BASE_IMAGE_URL } from '../../../RequestManager/ConfigRequests';

const RightSectionCard = ({ item, setModal }) => {
	const handleClick = () => {
		setModal(item);
	};

	return (
		<div onClick={handleClick} className="rsu-card" key={item.id}>
			<img
				src={`${BASE_IMAGE_URL}/${item.backdrop_path}`}
				alt="Card backdrop"
			/>
			<h3>{item.title}</h3>
			<span>{item.release_date}</span>
			<p>{item.overview}</p>
		</div>
	);
};

export default RightSectionCard;
