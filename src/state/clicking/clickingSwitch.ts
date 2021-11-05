import { screen as userScreen, OptionalSearchParameters } from '@nut-tree/nut-js';

import { waitLmdState } from '../waitLmd';
import { throwState } from '../trow';
import { Config, StateSwitch } from '../types';

export const clickingSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion, successRegion } = config;

	const lmbSearchParam = new OptionalSearchParameters(lmbRegion, 0.93);
	const successSearchParam = new OptionalSearchParameters(successRegion, 0.93);

	const works = [
		new Promise<string>(async (resolve) => {
			const lmbIndicator = await userScreen.waitFor('hook.png', 50000, lmbSearchParam);

			config.lmbRegion = lmbIndicator;

			resolve('hook');
		}),
		new Promise<string>(async (resolve) => {
			const successInditacor = await userScreen.waitFor('success.png', 50000, successSearchParam);

			config.successRegion = successInditacor;

			resolve('success');
		}),
	];

	const resolvedPromise = await Promise.any(works);

	switch (resolvedPromise) {
		case 'hook':
			return waitLmdState;

		default:
			return throwState;
	}
};
