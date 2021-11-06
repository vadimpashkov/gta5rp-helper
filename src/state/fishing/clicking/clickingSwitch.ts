import { waitForImageGone } from '@utils/waitForImageGone';
import { createParam } from '@utils/parameterFactory';

import { waitLmdState } from '../waitLmd';

import { Config, StateSwitch } from '../../types';

export const clickingSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.99);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	return waitLmdState;
};
