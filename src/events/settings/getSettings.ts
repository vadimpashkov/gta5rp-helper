import { IpcEvent } from '../types';
import { Settings } from '../../core';
import { getSettings as getSettingsFromServer } from '../../store';

export const getSettingsEvent: IpcEvent<void, Settings> = {
	name: 'getSettings',
	handle: async (_, emit) => {
		const settings = await getSettingsFromServer();

		console.log(settings);

		emit('setSettings', settings);
	},
};
