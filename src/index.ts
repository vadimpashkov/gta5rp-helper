import 'module-alias/register';
import { screen, mouse } from '@nut-tree/nut-js';
import { Machine } from './state';
import { startState } from './state/fishing/start';
import { initConfig } from './initConfig';

screen.config.resourceDirectory += `/build/img/`;
mouse.config.mouseSpeed = 3000;

const start = async () => {
	const width = await screen.width();
	const height = await screen.height();

	const config = initConfig(width, height, console.log);

	const machine = new Machine(startState, config);

	const iterationInterval = 190;

	let timeout = setTimeout(function createTimeout() {
		machine.iteration();

		timeout = setTimeout(createTimeout, iterationInterval);
	}, iterationInterval);

	switchState(machine);
};

const switchState = async (machine: Machine) => {
	await machine.switchState();
	switchState(machine);
};

start();
