import React from 'react';
import { ReactComponent as PreviousIcon } from '../../../Assets/Icons/chevron-up.svg';
import { ReactComponent as NextIcon } from '../../../Assets/Icons/chevron-down.svg';
import useAxios from '../../../Hooks/useAxios';
import {
	BASE_IMAGE_URL,
	GET_UPCOMING_CONTENT,
} from '../../../Request/ConfigRequests';

const RightSectionUpcoming = () => {
	const RSUAxios = useAxios();
	const RSUList = RSUAxios?.data?.results;

	React.useEffect(() => {
		const { url, options } = GET_UPCOMING_CONTENT();
		RSUAxios.axiosGet(url, options);
	}, []);

	const RSUMap = RSUList?.map((item) => (
		<div className="rsu-card" key={item.id}>
			<img
				src={`${BASE_IMAGE_URL}/${item.backdrop_path}`}
				alt="Card backdrop"
			/>
			<h3>{item.title}</h3>
			<span>{item.release_date}</span>
			<p>{item.overview}</p>
		</div>
	));

	return (
		<div className="rsu-container">
			<h2 style={{ padding: '1rem 0 0 0', color: 'white' }}>
				Upcoming Movies 🍿
			</h2>

			{RSUMap}
		</div>
	);
};

export default RightSectionUpcoming;
