import { clickingState } from '../clicking';
import { Config, StateSwitch } from '../types';
import { waitForImage } from '../../utils/waitForImage';
import { createParam } from '../../utils/parameterFactory';

export const waitLmdSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion } = config;

	const lmbSearchParam = createParam(lmbRegion, 0.93);
	const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);

	config.lmbRegion = lmbIndicator;

	return clickingState;
};
