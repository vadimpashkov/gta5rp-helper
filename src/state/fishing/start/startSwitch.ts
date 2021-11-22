import { OptionalSearchParameters, Region, keyboard, Key } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';
import { clearSessionFish } from '../../../store';

import { findBackpackState } from '../findBackpack';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const startSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	clearSessionFish();
	config.emiter('setSessionFish', []);

	const param = new OptionalSearchParameters(config.yourItemsRegion, 0.9);

	try {
		// Поиск если инвентарь уже открыт
		config.yourItemsRegion = await waitForImage('yourItems.png', 2000, param);
	} catch {
		// Открытие инвентаря
		await keyboard.type(Key.I);
		config.yourItemsRegion = await waitForImage('yourItems.png', 5000, param);
	}

	const yourItemsSize = await extractTextFromRegion(
		new Region(
			config.yourItemsRegion.left - 160,
			config.yourItemsRegion.top - 10,
			config.yourItemsRegion.width + 160,
			config.yourItemsRegion.height + 20,
		),
		'eng',
	);

	const mainWeight = extractNumbersFromWeight(yourItemsSize);

	config.mainInventory = mainWeight;

	return findBackpackState;
});
