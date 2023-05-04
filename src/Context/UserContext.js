import React from 'react';
import { GET_REQUEST_TOKEN } from '../Request/UserRequest';

export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [login, setLogin] = React.useState(null);

	const userLogin = async (username, password) => {
		try {
			setError(null);
			setLoading(true);

			const { url, options } = GET_REQUEST_TOKEN();
			const response = await fetch(url, options);
			const resJson = await response.json();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<UserContext.Provider value={{ userLogin }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserStorage;
