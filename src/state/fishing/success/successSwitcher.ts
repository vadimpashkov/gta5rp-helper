import { createParam } from '../../../utils/parameterFactory';
import { waitForImage } from '../../../utils/waitForImage';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';

import { findFishState } from '../findFish';
import { errorState } from '../error';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const successSwitcher: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { successRegion } = config;
	const successParam = createParam(successRegion, 0.7);

	try {
		const success = await waitForImage('successful.png', 2000, successParam);

		config.successRegion = success;

		return findFishState;
	} catch (error) {
		console.error(error);
	}

	return errorState;
});
