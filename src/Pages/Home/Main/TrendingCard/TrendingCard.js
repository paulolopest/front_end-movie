import React from 'react';

const TrendingCard = () => {
	return (
		<div className="trending-content">
			<h1>Trending Movie</h1>
			<div className="containerC">
				<div className="trending-card">
					<p className="card-poster"></p>
					<div className="card-description">
						<h2>Movie name</h2>
						<p>Year / Classification / Time</p>
						<p>Description</p>
						<p>Tags</p>

						<div>
							<button>Trailer</button>
							<button>Watch</button>
						</div>
					</div>
				</div>
				<div className="trending-miniCard">a</div>
			</div>
		</div>
	);
};

export default TrendingCard;
