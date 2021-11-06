import { keyboard, Key } from '@nut-tree/nut-js';

import { StateSwitch } from '../../types';
import { waitLmdState } from '../waitLmd';

export const throwSwitch: StateSwitch = () =>
	new Promise(async (resolve) => {
		await keyboard.type(Key.Backspace);

		resolve(waitLmdState);
	});
