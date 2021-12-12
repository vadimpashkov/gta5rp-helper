import { createCancelable, typeKeyWithDelay, getRandomNumberInclusive } from '../../../utils';

import { waitLmdState } from '../waitLmd';
import { storeFishState } from '../storeFish';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { mainInventory, backpack, boat, lastFish, fishingRodKey } = config;

	await typeKeyWithDelay(fishingRodKey, getRandomNumberInclusive(1000, 3500));

	mainInventory.current -= 0.01;

	if (lastFish !== null && (backpack.available || boat.available)) {
		return storeFishState;
	}

	config.currentMacros = config.macroses[Math.floor(Math.random() * config.macroses.length)];

	return waitLmdState;
});
