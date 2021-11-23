import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent } from '../utils';

const store = atom({
	name: 'Бот не работает',
	description: '',
});

receiveEvent<{ name: string; description: string }>('newState', (data) => {
	store.set(data);
});

export const useStatus = () => useStore(store);
