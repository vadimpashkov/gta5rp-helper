import { createParam, waitForImage, createCancelable } from '../../../utils';

import { findFishState } from '../findFish';
import { errorState } from '../error';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const successSwitcher: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { successRegion } = config;
	const successParam = createParam(successRegion, 0.7);

	config.mouseCoordinate = null;

	try {
		const success = await waitForImage('successful.png', 2000, successParam);

		config.successRegion = success;

		return findFishState;
	} catch (error) {
		console.error(error);
	}

	return errorState;
});
