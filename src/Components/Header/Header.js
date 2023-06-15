import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ExitIcon } from '../../Assets/Icons/log-out.svg';

const Header = () => {
	return (
		<header>
			<div className="header-logo">
				<Link to="/">PrimeMax</Link>
			</div>
			<nav className="header-nav">
				<NavLink to="/">Movies</NavLink>
				<NavLink to="/">Series</NavLink>
				<NavLink to="/">TV Shows</NavLink>
			</nav>
			<div className="headerExit">
				{' '}
				<a href="https://www.github.com/paulolopest" to="login">
					<ExitIcon />
					Exit
				</a>
			</div>
		</header>
	);
};

export default Header;
