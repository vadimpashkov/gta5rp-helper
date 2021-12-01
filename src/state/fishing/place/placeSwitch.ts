import { waitForImage, createCancelable, createParam } from '../../../utils';

import { throwState } from '../trow';
import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const placeSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { fishingPlaceRegion } = config;
	const fishingPlaceSearchParam = createParam(fishingPlaceRegion, 0.7);
	const fishingPlaceIndicator = await waitForImage('fishingPlace.png', 10000, fishingPlaceSearchParam);

	config.fishingPlaceRegion = fishingPlaceIndicator;

	return throwState;
});
