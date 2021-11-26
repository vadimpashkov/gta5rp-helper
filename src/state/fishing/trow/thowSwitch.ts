import { keyboard, Key } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';

import { fishToBackpackState } from '../fishToBackpack';
import { waitLmdState } from '../waitLmd';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { backpack, lastFish } = config;

	await keyboard.type(Key.Backspace);

	if (backpack.available && lastFish !== null && backpack.size.current + lastFish.weight <= backpack.size.total) {
		return fishToBackpackState;
	}

	return waitLmdState;
});
