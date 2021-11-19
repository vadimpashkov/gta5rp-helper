import { Point, Region } from '@nut-tree/nut-js';
import { State, StateIteration, StateSwitch, DefaultConfig } from '../types';

export type FishingConfig = {
	lmbRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	errorRegion: Region;
	startMousePosition: Point;
	mouseDirection: boolean;
	numberOfFish: number;
} & DefaultConfig;

export type FishingIteration = StateIteration<FishingConfig>;
export type FishingSwitch = StateSwitch<FishingConfig>;
export type FishingState = State<FishingConfig>;
