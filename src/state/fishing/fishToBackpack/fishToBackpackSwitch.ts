import { mouse, OptionalSearchParameters } from '@nut-tree/nut-js';

import {
	createCancelable,
	waitForImage,
	drag,
	typeKeyWithDelay,
	findRegion,
	getRandomNumberInclusive,
} from '../../../utils';

import { waitLmdState } from '../waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const fishToBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lastFish, openInventoryKey } = config;

	await typeKeyWithDelay(openInventoryKey, getRandomNumberInclusive(600, 1200));

	try {
		const foundFishParam = new OptionalSearchParameters(config.yourInventoryRegion, 0.9);

		const foundFishRegion = await findRegion(`${lastFish!.storedName}-Inventory.png`, foundFishParam, 2, 1500);

		if (foundFishRegion === null) {
			await typeKeyWithDelay(openInventoryKey, getRandomNumberInclusive(700, 1200));

			return waitLmdState;
		}

		let regionToPlace = config.fishInInventory.backpack[lastFish!.storedName];

		if (regionToPlace === null) {
			const foundBackpackFishParam = new OptionalSearchParameters(config.backpackInventoryRegion, 0.9);
			let fishRegion = await findRegion(`${lastFish!.storedName}-Inventory.png`, foundBackpackFishParam, 2, 1500);

			if (fishRegion === null) {
				const emptyCellRegion = await waitForImage(
					`EmptyCell.png`,
					1500,
					new OptionalSearchParameters(config.backpackInventoryRegion, 0.7),
				);

				config.fishInInventory.backpack[lastFish!.storedName] = {
					x: emptyCellRegion.left + emptyCellRegion.width / 2,
					y: emptyCellRegion.top + emptyCellRegion.height / 2,
				};
			} else {
				config.fishInInventory.backpack[lastFish!.storedName] = {
					x: fishRegion.left + fishRegion.width / 2,
					y: fishRegion.top + fishRegion.height / 2,
				};
			}

			regionToPlace = config.fishInInventory.backpack[lastFish!.storedName];
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

		await typeKeyWithDelay(openInventoryKey, getRandomNumberInclusive(550, 1200));

		config.backpack.size.current += config.lastFish!.weight;

		config.lastFish = null;
	} catch (e) {
		console.log(e);
	}

	config.mouseCoordinate = await mouse.getPosition();

	return waitLmdState;
});
