import { keyboard, Key } from '@nut-tree/nut-js';

import { Config, StateSwitch } from '../types';
import { waitLmdState } from '../waitLmd';

export const throwSwitch: StateSwitch = async (config: Config) => {
	keyboard.pressKey(Key.Backspace);

	return Promise.resolve(waitLmdState);
};
