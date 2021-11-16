import { screen, mouse } from '@nut-tree/nut-js';
import { startState } from './start';
import { initFishingConfig as initConfig } from './initFishingConfig';
import { Machine } from '@state/stateMachine';
import { FishingConfig } from '@state/fishing/types';
import path from 'path';

export * from '@state/stateMachine';
export const startFishingState = startState;
export const initFishingConfig = initConfig;

screen.config.resourceDirectory = path.join(__dirname, `../../assets/img/`);
mouse.config.mouseSpeed = 8000;

let emiter = (msg: string, data: any) => {};
let sendStatus = (msg: string) => emiter('newStatus', msg);

let machine: Machine<FishingConfig> | null = null;

export const start = async (emit: (msg: string, data: any) => void) => {
	emiter = emit;
	sendStatus('Запуск бота...');

	const width = await screen.width();
	const height = await screen.height();

	const config = initFishingConfig(width, height, sendStatus);

	machine = new Machine<FishingConfig>(startFishingState, config);

	machine.start();
};

export const stop = () => {
	machine?.stop();
};
