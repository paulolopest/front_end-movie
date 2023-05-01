import axios from 'axios';
import React from 'react';

const useFetch = () => {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(null);
	const [error, setError] = React.useState(null);

	const request = React.useCallback(async (url) => {
		try {
			setLoading(true);

			const response = await axios.get(url);

			setData(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { data, loading, error, request };
};

export default useFetch;
