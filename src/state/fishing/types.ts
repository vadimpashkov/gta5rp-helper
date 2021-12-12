import { Point, Region } from '@nut-tree/nut-js';
import { Coordinate, Fish, TotalFish } from '../../core';
import { State, StateIteration, StateSwitch, DefaultConfig } from '../types';

export type FishingConfig = {
	startMousePosition: Point;
	numberOfFish: number;
	lookingForBackpack: boolean;
	lookingForBoat: boolean;
	lastFish: Fish | null;
	fishInInventory: FishInInventory;
} & DefaultConfig &
	Weight &
	Regions &
	Keys &
	Coordinates &
	Macros;

type Macros = {
	macroses: number[][][];
	currentMacros: number[][];
	macrosStep: number;
};

type Regions = {
	lmbRegion: Region;
	mouseRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	errorRegion: Region;
	yourItemsRegion: Region;
	backpackRegion: Region;
	trunkRegion: Region;
	yourInventoryRegion: Region;
	yourInventoryInTrunkRegion: Region;
	backpackInventoryRegion: Region;
	boatInventoryRegion: Region;
};

type Coordinates = {
	mouseCoordinate: Coordinate | null;
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
	openInventoryKey: number;
	openTrunkKey: number;
	fishingRodKey: number;
};

type FishInInventory = {
	backpack: TotalFish<Coordinate | null>;
	boat: TotalFish<Coordinate | null>;
};

export type FishingIteration = StateIteration<FishingConfig>;
export type FishingSwitch = StateSwitch<FishingConfig>;
export type FishingState = State<FishingConfig>;
