import { Region } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';

import { findFish } from '../../../core';
import { addFish, addSessionFish } from '../../../store';

import { placeState } from '../place';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const findFishSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { successRegion, screenWidth } = config;

	try {
		const regionToFind = new Region(
			successRegion.left,
			successRegion.top,
			successRegion.width + screenWidth * 0.25,
			successRegion.height,
		);

		const message = await extractTextFromRegion(regionToFind);

		const foundFish = findFish(message);

		addSessionFish(foundFish);
		addFish(foundFish);
	} catch {}

	return placeState;
});
