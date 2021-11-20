import { OptionalSearchParameters, Region, keyboard, Key } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';

import { placeState } from '../place';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const findBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const param = new OptionalSearchParameters(config.backpackRegion, 0.9);

	try {
		// Поиск если инвентарь уже открыт
		config.backpackRegion = await waitForImage('takeOff.png', 2000, param);

		const backpackSize = await extractTextFromRegion(
			new Region(
				config.backpackRegion.left - config.screenWidth * 0.2,
				config.backpackRegion.top,
				config.backpackRegion.width + config.screenWidth * 0.2,
				config.backpackRegion.height,
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
	await keyboard.type(Key.I);

	return placeState;
});
