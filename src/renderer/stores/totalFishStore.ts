import { useEffect } from 'react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';
import { TotalFish, initTotalFish } from '../../core';

const store = atom<TotalFish>(initTotalFish());

receiveEvent<TotalFish>('setTotalFish', (data) => {
	store.set(data);
});

export const useTotalFish = () => {
	useEffect(() => {
		sendEvent('giveMeTotalFish');
	}, []);
	return useStore(store);
};
