import { OptionalSearchParameters, Region } from '@nut-tree/nut-js';

import { Key } from '../../../core';
import {
	createCancelable,
	extractTextFromRegion,
	extractNumbersFromWeight,
	waitForImage,
	prepareKey,
	typeKeyWithDelay,
	getRandomNumberInclusive,
} from '../../../utils';

import { placeState } from '../place';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const findBoatSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const param = new OptionalSearchParameters(config.trunkRegion, 0.85);

	await typeKeyWithDelay(config.openTrunkKey, getRandomNumberInclusive(500, 1200));

	try {
		config.trunkRegion = await waitForImage('Trunk.png', 2000, param);

		const trunkSize = await extractTextFromRegion(
			new Region(
				config.trunkRegion.left + 115,
				config.trunkRegion.top + config.trunkRegion.height + 390,
				300,
				25,
			),
			'monserrat-bold-18-v1',
			212,
		);

		const boatWeight = extractNumbersFromWeight(trunkSize);

		config.boatInventoryRegion = new Region(config.trunkRegion.left - 1, config.trunkRegion.top + 16, 530, 350);

		const yourItemsRegion = new Region(
			0,
			config.trunkRegion.top - 10,
			config.screenWidth,
			config.trunkRegion.height + 20,
		);

		const itemsParam = new OptionalSearchParameters(yourItemsRegion, 0.7);
		const yourItems = await waitForImage('yourItems.png', 5000, itemsParam);

		config.yourInventoryInTrunkRegion = new Region(yourItems.left - 1, yourItems.top, 530, 350);

		config.boat = {
			available: true,
			size: boatWeight,
		};
	} catch (e) {
		console.log(e);
	}

	await typeKeyWithDelay(Key.Escape, getRandomNumberInclusive(750, 800));

	return placeState;
});
