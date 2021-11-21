import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, getInitialFish } from '../utils';

export type TotalFish = {
	Sterlyad: number;
	Losos: number;
	Osetr: number;
	BlackAmour: number;
	Skat: number;
	Tunets: number;
	Malma: number;
	Fugu: number;
};

export type Fish = {
	name: string;
	storedName: string;
	minPrice: number;
	maxPrice: number;
	weight: number;
};

const store = atom<TotalFish>(getInitialFish());

receiveEvent<Fish>('newFish', (data) => {
	const storeValue = store.get() as { [key: string]: number };

	store.set({
		...storeValue,
		[data.storedName]: storeValue[data.storedName] + 1,
	} as TotalFish);
});

export const useFish = () => useStore(store);
