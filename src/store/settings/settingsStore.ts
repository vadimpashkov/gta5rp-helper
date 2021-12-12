import { Settings } from '../../core';
import { createAxios } from '../../utils';

export const getSettings = async () => {
	const axios = createAxios();

	const response = await axios.get<Settings>('user/settings');

	const settings = response.data;

	const settingsWithMacros = {
		...settings,
		macroses: JSON.parse(settings.macroses as unknown as string),
	};

	return settingsWithMacros;
};
