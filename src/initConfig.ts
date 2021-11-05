import { Region } from '@nut-tree/nut-js';
import { Config } from './state/types';

export const initConfig = (screenWidth: number, screenHeight: number): Config => ({
	fishingPlaceRegion: new Region(0, 0, screenWidth, screenHeight),
	lmbRegion: new Region(0, 0, screenWidth, screenHeight),
	successRegion: new Region(0, 0, screenWidth, screenHeight),
	clickingDirection: false,
});
