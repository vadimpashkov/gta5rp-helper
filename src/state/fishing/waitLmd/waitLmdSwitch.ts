import { waitForImage } from 'utils/waitForImage';
import { createParam } from 'utils/parameterFactory';

import { clickingState } from '../clicking';

import { FishingSwitch } from '../types';

export const waitLmdSwitch: FishingSwitch = async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.99);

	const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);

	config.lmbRegion = lmbIndicator;

	return clickingState;
};
