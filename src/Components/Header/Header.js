import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="header-logo">
				<Link to="/">PrimeMax</Link>
			</div>
			<nav className="header-nav">
				<NavLink to="/movies">Movies</NavLink>
				<NavLink to="/series">Series</NavLink>
				<NavLink to="/tv-shows">TV Shows</NavLink>
			</nav>
			<div></div>
		</header>
	);
};

export default Header;
