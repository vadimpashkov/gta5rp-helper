import { IpcEvent } from '../types';
import { Settings } from '../../core';
import { createAxios } from '../../utils';
import { setSettings } from '../../store';

export const getSettingsEvent: IpcEvent<void, Settings> = {
	name: 'getSettings',
	handle: async (_, emit) => {
		const axios = createAxios();

		const settingsResponse = await axios.get<Settings>('user/settings');

		emit('setSettings', settingsResponse.data);
		setSettings(settingsResponse.data);
	},
};
