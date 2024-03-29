import { Region } from '@nut-tree/nut-js';

import { createCancelable, extractTextFromRegion } from '../../../utils';

import { findFish } from '../../../core';
import { addSessionFish, addFish } from '../../../store';

import { placeState } from '../place';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const findFishSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { successRegion, screenWidth, emiter } = config;

	try {
		const regionToFind = new Region(
			successRegion.left + 100,
			successRegion.top,
			successRegion.width + screenWidth * 0.2,
			successRegion.height,
		);

		const message = await extractTextFromRegion(regionToFind, 'fish-v9', 160);

		const foundFish = findFish(message);

		addSessionFish(foundFish);
		await addFish(foundFish.name);
		emiter('newSessionFish', foundFish);

		config.lastFish = foundFish;

		if (config.mainInventory.current + foundFish.weight <= config.mainInventory.total) {
			config.mainInventory.current += foundFish.weight;
		}
	} catch {}

	return placeState;
});
