import { Region } from '@nut-tree/nut-js';
import { Config } from './state/types';

export const initConfig = (screenWidth: number, screenHeight: number): Config => ({
	fishingPlaceRegion: new Region(0, screenHeight * 0.6, screenWidth, screenHeight - screenHeight * 0.6),
	lmbRegion: new Region(
		screenWidth * 0.5,
		screenHeight * 0.5,
		screenWidth - screenWidth * 0.5,
		screenHeight - screenHeight * 0.5,
	),
	hookRegion: new Region(
		screenWidth * 0.5,
		screenHeight * 0.5,
		screenWidth - screenWidth * 0.5,
		screenHeight - screenHeight * 0.5,
	),
	successRegion: new Region(0, screenHeight * 0.8, screenWidth, screenHeight - screenHeight * 0.8),
	errorRegion: new Region(0, screenHeight * 0.8, screenWidth, screenHeight - screenHeight * 0.8),
	clickingDirection: false,
});
