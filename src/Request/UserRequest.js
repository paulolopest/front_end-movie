const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b8b7f6cb58c2cb6bbf682c8574ad3888';

export const GET_REQUEST_TOKEN = () => {
	return {
		url: `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`,
		options: {
			method: 'GET',
		},
	};
};

export const USER_LOGIN = (body) => {
	return {
		url: `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	};
};

export const GET_SESSION_ID = (body) => {
	return {
		url: `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`,
		headers: {
			method: 'POST',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(body),
	};
};
