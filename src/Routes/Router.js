import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path="/*" element={<Home />} default />
			<Route path="login/*" element={<Login />} />
		</Routes>
	);
};

export default Router;
