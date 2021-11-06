import { keyboard, Key } from '@nut-tree/nut-js';

import { StateSwitch } from '../../types';
import { waitLmdState } from '../waitLmd';

export const throwSwitch: StateSwitch = async () => {
	await keyboard.pressKey(Key.Backspace);
	await keyboard.pressKey(Key.Backspace);

	return waitLmdState;
};
