import { createCancelable, prepareKey } from '../../../utils';
import { getGtaProcess } from '../../../store';

import { waitLmdState } from '../waitLmd';
import { storeFishState } from '../storeFish';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { mainInventory, backpack, boat, lastFish, fishingRodKey } = config;

	const gtaProcess = getGtaProcess();

	// console.log(mainInventory.current);

	await gtaProcess.keyboard.sendKeyAsync(prepareKey(fishingRodKey));

	mainInventory.current -= 0.01;

	if (lastFish !== null && (backpack.available || boat.available)) {
		return storeFishState;
	}

	config.currentMacros = config.macroses[Math.floor(Math.random() * config.macroses.length)];

	return waitLmdState;
});
