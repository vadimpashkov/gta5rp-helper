import { Settings } from '../../core';
import { createAxios } from '../../utils';

export const getSettings = async () => {
	const axios = createAxios();

	const response = await axios.get<Settings>('user/settings');

	return response.data;
};
