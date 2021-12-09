import path from 'path';
import { screen, mouse } from '@nut-tree/nut-js';
import { startState } from './start';
import { initFishingConfig as initConfig } from './initFishingConfig';
import { Machine } from '../stateMachine';
import { FishingConfig } from './types';

export * from '../stateMachine';
export const startFishingState = startState;
export const initFishingConfig = initConfig;

screen.config.resourceDirectory = path.resolve(__dirname, `../../resources/`);
mouse.config.mouseSpeed = 200000;
mouse.config.autoDelayMs = 1;

let emiter = (msg: string, data: any) => {};

let machine: Machine<FishingConfig> | null = null;

export const start = async (emit: (msg: string, data: any) => void) => {
	emiter = emit;

	const width = await screen.width();
	const height = await screen.height();

	const config = await initFishingConfig(width, height, emiter);

	machine = new Machine<FishingConfig>(startFishingState, config);

	machine.start();
};

export const stop = () => {
	machine?.stop();
};

export const softStop = () => {
	machine?.softStop();
};
