import axios from 'axios';
import React from 'react';

const useAxios = () => {
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(null);
	const [error, setError] = React.useState(null);

	const axiosGet = React.useCallback(async (url, options) => {
		let response;
		try {
			setError(null);
			setLoading(true);

			response = await axios.get(url, options);

			if (response.ok === false) throw new Error(response.message);
		} catch (err) {
			response = null;
			setError(err.message);
		} finally {
			setData(response.data);
			setLoading(false);

			return { response };
		}
	}, []);

	return { data, loading, error, axiosGet };
};

export default useAxios;
