import keycode from 'keycode';

import { KeyTap } from '@utils/keyTap';

import { waitLmdState } from '@state/fishing/waitLmd';
import { FishingSwitch } from '@state/fishing/types';

export const throwSwitch: FishingSwitch = () =>
	new Promise(async (resolve) => {
		KeyTap(keycode.codes.backspace);

		resolve(waitLmdState);
	});
