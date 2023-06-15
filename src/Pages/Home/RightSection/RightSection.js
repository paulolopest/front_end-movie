import React from 'react';
import { ReactComponent as PreviousIcon } from '../../../Assets/Icons/chevron-up.svg';
import { ReactComponent as NextIcon } from '../../../Assets/Icons/chevron-down.svg';
import useAxios from '../../../Hooks/useAxios';
import RightSectionCard from './RightSectionCard';
import {
	BASE_IMAGE_URL,
	GET_UPCOMING_CONTENT,
} from '../../../RequestManager/ConfigRequests';

const RightSectionUpcoming = ({ setModal }) => {
	const RSUAxios = useAxios();
	const RSUList = RSUAxios?.data?.results;

	React.useEffect(() => {
		const { url, options } = GET_UPCOMING_CONTENT();
		RSUAxios.axiosGet(url, options);
	}, []);

	const RSUMap = RSUList?.map((item) => (
		<RightSectionCard item={item} setModal={setModal} />
	));

	return (
		<div className="rsu-container">
			<h2 style={{ padding: '1rem 0 0 0', color: 'white' }}>
				Upcoming Movies 🍿
			</h2>

			{RSUMap}
		</div>
	);
};

export default RightSectionUpcoming;
