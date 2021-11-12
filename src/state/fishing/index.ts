import { screen, mouse } from '@nut-tree/nut-js';
import { startState } from './start';
import { initFishingConfig as initConfig } from './initFishingConfig';
import { Machine } from '@state/stateMachine';
import { FishingConfig } from '@state/fishing/types';

export * from '@state/stateMachine';
export const startFishingState = startState;
export const initFishingConfig = initConfig;

screen.config.resourceDirectory += `/assets/`;

let emiter = (msg: string, data: any) => {};
let sendStatus = (msg: string) => emiter('newStatus', msg);

let iterationTimeout: ReturnType<typeof setTimeout>;
let isWorking = false;

export const start = async (emit: (msg: string, data: any) => void) => {
	emiter = emit;
	sendStatus('Запуск');
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
	sendStatus('Остановка');
	isWorking = false;

	clearTimeout(iterationTimeout);
};

const switchState = async (machine: Machine<FishingConfig>) => {
	if (isWorking) {
		await machine.switchState();
		switchState(machine);
	}
};
