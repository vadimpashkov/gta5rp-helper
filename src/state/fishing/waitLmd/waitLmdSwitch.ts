import { mouse } from '@nut-tree/nut-js';

import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';
import { abortMany } from '@utils/abort';

import { clickingState } from '../clicking';
import { startState } from '../start';

import { Config, State, StateSwitch } from '../../types';

let foundFish = 0;

export const waitLmdSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion, successRegion, errorRegion } = config;
	const successParam = createParam(successRegion, 0.93);
	const lmbSearchParam = createParam(lmbRegion, 0.99);
	const errorParam = createParam(errorRegion, 0.93);

	const workers = [
		// Поймали рыбу
		new Promise<State>(async (resolve) => {
			try {
				if (!config.startedInLast10sec) {
					const success = await waitForImage('successful.png', 50000, successParam);

					config.successRegion = success;
					config.startedInLast10sec = true;

					setTimeout(() => {
						config.startedInLast10sec = false;
					}, 10000);

					foundFish++;
					config.messanger(`Поймано рыб: ${foundFish}`);

					// mouse.move(config.startMousePosition);

					resolve(startState);
				}
			} catch {}
		}),
		// Нужно поймать рыбу
		new Promise<State>(async (resolve) => {
			try {
				const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);

				config.lmbRegion = lmbIndicator;

				resolve(clickingState);
			} catch {}
		}),
		// Не получилось поймать рыбу либо кончилась приманка
		new Promise<State>(async (resolve) => {
			try {
				if (!config.startedInLast10sec) {
					const error = await waitForImage('error.png', 50000, errorParam);

					config.errorRegion = error;
					config.startedInLast10sec = true;

					setTimeout(() => {
						config.startedInLast10sec = false;
					}, 10000);

					resolve(startState);
				}
			} catch {}
		}),
	];

	const resolved = await Promise.any(workers);

	abortMany(successParam, lmbSearchParam, errorParam);

	return resolved;
};
