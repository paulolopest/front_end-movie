import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import {
	BASE_IMAGE_URL,
	GET_UPCOMING_CONTENT,
} from '../../../Request/ConfigRequests';

const RightSectionUpcoming = () => {
	const [currentCard, setCurrentCard] = React.useState(0);

	const RSUAxios = useAxios();
	const RSUList = RSUAxios?.data?.results.slice(0, 2);

	React.useEffect(() => {
		const { url, options } = GET_UPCOMING_CONTENT();
		RSUAxios.axiosGet(url, options);
	}, []);

	const limitDescription = (text) => {
		if (text.length > 200) {
			return text.substring(0, 200) + '...';
		} else {
			return text;
		}
	};

	const RSUMap = RSUList?.map((item) => (
		<div className="rsu-card" key={item.id}>
			<img
				src={`${BASE_IMAGE_URL}/${item.backdrop_path}`}
				alt="Card backdrop"
			/>
			<h2>{item.title}</h2>
			<p>{limitDescription(item.overview)}</p>
		</div>
	));

	console.log(RSUList);

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
