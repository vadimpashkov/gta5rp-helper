import { waitForImageGone } from '@utils/waitForImageGone';
import { createParam } from '@utils/parameterFactory';

import { successState } from '../success';

import { FishingSwitch } from '../types';

export const clickingSwitch: FishingSwitch = async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.99);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	return successState;
};
