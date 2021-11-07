import { keyboard, Key } from '@nut-tree/nut-js';

import { waitLmdState } from '../waitLmd';

import { FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = () =>
	new Promise(async (resolve) => {
		await keyboard.type(Key.Backspace);

		resolve(waitLmdState);
	});
