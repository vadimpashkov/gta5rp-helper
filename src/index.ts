import 'module-alias/register';
import { screen, mouse } from '@nut-tree/nut-js';
import { Machine, startFishingState, initFishingConfig } from './state';

import { FishingConfig } from 'state/fishing/types';

screen.config.resourceDirectory += `/build/img/`;
mouse.config.mouseSpeed = 3000;

const start = async () => {
	const width = await screen.width();
	const height = await screen.height();

	const config = initFishingConfig(width, height, console.log);

	const machine = new Machine<FishingConfig>(startFishingState, config);

	const iterationInterval = 190;

	let timeout = setTimeout(function createTimeout() {
		machine.iteration();

		timeout = setTimeout(createTimeout, iterationInterval);
	}, iterationInterval);

	switchState(machine);
};

const switchState = async (machine: Machine<FishingConfig>) => {
	await machine.switchState();
	switchState(machine);
};

start();
