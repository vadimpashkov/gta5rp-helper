import { Point, Region } from '@nut-tree/nut-js';
import { State, StateIteration, StateSwitch, DefaultConfig } from '../types';

export type FishingConfig = {
	startMousePosition: Point;
	mouseDirection: boolean;
	numberOfFish: number;
	doubleClick: boolean;
} & DefaultConfig &
	Weight &
	Regions;

type Regions = {
	lmbRegion: Region;
	mouseRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	errorRegion: Region;
	yourItemsRegion: Region;
	backpackRegion: Region;
};

type Weight = {
	mainInventory: Size;
	backpack: {
		available: boolean;
		size: Size;
	};
};

type Size = {
	current: number;
	total: number;
};

export type FishingIteration = StateIteration<FishingConfig>;
export type FishingSwitch = StateSwitch<FishingConfig>;
export type FishingState = State<FishingConfig>;
