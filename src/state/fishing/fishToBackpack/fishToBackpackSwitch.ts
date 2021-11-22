import { keyboard, Key, Region, OptionalSearchParameters, screen, mouse, Point, Button } from '@nut-tree/nut-js';

import { createCancelable } from '../../../utils/rejectablePromiseCreator';
import { waitForImage } from '../../../utils/waitForImage';

import { waitLmdState } from '../waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const fishToBackpackSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { backpackRegion, yourItemsRegion, lastFish, openInventoryKey } = config;

	await keyboard.type(openInventoryKey);

	if (config.yourInventoryRegion === null) {
		const rightUpperAngle = {
			x: yourItemsRegion.left + yourItemsRegion.width - 1,
			y: yourItemsRegion.top + yourItemsRegion.height + 16,
		};

		const leftDownAngle = {
			x: rightUpperAngle.x - 446,
			y: rightUpperAngle.y + 356,
		};

		config.yourInventoryRegion = new Region(
			leftDownAngle.x - 10,
			rightUpperAngle.y - 10,
			rightUpperAngle.x - leftDownAngle.x,
			leftDownAngle.y - rightUpperAngle.y,
		);
	}

	if (config.backpackInventoryRegion === null) {
		const rightUpperAngle = {
			x: backpackRegion.left + backpackRegion.width - 1,
			y: backpackRegion.top + backpackRegion.height + 16,
		};

		const leftDownAngle = {
			x: rightUpperAngle.x - 446,
			y: rightUpperAngle.y + 178,
		};

		config.backpackRegion = new Region(
			leftDownAngle.x - 10,
			rightUpperAngle.y - 10,
			rightUpperAngle.x - leftDownAngle.x,
			leftDownAngle.y - rightUpperAngle.y,
		);
	}

	const foundFishParam = new OptionalSearchParameters(config.yourInventoryRegion, 0.8);

	const foundFishRegion = await waitForImage(`${lastFish!.storedName}.png`, 500, foundFishParam);

	let regionToPlace: Region;
	const foundBackpackFishParam = new OptionalSearchParameters(config.backpackRegion, 0.8);

	try {
		regionToPlace = await waitForImage(`${lastFish!.storedName}.png`, 500, foundBackpackFishParam);
	} catch {
		regionToPlace = await waitForImage(`EmptyCell.png`, 500, foundBackpackFishParam);
	}

	await mouse.move([
		new Point(foundFishRegion.left + foundFishRegion.width / 2, foundFishRegion.top + foundFishRegion.height / 2),
	]);

	await mouse.pressButton(Button.LEFT);

	await mouse.move([
		new Point(regionToPlace.left + regionToPlace.width / 2, regionToPlace.top + regionToPlace.height / 2),
	]);

	await mouse.releaseButton(Button.LEFT);

	await keyboard.type(openInventoryKey);

	config.lastFish = null;

	return waitLmdState;
});
