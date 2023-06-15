import './Style/Reset.scss';
import './Style/Style.scss';
import React from 'react';
import Router from './Routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App animatedGradient">
				<Header />
				<Router />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
