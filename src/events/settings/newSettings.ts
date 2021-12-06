import { Settings } from '../../core';
import { createAxios } from '../../utils';
import { setSettings } from '../../store';
import { IpcEvent } from '../types';

export const newSettingsEvent: IpcEvent<Settings> = {
	name: 'newSettings',
	handle: async (newSettings) => {
		const axios = createAxios();

		await axios.post<Settings>('user/settings', newSettings);

		setSettings(newSettings);
	},
};
