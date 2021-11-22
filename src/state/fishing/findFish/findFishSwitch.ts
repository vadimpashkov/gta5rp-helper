import { Region } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';

import { findFish } from '../../../core';
import { addFish, addSessionFish } from '../../../store';

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

		const message = await extractTextFromRegion(regionToFind, 'fish-v8');

		emiter('log', message);

		const foundFish = findFish(message);

		console.log(foundFish.storedName);

		addSessionFish(foundFish);
		addFish(foundFish);
		emiter('newFish', foundFish);
	} catch {}

	return placeState;
});
