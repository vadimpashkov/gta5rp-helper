import { OptionalSearchParameters, Region, mouse } from '@nut-tree/nut-js';
import {
	createCancelable,
	waitForImage,
	extractTextFromRegion,
	extractNumbersFromWeight,
	getRandomNumberInclusive,
	prepareKey,
} from '../../../utils';

import { getGtaProcess } from '../../../store';

import { FishingConfig, FishingState, FishingSwitch } from '../types';
import { findBackpackState } from './findBackpackState';
import { findBoatState } from '../findBoat';
import { placeState } from '../place';

export const findBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const param = new OptionalSearchParameters(config.backpackRegion, 0.8);
	const gtaProcess = getGtaProcess();

	try {
		// Поиск если инвентарь уже открыт
		config.backpackRegion = await waitForImage('takeOff.png', 2000, param);

		const backpackSize = await extractTextFromRegion(
			new Region(
				config.backpackRegion.left - 250,
				config.backpackRegion.top - 6,
				250,
				config.backpackRegion.height + 6,
			),
			'monserrat-medium-18-v1',
			'backpack',
			160,
		);

		const backpackWeight = extractNumbersFromWeight(backpackSize);

		const retry = async () => {
			const randomX = getRandomNumberInclusive(-100, 100);
			const randomY = getRandomNumberInclusive(-100, 100);

			await gtaProcess.keyboard.sendKeyAsync(prepareKey(config.openInventoryKey));

			let currentMouse = await mouse.getPosition();

			await gtaProcess.mouse.moveCurveToAsync(currentMouse.x + randomX, currentMouse.y + randomY, 2);

			await gtaProcess.keyboard.sendKeyAsync(prepareKey(config.openInventoryKey));

			return findBackpackState;
		};

		if (
			Number.isNaN(backpackWeight.current) ||
			Number.isNaN(backpackWeight.total) ||
			backpackWeight.total < backpackWeight.current
		) {
			return await retry();
		}

		config.backpack = {
			available: true,
			size: backpackWeight,
		};

		const rightUpperAngle = {
			x: config.backpackRegion.left + config.backpackRegion.width - 1,
			y: config.backpackRegion.top + config.backpackRegion.height + 16,
		};

		const leftDownAngle = {
			x: rightUpperAngle.x - 446,
			y: rightUpperAngle.y + 178,
		};

		config.backpackInventoryRegion = new Region(
			leftDownAngle.x - 10,
			rightUpperAngle.y - 10,
			rightUpperAngle.x - leftDownAngle.x + 20,
			leftDownAngle.y - rightUpperAngle.y + 20,
		);
	} catch {}

	// Закрываем инвентарь
	await gtaProcess.keyboard.sendKeyAsync(prepareKey(config.openInventoryKey));

	if (config.lookingForBoat) {
		return findBoatState;
	}

	return placeState;
});
