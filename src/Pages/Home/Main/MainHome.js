import React from 'react';
import TrendingCard from './TrendingCard/TrendingCard';
import ListContent from './ListContent/ListContent';
import BestContent from './BestContent/BestContent';

const MainHome = ({ setModal }) => {
	return (
		<section className="mainHome-container">
			<TrendingCard setModal={setModal} />
			<ListContent setModal={setModal} />
			<BestContent setModal={setModal} />
			<ListContent setModal={setModal} />
		</section>
	);
};

export default MainHome;
