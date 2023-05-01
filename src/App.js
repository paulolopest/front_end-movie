import './Style/Reset.scss';
import './Style/Style.scss';
import React from 'react';
import Router from './Routes/Router';
import UserStorage from './Context/UserContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<UserStorage>
				<Router />
			</UserStorage>
		</BrowserRouter>
	);
};

export default App;
