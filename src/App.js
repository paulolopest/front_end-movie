import './Style/Reset.scss';
import './Style/Style.scss';
import React from 'react';
import Router from './Routes/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Router />
		</BrowserRouter>
	);
};

export default App;
