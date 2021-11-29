import { FishingSettings } from '../fishing';

export type Settings = {
	openInventoryKey: number;
	openTrunkKey: number;
} & FishingSettings;
