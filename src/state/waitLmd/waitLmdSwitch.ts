import { screen as userScreen, OptionalSearchParameters } from '@nut-tree/nut-js';

import { clickingState } from '../clicking';
import { Config, StateSwitch } from '../types';

export const waitLmdSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion } = config;

	const lmbSearchParam = new OptionalSearchParameters(lmbRegion, 0.93);
	const lmbIndicator = await userScreen.waitFor('lmb.png', 50000, lmbSearchParam);

	config.lmbRegion = lmbIndicator;

	return clickingState;
};
