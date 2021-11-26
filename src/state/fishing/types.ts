import { Key, Point, Region } from '@nut-tree/nut-js';
import { Fish } from '../../core';
import { State, StateIteration, StateSwitch, DefaultConfig } from '../types';

export type FishingConfig = {
	startMousePosition: Point;
	mouseDirection: boolean;
	numberOfFish: number;
	doubleClick: boolean;
	lastFish: Fish | null;
} & DefaultConfig &
	Weight &
	Regions &
	Keys;

type Regions = {
	lmbRegion: Region;
	mouseRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	errorRegion: Region;
	yourItemsRegion: Region;
	backpackRegion: Region;
	trunkRegion: Region;
	yourInventoryRegion: Region | null;
	backpackInventoryRegion: Region | null;
};

type Weight = {
	mainInventory: Size;
	backpack: {
		available: boolean;
		size: Size;
	};
	boat: {
		available: boolean;
		size: Size;
	};
};

type Size = {
	current: number;
	total: number;
};

type Keys = {
	openInventoryKey: Key;
	openTrunkKey: Key;
};

export type FishingIteration = StateIteration<FishingConfig>;
export type FishingSwitch = StateSwitch<FishingConfig>;
export type FishingState = State<FishingConfig>;
