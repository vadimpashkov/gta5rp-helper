import { Key } from '../core';
import { getGtaProcess } from '../store';

import { prepareKey } from './prepareKey';

export const typeKeyWithDelay = (key: Key, delay: number) =>
	new Promise<void>((resolve) => {
		setTimeout(async () => {
			await getGtaProcess().keyboard.sendKeyAsync(prepareKey(key));
			resolve();
		}, delay);
	});
