import { Point, Region } from '@nut-tree/nut-js';
import { Config, Messanger } from './state/types';

export const initConfig = (screenWidth: number, screenHeight: number, messanger: Messanger): Config => ({
	fishingPlaceRegion: new Region(0, 0, screenWidth, screenHeight),
	lmbRegion: new Region(0, 0, screenWidth, screenHeight),
	successRegion: new Region(0, 0, screenWidth, screenHeight),
	errorRegion: new Region(0, 0, screenWidth, screenHeight),
	startMousePosition: new Point(screenWidth / 2, screenHeight / 2),
	clickingDirection: false,
	startedInLast10sec: false,
	messanger,
});
