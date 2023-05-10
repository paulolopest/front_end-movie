import React from 'react';
import useFetch from './../../../Hooks/useFetch';
import TrendingCard from './TrendingCard/TrendingCard';

const MainHome = () => {
	const { data, loading, error, request } = useFetch();
	return (
		<section className="mainHome-container">
			<TrendingCard />
			<div className="list-films">a</div>
			<div className="list-films">a</div>
			<div className="big-card-films">a</div>
		</section>
	);
};

export default MainHome;
