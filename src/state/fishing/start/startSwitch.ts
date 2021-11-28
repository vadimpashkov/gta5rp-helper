import { OptionalSearchParameters, Region, keyboard, Key, mouse, Point, left, up } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';
import { getRandomNumberInclusive } from '../../../utils/getRandomIntInclusive';

import { clearSessionFish, gtaProcess } from '../../../store';

import { findBackpackState } from '../findBackpack';
import { startState } from './startState';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const startSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState | null>(async (config) => {
	clearSessionFish();
	config.emiter('setSessionFish', []);

	const param = new OptionalSearchParameters(config.yourItemsRegion, 0.7);

	try {
		// Поиск если инвентарь уже открыт
		config.yourItemsRegion = await waitForImage('yourItems.png', 2000, param);
	} catch {
		// Открытие инвентаря
		if (!config.softStop) await keyboard.type(config.openInventoryKey);
		else return null;
		config.yourItemsRegion = await waitForImage('yourItems.png', 5000, param);
	}

	const yourItemsSize = await extractTextFromRegion(
		new Region(
			config.yourItemsRegion.left - 163,
			config.yourItemsRegion.top - 20,
			config.yourItemsRegion.width - 10,
			config.yourItemsRegion.height + 30,
		),
		'monserrat-medium-18-v1',
		'inventory',
		160,
	);

	let mainWeight: {
		current: number;
		total: number;
	};

	const retry = async () => {
		await keyboard.type(config.openInventoryKey);

		const randomX = getRandomNumberInclusive(-10, 10);
		const randomY = getRandomNumberInclusive(-4, 4);

		var currentMouse = await mouse.getPosition();

		await gtaProcess.mouse.moveCurveToAsync(currentMouse.x + randomX, currentMouse.y + randomY, 0.2, 10);

		return startState;
	};

	try {
		mainWeight = extractNumbersFromWeight(yourItemsSize);
	} catch {
		if (!config.softStop) return await retry();
		else return null;
	}

	if (
		Number.isNaN(mainWeight.current) ||
		Number.isNaN(mainWeight.total) ||
		mainWeight.total < mainWeight.current ||
		mainWeight.total !== 10
	) {
		if (!config.softStop) return await retry();
	}

	const rightUpperAngle = {
		x: config.yourItemsRegion.left + config.yourItemsRegion.width - 1,
		y: config.yourItemsRegion.top + config.yourItemsRegion.height + 16,
	};

	const leftDownAngle = {
		x: rightUpperAngle.x - 446,
		y: rightUpperAngle.y + 356,
	};

	config.yourInventoryRegion = new Region(
		leftDownAngle.x - 10,
		rightUpperAngle.y - 10,
		rightUpperAngle.x - leftDownAngle.x + 20,
		leftDownAngle.y - rightUpperAngle.y + 20,
	);

	config.mainInventory = mainWeight;

	return findBackpackState;
});
