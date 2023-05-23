import React from 'react';
import { ReactComponent as Test } from '../../Assets/Icons/cinema-clapper-svgrepo-com.svg';
import loadingGif from '../../Assets/Icons/Opener Loading.gif';

const Loading = () => {
	return (
		<div className="loadingComponent">
			<img src={loadingGif} alt="a" />
		</div>
	);
};

export default Loading;
