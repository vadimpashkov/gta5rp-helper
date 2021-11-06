import { throwState } from '../trow';
import { Config, StateSwitch } from '../types';
import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';

export const startSwitch: StateSwitch = async (config: Config) => {
	const { fishingPlaceRegion } = config;
	const fishingPlaceSearchParam = createParam(fishingPlaceRegion, 0.93);
	const fishingPlaceIndicator = await waitForImage('fishingPlace.png', 10000, fishingPlaceSearchParam);

	config.fishingPlaceRegion = fishingPlaceIndicator;

	return throwState;
};
