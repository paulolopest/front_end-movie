import React from 'react';
import useAxios from './../../../../Hooks/useAxios';
import { ReactComponent as PreviousIcon } from '../../../../Assets/Icons/previous-svgrepo-com.svg';
import { ReactComponent as NextIcon } from '../../../../Assets/Icons/next-svgrepo-com.svg';
import Image from './../../../../Helper/Image/Image';
import {
	BASE_IMAGE_URL,
	GET_CINEMA_MOVIES,
} from '../../../../Request/ConfigRequests';

const ListContent = () => {
	const [currentCard, setCurrentCard] = React.useState(0);

	const contentList = useAxios();
	const cinemaList = contentList?.data?.results?.slice(
		currentCard,
		currentCard + 5
	);

	React.useEffect(() => {
		const { url, options } = GET_CINEMA_MOVIES();

		contentList.axiosGet(url, options);
	}, []);

	const miniCard = cinemaList?.map((movie, index) => (
		<div key={movie.id} className="lc-card">
			<Image
				src={`${BASE_IMAGE_URL}/${movie?.poster_path}`}
				alt="Backdrop"
			/>
		</div>
	));

	const onClickNext = () => {
		if (currentCard <= 10) setCurrentCard(currentCard + 5);
	};
	const onClickBack = () => {
		if (currentCard !== 0) setCurrentCard(currentCard - 5);
	};

	return (
		<div className="mh-listContent">
			<h1 style={{ padding: '1rem 0', color: 'white' }}>Now live 🍿</h1>
			<div className="lc-cardList-container animeLeft">
				{currentCard === 0 ? null : (
					<span className="lc-clc-previousButton" onClick={onClickBack}>
						<PreviousIcon />
					</span>
				)}

				{miniCard}

				{currentCard === 15 ? null : (
					<span className="lc-clc-nextButton" onClick={onClickNext}>
						<NextIcon />
					</span>
				)}
			</div>
		</div>
	);
};

export default ListContent;
