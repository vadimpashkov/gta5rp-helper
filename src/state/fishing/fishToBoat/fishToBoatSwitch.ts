import { keyboard, OptionalSearchParameters } from '@nut-tree/nut-js';

import { Key } from '../../../core';
import { createCancelable, waitForImage, drag, typeKeyWithDelay, findRegion } from '../../../utils';

import { waitLmdState } from '../waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const fishToBoatSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lastFish, openTrunkKey } = config;

	await keyboard.type(openTrunkKey);

	try {
		const foundFishParam = new OptionalSearchParameters(config.yourInventoryInTrunkRegion, 0.9);

		const foundFishRegion = await findRegion(`${lastFish!.storedName}-Boat.png`, foundFishParam, 2, 2500);

		if (foundFishRegion === null) {
			await keyboard.type(Key.Escape);

			return waitLmdState;
		}

		let regionToPlace = config.fishInInventory.boat[lastFish!.storedName];

		if (regionToPlace === null) {
			const foundBoatFishParam = new OptionalSearchParameters(config.boatInventoryRegion, 0.9);
			const fishRegion = await findRegion(`${lastFish!.storedName}-Boat.png`, foundBoatFishParam, 2, 1500);

			if (fishRegion === null) {
				const emptyCellRegion = await waitForImage(`EmptyCell.png`, 1500, foundBoatFishParam);

				config.fishInInventory.boat[lastFish!.storedName] = {
					x: emptyCellRegion.left + emptyCellRegion.width / 2,
					y: emptyCellRegion.top + emptyCellRegion.height / 2,
				};
			} else {
				config.fishInInventory.boat[lastFish!.storedName] = {
					x: fishRegion.left + fishRegion.width / 2,
					y: fishRegion.top + fishRegion.height / 2,
				};
			}

			regionToPlace = config.fishInInventory.boat[lastFish!.storedName];
		}

		await drag(
			{
				x: foundFishRegion.left + foundFishRegion.width / 2,
				y: foundFishRegion.top + foundFishRegion.height / 2,
			},
			{
				x: regionToPlace!.x,
				y: regionToPlace!.y,
			},
		);

		config.boat.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	await typeKeyWithDelay(Key.Escape, 300);

	return waitLmdState;
});
