import { useNavigate } from 'react-router-dom';
import React from 'react';

export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [login, setLogin] = React.useState(null);

	const navigate = useNavigate();

	const getUser = async () => {
		const response = JSON.parse(window.localStorage.getItem('user-movies'));
		setData(response);
	};

	const userLogin = async (username, password) => {
		try {
			setError(null);
			setLoading(true);

			const LSName = window.localStorage.getItem('name-movies');
			const LSPassword = window.localStorage.getItem('password-movies');

			if (username !== LSName || password !== LSPassword)
				throw new Error('Invalid Credentials');

			await getUser();

			navigate('/');
		} catch (err) {
			setError(err.message);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	const userLogout = React.useCallback(() => {
		window.localStorage.removeItem('user-movies');
		window.localStorage.removeItem('name-movies');
		window.localStorage.removeItem('password-movies');

		navigate('/login');
	}, [navigate]);

	const userSignup = async (username, email, password) => {
		try {
			setError(null);
			setLoading(true);

			window.localStorage.setItem('name-movies', username);
			window.localStorage.setItem('email-movies', email);
			window.localStorage.setItem('password-movies', password);

			userLogin(username, password);

			navigate('/');
		} catch (err) {
			setError(err.message);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		const autoLogin = async () => {
			const user = window.localStorage.getItem('user-movies');

			if (user) {
				try {
					setError(null);
					setLoading(true);
					setLogin(true);

					await getUser();
				} catch (error) {
					userLogout();
				} finally {
					setLoading(false);
				}
			}
		};

		autoLogin();
	}, [userLogout]);

	return (
		<UserContext.Provider
			value={{
				userLogin,
				userLogout,
				userSignup,
				loading,
				error,
				login,
				data,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserStorage;
