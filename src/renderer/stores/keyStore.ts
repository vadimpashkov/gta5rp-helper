// import { atom } from 'nanostores';
// import { useStore } from '@nanostores/react';

// import { receiveEvent, sendEvent } from '../utils';
// import { Key } from '../../core';

// export type ElectronKey = {
// 	type: string;
// 	key: string;
// 	code: string;
// 	isAutoRepeat: boolean;
// 	isComposing: boolean;
// 	shift: boolean;
// 	control: boolean;
// 	alt: boolean;
// 	meta: boolean;
// };

// const store = atom<number | null>(null);

// receiveEvent<ElectronKey>('keyPressed', (data) => {
// 	store.set((Key as { [key: string]: number })[data.key.toUpperCase()]);
// });

// export const useKey = () => {
// 	const keys = useStore(store);

// 	const resetKey = () => {
// 		store.set(null);
// 	};

// 	const askKey = () => {
// 		sendEvent('waitForKey');
// 	};

// 	return {
// 		data: keys,
// 		resetKey,
// 		askKey,
// 	};
// };
