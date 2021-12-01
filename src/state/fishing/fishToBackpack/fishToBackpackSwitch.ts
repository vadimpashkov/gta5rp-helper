import { keyboard, Region, OptionalSearchParameters, screen, mouse, Point, Button } from '@nut-tree/nut-js';

import { createCancelable, waitForImage, drag, typeKeyWithDelay } from '../../../utils';

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

		await drag(
			{
				x: foundFishRegion.left + foundFishRegion.width / 2,
				y: foundFishRegion.top + foundFishRegion.height / 2,
			},
			{
				x: regionToPlace.left + regionToPlace.width / 2,
				y: regionToPlace.top + regionToPlace.height / 2,
			},
		);

		await typeKeyWithDelay(openInventoryKey, 100);

		config.backpack.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	return waitLmdState;
});
