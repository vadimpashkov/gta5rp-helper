import { keyboard, Key } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';

import { waitLmdState } from '../waitLmd';
import { storeFishState } from '../storeFish';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { backpack, boat, lastFish } = config;

	await keyboard.type(Key.Backspace);

	if (lastFish !== null && (backpack.available || boat.available)) {
		return storeFishState;
	}

	return waitLmdState;
});
