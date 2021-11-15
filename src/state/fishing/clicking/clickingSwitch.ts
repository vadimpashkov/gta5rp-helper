import { waitForImageGone } from '@utils/waitForImageGone';
import { createParam } from '@utils/parameterFactory';
import { createCancelable } from '@utils/rejectablePromiseCreator';

import { successState } from '@state/fishing/success';
import { FishingConfig, FishingState, FishingSwitch } from '@state/fishing/types';

export const clickingSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.99);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	return successState;
});
