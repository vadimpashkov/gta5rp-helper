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

	setInterval(machine.iteration, 10);

	switchState(machine);
};

const switchState = async (machine: Machine) => {
	await machine.switchState();

	switchState(machine);
};

start();
