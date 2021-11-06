import { waitLmdState } from '../waitLmd';
import { throwState } from '../trow';
import { Config, StateSwitch } from '../types';
import { waitForImage } from '../../utils/waitForImage';
import { createParam } from '../../utils/parameterFactory';

export const clickingSwitch: StateSwitch = async (config: Config) => {
	const { hookRegion, successRegion, errorRegion } = config;

	const lmbSearchParam = createParam(hookRegion, 0.93);
	const successSearchParam = createParam(successRegion, 0.93);
	const errorSearchParam = createParam(errorRegion, 0.93);

	const works = [
		new Promise<string>(async (resolve) => {
			const lmbIndicator = await waitForImage('hook.png', 50000, lmbSearchParam);

			config.hookRegion = lmbIndicator;

			resolve('hook');
		}),
		new Promise<string>(async (resolve) => {
			const successInditacor = await waitForImage('success.png', 50000, successSearchParam);

			config.successRegion = successInditacor;

			resolve('success');
		}),
		new Promise<string>(async (resolve) => {
			const errorIndicator = await waitForImage('error.png', 50000, errorSearchParam);

			config.errorRegion = errorIndicator;

			resolve('error');
		}),
	];

	const resolvedPromise = await Promise.any(works);

	if (resolvedPromise === 'hook') return waitLmdState;

	return throwState;
};
