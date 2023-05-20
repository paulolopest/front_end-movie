import React from 'react';
import TrendingCard from './TrendingCard/TrendingCard';
import ListContent from './ListContent/ListContent';
import BestContent from './BestContent/BestContent';

const MainHome = () => {
	return (
		<section className="mainHome-container">
			<TrendingCard />
			<ListContent />
			<BestContent />
		</section>
	);
};

export default MainHome;
