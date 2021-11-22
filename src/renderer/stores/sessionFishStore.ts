import { useEffect } from 'react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';
import { Fish, groupFish, addDefaultFish, sortFish } from '../../core';

const store = atom<Fish[]>([]);

receiveEvent<Fish>('newSessionFish', (data) => {
	store.set([...store.get(), data]);
});

receiveEvent<Fish[]>('setSessionFish', (data) => {
	store.set(data);
});

export const useSessionFish = () => {
	useEffect(() => {
		sendEvent('giveMeSessionFish');
	}, []);

	const fish = useStore(store);
	const groupedFish = groupFish(fish);
	const withDefault = addDefaultFish(groupedFish);
	const sorted = sortFish(withDefault);

	return sorted;
};
