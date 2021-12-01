import { Key, keyboard } from '@nut-tree/nut-js';

export const typeKeyWithDelay = (key: Key, delay: number) =>
	new Promise<void>((resolve) => {
		setTimeout(async () => {
			await keyboard.type(key);
			resolve();
		}, delay);
	});
