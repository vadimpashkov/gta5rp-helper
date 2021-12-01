import { useEffect } from 'react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';
import { TotalFish, initTotalFish, sortFish, groupFish } from '../../core';

const store = atom<TotalFish<number>>(initTotalFish());

receiveEvent<TotalFish<number>>('setTotalFish', (data) => {
	store.set(data);
});

export const useTotalFish = () => {
	useEffect(() => {
		sendEvent('giveMeTotalFish');
	}, []);

	const fish = useStore(store);
	const sorted = Object.entries(fish)
		.sort(([, a], [, b]) => b - a)
		.reduce((acum, [key, value]) => ({ ...acum, [key]: value }), {});

	return sorted as TotalFish<number>;
};
