import { screen, mouse } from '@nut-tree/nut-js';
import { startState } from './start';
import { initFishingConfig as initConfig } from './initFishingConfig';
import { Machine } from '../stateMachine';
import { FishingConfig } from 'state/fishing/types';

export * from '../stateMachine';
export const startFishingState = startState;
export const initFishingConfig = initConfig;

screen.config.resourceDirectory += `/build/img/`;
mouse.config.mouseSpeed = 3000;

let emiter = (msg: string, data: any) => null;
let sendStatus = (msg: string) => emiter('newStatus', msg);

export const start = async (emit: (msg: string, data: any) => void) => {
	emiter = emit;
	sendStatus('Запуск бота...');

	const width = await screen.width();
	const height = await screen.height();

	const config = initFishingConfig(width, height, sendStatus);

	const machine = new Machine<FishingConfig>(startFishingState, config);

	machine.start();
};
