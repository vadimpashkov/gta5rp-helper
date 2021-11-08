import keycode from 'keycode';

import { KeyTap } from '@utils/keyTap';
import { waitLmdState } from '../waitLmd';

import { FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = () =>
	new Promise(async (resolve) => {
		KeyTap(keycode.codes.backspace);

		resolve(waitLmdState);
	});
