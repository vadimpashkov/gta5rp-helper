import { OptionalSearchParameters, Region, keyboard, Key } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';

import { FishingConfig, FishingState, FishingSwitch } from '../types';
import { findBoatState } from '../findBoat';
import { placeState } from '../place';

export const findBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const param = new OptionalSearchParameters(config.backpackRegion, 0.8);

	try {
		// Поиск если инвентарь уже открыт
		config.backpackRegion = await waitForImage('takeOff.png', 2000, param);

		const backpackSize = await extractTextFromRegion(
			new Region(
				config.backpackRegion.left - config.screenWidth * 0.15,
				config.backpackRegion.top - 10,
				config.backpackRegion.width + config.screenWidth * 0.15,
				config.backpackRegion.height + 20,
			),
			'eng',
		);

		const backpackWeight = extractNumbersFromWeight(backpackSize);

		config.backpack = {
			available: true,
			size: backpackWeight,
		};
	} catch {}

	// Закрываем инвентарь
	await keyboard.type(config.openInventoryKey);

	return placeState;
});
