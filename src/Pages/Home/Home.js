import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../Assets/Icons/home.svg';
import { ReactComponent as DiscoverIcon } from '../../Assets/Icons/compass.svg';
import { ReactComponent as HelpIcon } from '../../Assets/Icons/help-circle.svg';
import MainHome from './Main/MainHome';
import ContentModal from './../../Components/ContentModal/ContentModal';
import RightSectionUpcoming from './RightSection/RightSection';

const Home = () => {
	const [modal, setModal] = React.useState(null);
	return (
		<div className="home-container">
			<section className="home-left-bar">
				<nav>
					<NavLink to="">
						<HomeIcon />
						Home
					</NavLink>
					<NavLink to="help">
						<HelpIcon />
						Help
					</NavLink>
				</nav>
			</section>
			<div className="home-main-content">
				{modal && <ContentModal setModal={setModal} movieId={modal?.id} />}
				<Routes>
					<Route path="/" element={<MainHome setModal={setModal} />} />
				</Routes>
			</div>
			<RightSectionUpcoming setModal={setModal} />
		</div>
	);
};

export default Home;
