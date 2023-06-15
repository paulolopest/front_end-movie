import React from 'react';
import {
	BASE_IMAGE_URL,
	GET_BEST_CONTENT,
} from '../../../../RequestManager/ConfigRequests';
import useAxios from './../../../../Hooks/useAxios';
import BestContentCard from './BestContentCard';

const BestContent = ({ setModal }) => {
	const BCAxios = useAxios();
	const BCList = BCAxios?.data?.results.slice(1, 6);

	React.useEffect(() => {
		const { url, options } = GET_BEST_CONTENT();

		BCAxios.axiosGet(url, options);
	}, []);

	const bestContentMap = BCList?.map((movie) => (
		<BestContentCard key={movie.id} movie={movie} setModal={setModal} />
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
