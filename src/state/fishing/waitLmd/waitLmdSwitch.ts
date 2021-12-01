import { waitForImage, createParam, createCancelable } from '../../../utils';

import { clickingState } from '../clicking';
import { placeState } from '../place';

import { FishingConfig, FishingState } from '../types';

export const waitLmdSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.97);

	try {
		const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);
		config.lmbRegion = lmbIndicator;

		return clickingState;
	} catch {
		return placeState;
	}
});
