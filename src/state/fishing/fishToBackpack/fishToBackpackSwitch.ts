import { keyboard, Key, Region, OptionalSearchParameters, screen, mouse, Point, Button } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';

import { waitLmdState } from '../waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

let retryAttempts = 0;

export const fishToBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lastFish, openInventoryKey } = config;

	await keyboard.type(openInventoryKey);

	try {
		const foundFishParam = new OptionalSearchParameters(config.yourInventoryRegion, 0.7);

		let foundFishRegion: Region | null = null;

		do {
			try {
				foundFishRegion = await waitForImage(`${lastFish!.storedName}-Inventory.png`, 1500, foundFishParam);
			} catch {
				if (retryAttempts < 2) {
					retryAttempts++;
				} else {
					await keyboard.type(openInventoryKey);

					return waitLmdState;
				}
			}
		} while (foundFishRegion === null);

		retryAttempts = 0;

		let regionToPlace: Region | null = null;
		const foundBackpackFishParam = new OptionalSearchParameters(config.backpackInventoryRegion, 0.7);

		do {
			try {
				regionToPlace = await waitForImage(
					`${lastFish!.storedName}-Inventory.png`,
					1500,
					foundBackpackFishParam,
				);
			} catch {
				if (retryAttempts < 2) {
					retryAttempts++;
				} else {
					retryAttempts = 0;
					break;
				}
			}
		} while (regionToPlace === null);

		if (regionToPlace === null) regionToPlace = await waitForImage(`EmptyCell.png`, 1500, foundBackpackFishParam);

		await mouse.move([
			new Point(
				foundFishRegion.left + foundFishRegion.width / 2,
				foundFishRegion.top + foundFishRegion.height / 2,
			),
		]);

		await mouse.pressButton(Button.LEFT);

		await mouse.move([
			new Point(regionToPlace.left + regionToPlace.width / 2, regionToPlace.top + regionToPlace.height / 2),
		]);

		await mouse.releaseButton(Button.LEFT);

		await keyboard.type(openInventoryKey);

		config.backpack.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	return waitLmdState;
});
