import keycode from 'keycode';

import { createCancelable } from '@utils/rejectablePromiseCreator';
import { KeyTap } from '@utils/keyTap';
import { waitLmdState } from '../waitLmd';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(
	() =>
		new Promise(async (resolve) => {
			KeyTap(keycode.codes.backspace);

			resolve(waitLmdState);
		}),
);
