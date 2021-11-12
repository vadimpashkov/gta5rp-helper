import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';

import { throwState } from '@state/fishing/trow';
import { FishingSwitch } from '@state/fishing/types';

export const startSwitch: FishingSwitch = async (config) => {
	const { fishingPlaceRegion } = config;
	const fishingPlaceSearchParam = createParam(fishingPlaceRegion, 0.87);
	const fishingPlaceIndicator = await waitForImage('fishingPlace.png', 10000, fishingPlaceSearchParam);

	config.fishingPlaceRegion = fishingPlaceIndicator;

	return throwState;
};
