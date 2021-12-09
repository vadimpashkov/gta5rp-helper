import { keyboard, mouse } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils';

import { fishToBackpackState } from '../fishToBackpack';
import { waitLmdState } from '../waitLmd';
import { fishToBoatState } from '../fishToBoat';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const storeFishSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { backpack, boat, lastFish, fishingRodKey } = config;
	const fish = lastFish!;

	await keyboard.type(fishingRodKey);

	if (boat.available && boat.size.current + fish.weight < boat.size.total) {
		return fishToBoatState;
	}

	if (backpack.available && backpack.size.current + fish.weight < backpack.size.total) {
		return fishToBackpackState;
	}

	config.mouseCoordinate = await mouse.getPosition();

	return waitLmdState;
});
