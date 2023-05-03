import { useNavigate } from 'react-router-dom';
import React from 'react';
import { GET_REQUEST_TOKEN, USER_LOGIN } from './../Request/Api';
import useFetch from '../Hooks/useFetch';

export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [login, setLogin] = React.useState(null);

	// const sessionId =

	const navigate = useNavigate();

	const getUser = async () => {};

	const userLogin = async (username, password) => {
		try {
			setError(null);
			setLoading(true);

			const { url, options } = GET_REQUEST_TOKEN();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const userLogout = React.useCallback(() => {}, []);

	const userSignup = async (username, email, password) => {};

	React.useEffect(() => {}, []);

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
