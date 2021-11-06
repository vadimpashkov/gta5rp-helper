import 'module-alias/register';
import { screen } from '@nut-tree/nut-js';
import { Machine } from './state';
import { startState } from './state/start';
import { initConfig } from './initConfig';

screen.config.resourceDirectory += `/build/img/`;

const start = async () => {
	const width = await screen.width();
	const height = await screen.height();

	const config = initConfig(width, height);

	const machine = new Machine(startState, config, console.log);

	let timeout = setTimeout(function createTimeout() {
		machine.iteration();

		timeout = setTimeout(createTimeout, 150);
	}, 150);

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
