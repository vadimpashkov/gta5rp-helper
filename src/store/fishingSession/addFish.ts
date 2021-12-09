import { createAxios } from '../../utils';

export const addFish = async (name: string) => {
	const axios = createAxios();

	await axios.post('fish/add', { name });
};
