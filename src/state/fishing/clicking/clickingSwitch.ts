import { waitForImageGone, createParam, createCancelable } from '../../../utils';

import { checkMouseState } from '../checkMouse';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const clickingSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.8);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	return checkMouseState;
});
