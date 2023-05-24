import React from 'react';
import {
	BASE_IMAGE_URL,
	GET_BEST_CONTENT,
} from '../../../../RequestManager/ConfigRequests';
import useAxios from './../../../../Hooks/useAxios';

const BestContent = () => {
	const BCAxios = useAxios();
	const BCList = BCAxios?.data?.results.slice(1, 6);

	React.useEffect(() => {
		const { url, options } = GET_BEST_CONTENT();

		BCAxios.axiosGet(url, options);
	}, []);

	const bestContentMap = BCList?.map((movie, index) => (
		<div
			key={index}
			className="bc-card"
			style={{
				backgroundImage: `url(${BASE_IMAGE_URL}/${movie.poster_path})`,
			}}
		></div>
	));

	if (BCList)
		return (
			<div className="bestContent">
				<h1 style={{ padding: '2rem 0 1rem 0', color: 'white' }}>
					Top Rated ⭐
				</h1>
				<div className="bc-container">{bestContentMap}</div>
			</div>
		);
};

export default BestContent;
