import { Settings } from '../../core';
import { createAxios } from '../../utils';
import { IpcEvent } from '../types';

export const newSettingsEvent: IpcEvent<Settings> = {
	name: 'newSettings',
	handle: async (newSettings) => {
		const axios = createAxios();

		const preparedSettings = {
			...newSettings,
			macroses: JSON.stringify(newSettings.macroses),
		};

		console.log(preparedSettings);

		await axios.post('user/settings', preparedSettings);
	},
};
