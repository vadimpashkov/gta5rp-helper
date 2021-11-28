import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent, getInitialSettings } from '../utils';
import { Settings } from '../../core';

const store = atom<Settings>(getInitialSettings());

receiveEvent<Settings>('initSettings', (data) => {
	store.set(data);
});

export const useSettings = () => {
	const settings = useStore(store);

	const setSettings = (newSettings: Settings) => {
		store.set(newSettings);
		sendEvent('newSettings', newSettings);
	};

	return {
		data: settings,
		setSettings,
	};
};
