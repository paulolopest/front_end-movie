import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../Assets/Icons/home.svg';
import { ReactComponent as DiscoverIcon } from '../../Assets/Icons/compass.svg';
import { ReactComponent as HelpIcon } from '../../Assets/Icons/help-circle.svg';
import { ReactComponent as ExitIcon } from '../../Assets/Icons/log-out.svg';
import MainHome from './Main/MainHome';
import HelpHome from './Help/HelpHome';
import DiscoveryHome from './Discovery/DiscoveryHome';

const Home = () => {
	return (
		<div className="home-container">
			<section className="home-left-bar">
				<nav>
					<NavLink to="">
						<HomeIcon />
						Home
					</NavLink>
					<NavLink to="discovery">
						<DiscoverIcon />
						Discovery
					</NavLink>
					<NavLink to="help">
						<HelpIcon />
						Help
					</NavLink>
					<NavLink to="login">
						<ExitIcon />
						Exit
					</NavLink>
				</nav>
			</section>
			<div className="home-main-content">
				<Routes>
					<Route path="/" element={<MainHome />} />
					<Route path="discovery" element={<DiscoveryHome />} />
					<Route path="help" element={<HelpHome />} />
				</Routes>
			</div>
			<section className="home-right-bar">abc</section>
		</div>
	);
};

export default Home;
