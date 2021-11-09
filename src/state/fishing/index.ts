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

let iterationTimeout;
let isWorking = false;

export const start = async (emit: (msg: string, data: any) => void) => {
	emiter = emit;
	sendStatus('Запуск бота...');
	isWorking = true;

	const width = await screen.width();
	const height = await screen.height();

	const config = initFishingConfig(width, height, sendStatus);

	const machine = new Machine<FishingConfig>(startFishingState, config);

	const iterationInterval = 190;

	iterationTimeout = setTimeout(function createTimeout() {
		machine.iteration();

		iterationTimeout = setTimeout(createTimeout, iterationInterval);
	}, iterationInterval);

	switchState(machine);
};

export const stop = () => {
	sendStatus('Бот остановлен');
	isWorking = false;

	clearTimeout(iterationTimeout);
};

const switchState = async (machine: Machine<FishingConfig>) => {
	if (isWorking) {
		await machine.switchState();
		switchState(machine);
	}
};
