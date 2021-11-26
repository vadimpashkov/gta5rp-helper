import { keyboard, OptionalSearchParameters, Region } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';
import { waitForImage } from '../../../utils/waitForImage';

import { placeState } from '../place';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const findBoatSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const param = new OptionalSearchParameters(config.trunkRegion, 0.7);

	await keyboard.type(config.openTrunkKey);

	try {
		// Поиск если инвентарь уже открыт
		config.trunkRegion = await waitForImage('Trunk.png', 2000, param);

		const trunkSize = await extractTextFromRegion(
			new Region(
				config.trunkRegion.left + 150,
				config.trunkRegion.top + 390,
				config.trunkRegion.width + 100,
				config.trunkRegion.height + 20,
			),
			'eng',
		);

		const boatWeight = extractNumbersFromWeight(trunkSize);

		config.boat = {
			available: true,
			size: boatWeight,
		};

		console.log(config.boat);

		await keyboard.type(config.openTrunkKey);
	} catch {}

	return placeState;
});
