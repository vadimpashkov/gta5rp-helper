import { Point, Region } from '@nut-tree/nut-js';
import { getSettings } from '../../store';

import { Emiter } from '../types';
import { FishingConfig } from './types';

export const initFishingConfig = (screenWidth: number, screenHeight: number, emiter: Emiter): FishingConfig => {
	const settings = getSettings();

	return {
		fishingPlaceRegion: new Region(0, 0, screenWidth, screenHeight),
		lmbRegion: new Region(0, 0, screenWidth, screenHeight),
		mouseRegion: new Region(0, 0, screenWidth, screenHeight),
		successRegion: new Region(0, 0, screenWidth, screenHeight),
		errorRegion: new Region(0, 0, screenWidth, screenHeight),
		trunkRegion: new Region(0, 0, screenWidth, screenHeight),
		yourItemsRegion: new Region(0, 0, screenWidth, screenHeight - screenHeight * 0.5),
		backpackRegion: new Region(0, screenHeight * 0.5, screenWidth, screenHeight - screenHeight * 0.5),
		yourInventoryRegion: new Region(0, 0, screenWidth, screenHeight),
		yourInventoryInTrunkRegion: new Region(0, 0, screenWidth, screenHeight),
		boatInventoryRegion: new Region(0, 0, screenWidth, screenHeight),
		backpackInventoryRegion: new Region(0, 0, screenWidth, screenHeight),
		startMousePosition: new Point(screenWidth / 2, screenHeight / 2),
		mouseDirection: false,
		emiter,
		numberOfFish: 0,
		screenWidth,
		screenHeight,
		lastFish: null,
		backpack: {
			available: false,
			size: {
				current: 0,
				total: 0,
			},
		},
		boat: {
			available: false,
			size: {
				current: 0,
				total: 0,
			},
		},
		mainInventory: {
			current: 0,
			total: 10,
		},
		doubleClick: settings.doubleClick,
		lookingForBackpack: settings.lookingForBackpack,
		lookingForBoat: settings.lookingForBoat,
		openInventoryKey: settings.openInventoryKey,
		openTrunkKey: settings.openTrunkKey,
		fishingRodKey: settings.fishingRodKey,
		softStop: false,
	};
};
