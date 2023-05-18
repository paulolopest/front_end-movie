import React from 'react';
import TrendingCard from './TrendingCard/TrendingCard';
import ListContent from './ListContent/ListContent';

const MainHome = () => {
	return (
		<section className="mainHome-container">
			<TrendingCard />
			<ListContent />
		</section>
	);
};

export default MainHome;
