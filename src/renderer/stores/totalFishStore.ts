import { useEffect } from 'react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';

const store = atom<{ name: string; count: number }[]>([]);

receiveEvent<{ name: string; count: number }[]>('setTotalFish', (data) => {
	store.set(data);
});

export const useTotalFish = () => {
	useEffect(() => {
		sendEvent('giveMeTotalFish');
	}, []);

	const fish = useStore(store);
	const sorted = fish
		.sort((a, b) => b.count - a.count)
		.reduce((acum, value) => {
			acum.push(value);
			return acum;
		}, [] as any);

	return sorted as { name: string; count: number }[];
};
