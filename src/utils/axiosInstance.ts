import axios from 'axios';

import { getToken } from '../store';

export const createAxios = () => {
	const token = getToken();
	return axios.create({
		baseURL: 'https://yaniddze.com/api/',
		headers: {
			authorization: token.length > 0 ? 'Bearer ' + token : '',
		},
	});
};
