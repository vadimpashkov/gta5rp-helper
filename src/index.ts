import 'module-alias/register';
import { screen } from '@nut-tree/nut-js';
import { Machine } from './state';
import { startState } from './state/fishing/start';
import { initConfig } from './initConfig';

screen.config.resourceDirectory += `/build/img/`;

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
	try {
		await machine.switchState();
		switchState(machine);
	} catch {
		switchState(machine);
	}
};

start();
