import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent, sendEvent } from '../utils';

const store = atom<number[][]>([]);

receiveEvent<number[][]>('setMacro', (data) => {
	store.set(data);
});

export const useMacros = () => {
	const macro = useStore(store);

	const writeMacros = (timeToWrite: number) => {
		sendEvent('writeMacro', timeToWrite);
	};

	const reset = () => {
		store.set([]);
	};

	return {
		data: macro,
		writeMacros,
		reset,
	};
};
