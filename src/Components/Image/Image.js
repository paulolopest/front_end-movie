import React from 'react';

const Image = ({ alt, ...props }) => {
	const [skeleton, setSkeleton] = React.useState(true);

	const handleLoad = ({ target }) => {
		setSkeleton(false);
		target.style.opacity = 1;
	};

	return (
		<div className="wrapper">
			<div className="skeleton"></div>
			<img
				alt={alt}
				{...props}
				onLoad={handleLoad}
				className="skeletonImg"
			></img>
		</div>
	);
};

export default Image;
