import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';
import { abortMany } from '@utils/abort';

import { clickingState } from '../clicking';
import { startState } from '../start';

import { Config, State, StateSwitch } from '../../types';

export const waitLmdSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion, successRegion, errorRegion } = config;

	const successParam = createParam(successRegion, 0.93);
	const lmbSearchParam = createParam(lmbRegion, 0.99);
	const errorParam = createParam(errorRegion, 0.93);

	const workers = [
		// Поймали рыбу
		new Promise<State>(async (resolve) => {
			try {
				const success = await waitForImage('success.png', 50000, successParam);

				config.successRegion = success;

				resolve(startState);
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
				const error = await waitForImage('error.png', 50000, errorParam);

				config.errorRegion = error;

				resolve(startState);
			} catch {}
		}),
	];

	const resolved = await Promise.any(workers);

	abortMany(successParam, lmbSearchParam, errorParam);

	return resolved;
};
