import { Point, Region } from '@nut-tree/nut-js';
import { getSettings } from '../../store';

import { Messanger } from '../types';
import { FishingConfig } from './types';

export const initFishingConfig = (screenWidth: number, screenHeight: number, messanger: Messanger): FishingConfig => ({
	fishingPlaceRegion: new Region(0, 0, screenWidth, screenHeight),
	lmbRegion: new Region(0, 0, screenWidth, screenHeight),
	successRegion: new Region(0, 0, screenWidth, screenHeight),
	errorRegion: new Region(0, 0, screenWidth, screenHeight),
	startMousePosition: new Point(screenWidth / 2, screenHeight / 2),
	mouseDirection: false,
	messanger,
	numberOfFish: 0,
	doubleClick: getSettings().doubleClick,
});
