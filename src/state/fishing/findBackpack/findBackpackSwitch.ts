import { OptionalSearchParameters, Region, keyboard, mouse, left, up } from '@nut-tree/nut-js';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';
import { extractTextFromRegion } from '../../../utils/extractTextFromRegion';
import { extractNumbersFromWeight } from '../../../utils/extractNumberFromWeight';
import { getRandomIntInclusive } from '../../../utils/getRandomIntInclusive';
import { gtaProcess } from '../../../store';

import { FishingConfig, FishingState, FishingSwitch } from '../types';
import { findBackpackState } from '.';
import { findBoatState } from '../findBoat';

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

		const retry = async () => {
			const randomX = getRandomIntInclusive(-100, 100);
			const randomY = getRandomIntInclusive(-100, 100);

			await keyboard.type(config.openInventoryKey);

			let currentMouse = await mouse.getPosition();

			await gtaProcess.mouse.moveCurveToAsync(currentMouse.x + randomX, currentMouse.y + randomY, 2);

			await keyboard.type(config.openInventoryKey);

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
	} catch {}

	// Закрываем инвентарь
	await keyboard.type(config.openInventoryKey);

	return findBoatState;
});
