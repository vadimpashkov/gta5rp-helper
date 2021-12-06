import { Settings } from '../../core';
import { setSettings } from '../../store';
import { IpcEvent } from '../types';

export const newSettingsEvent: IpcEvent<Settings> = {
	name: 'botFishingStarted',
	handle: (data) => {
		setSettings(data);
	},
};
