import { Region } from '@nut-tree/nut-js';

export type StateIteration = (config: Config) => Promise<void>;
export type StateSwitch = (config: Config) => Promise<State>;

export type State = {
	name: string;
	iteration?: StateIteration;
	switcher: StateSwitch;
};

export type Config = {
	lmbRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	clickingDirection: boolean;
};
