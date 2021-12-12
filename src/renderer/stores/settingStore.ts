import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';
import { Key, Settings } from '../../core';
import { useEffect } from 'react';

const store = atom<Settings>({
	lookingForBackpack: false,
	lookingForBoat: false,
	openInventoryKey: Key.KeyI,
	openTrunkKey: Key.KeyH,
	fishingRodKey: Key.Backspace,
	macroses: [],
});

receiveEvent<Settings>('setSettings', (data) => {
	store.set(data);
});

export const useSettings = () => {
	const settings = useStore(store);

	useEffect(() => {
		sendEvent('getSettings');
	}, []);

	const setSettings = (newSettings: Settings) => {
		store.set(newSettings);
		sendEvent('newSettings', newSettings);
	};

	return {
		data: settings,
		setSettings,
	};
};
