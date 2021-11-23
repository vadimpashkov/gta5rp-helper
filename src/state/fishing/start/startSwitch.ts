import { OptionalSearchParameters, Region, keyboard, Key, mouse, Point, left, up } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';
import { getRandomIntInclusive } from '../../../utils/getRandomIntInclusive';

import { clearSessionFish } from '../../../store';

import { findBackpackState } from '../findBackpack';
import { startState } from './startState';
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
		await keyboard.type(config.openInventoryKey);
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

	let mainWeight: {
		current: number;
		total: number;
	};

	const retry = async () => {
		await keyboard.type(config.openInventoryKey);

		const randomX = getRandomIntInclusive(-100, 100);
		const randomY = getRandomIntInclusive(-100, 100);

		await mouse.move(left(randomX));
		await mouse.move(up(randomY));

		return startState;
	};

	try {
		mainWeight = extractNumbersFromWeight(yourItemsSize);
	} catch {
		return await retry();
	}

	if (Number.isNaN(mainWeight.current) || Number.isNaN(mainWeight.total) || mainWeight.total < mainWeight.current) {
		return await retry();
	}

	config.mainInventory = mainWeight;

	return findBackpackState;
});
