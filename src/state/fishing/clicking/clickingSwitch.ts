import { waitForImageGone } from '../../../utils/waitForImageGone';
import { createParam } from '../../../utils/parameterFactory';
import { createDeferredCanceled } from '../../../utils/rejectablePromiseCreator';

import { checkMouseState } from '../checkMouse';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const clickingSwitch: FishingSwitch = createDeferredCanceled<FishingConfig, FishingState>(async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.99);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	return checkMouseState;
});
