import { keyboard, Region, OptionalSearchParameters, mouse, Point, Button } from '@nut-tree/nut-js';

import { Key } from '../../../core';
import { createCancelable, waitForImage, drag, typeKeyWithDelay } from '../../../utils';

import { waitLmdState } from '../waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

let retryAttempts = 0;

export const fishToBoatSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lastFish, openTrunkKey } = config;

	await keyboard.type(openTrunkKey);

	try {
		let foundFishRegion: Region | null = null;
		const foundFishParam = new OptionalSearchParameters(config.yourInventoryInTrunkRegion, 0.9);

		do {
			try {
				foundFishRegion = await waitForImage(`${lastFish!.storedName}-Boat.png`, 2500, foundFishParam);
			} catch {
				// ищем два раза
				if (retryAttempts < 2) {
					retryAttempts++;
				} else {
					retryAttempts = 0;

					await keyboard.type(Key.Escape);

					return waitLmdState;
				}
			}
		} while (foundFishRegion === null);

		retryAttempts = 0;

		let regionToPlace: Region | null = null;
		const foundBoatFishParam = new OptionalSearchParameters(config.boatInventoryRegion, 0.9);

		do {
			try {
				regionToPlace = await waitForImage(`${lastFish!.storedName}-Boat.png`, 1500, foundBoatFishParam);
			} catch {
				// ищем два раза
				if (retryAttempts < 2) {
					retryAttempts++;
				} else {
					retryAttempts = 0;

					break;
				}
			}
		} while (regionToPlace === null);

		if (regionToPlace === null) regionToPlace = await waitForImage(`EmptyCell.png`, 1500, foundBoatFishParam);

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

		config.boat.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	await typeKeyWithDelay(Key.Escape, 100);

	return waitLmdState;
});
