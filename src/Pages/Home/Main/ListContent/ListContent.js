import React from 'react';
import useAxios from './../../../../Hooks/useAxios';
import { ReactComponent as PreviousIcon } from '../../../../Assets/Icons/previous-svgrepo-com.svg';
import { ReactComponent as NextIcon } from '../../../../Assets/Icons/next-svgrepo-com.svg';
import {
	BASE_IMAGE_URL,
	GET_CINEMA_MOVIES,
} from '../../../../Request/ConfigRequests';

const ListContent = () => {
	const [value1, setValue1] = React.useState(0);

	const contentList = useAxios();
	const cinemaList = contentList?.data?.results?.slice(value1, value1 + 5);

	React.useEffect(() => {
		const { url, options } = GET_CINEMA_MOVIES();

		contentList.axiosGet(url, options);
	}, []);

	const miniCard = cinemaList?.map((movie, index) => (
		<div
			key={index}
			className="lc-card"
			style={{
				backgroundImage: `url(${BASE_IMAGE_URL}/${movie?.poster_path})`,
			}}
		></div>
	));

	const onClickNext = () => {
		if (value1 <= 10) setValue1(value1 + 5);
	};
	const onClickBack = () => {
		if (value1 !== 0) setValue1(value1 - 5);
	};

	return (
		<div className="mh-listContent">
			<h1 style={{ padding: '1rem 0', color: 'white' }}>Now live 🍿</h1>
			<div className="lc-cardList-container animeLeft">
				<span className="lc-clc-previousButton" onClick={onClickBack}>
					<PreviousIcon />
				</span>
				{miniCard}
				<span className="lc-clc-nextButton" onClick={onClickNext}>
					<NextIcon />
				</span>
			</div>
		</div>
	);
};

export default ListContent;
