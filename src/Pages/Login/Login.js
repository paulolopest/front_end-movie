import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import LoginSignup from './LoginSignup/LoginSignup';

const Login = () => {
	return (
		<section className="login-container animatedGradient">
			<div className="login-form">
				<Routes>
					<Route path="/" element={<LoginPage />}></Route>
					<Route path="signup" element={<LoginSignup />}></Route>
				</Routes>
			</div>
		</section>
	);
};

export default Login;
