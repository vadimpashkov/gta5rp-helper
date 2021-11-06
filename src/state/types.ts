import { Region, Point } from '@nut-tree/nut-js';

export type StateIteration = (config: Config) => Promise<void>;
export type StateSwitch = (config: Config) => Promise<State>;

export type State = {
	name: string;
	iteration?: StateIteration;
	switcher: StateSwitch;
};

export type Messanger = (message: string) => void;

export type Config = {
	messanger: Messanger;
	lmbRegion: Region;
	fishingPlaceRegion: Region;
	successRegion: Region;
	errorRegion: Region;
	startMousePosition: Point;
	clickingDirection: boolean;
	startedInLast10sec: boolean;
};
