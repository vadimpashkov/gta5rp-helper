import { keyboard, Region, OptionalSearchParameters, mouse, Point, Button } from '@nut-tree/nut-js';

import { Key } from '../../../core';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';

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

		config.boat.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	await keyboard.type(Key.Escape);

	return waitLmdState;
});
