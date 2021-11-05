import { OptionalSearchParameters, screen as userScreen } from '@nut-tree/nut-js';

import { throwState } from '../trow';
import { Config, StateSwitch } from '../types';

export const startSwitch: StateSwitch = async (config: Config) => {
	const { fishingPlaceRegion } = config;
	const fishingPlaceSearchParam = new OptionalSearchParameters(fishingPlaceRegion, 0.93);
	const fishingPlaceIndicator = await userScreen.waitFor('fishingPlace.png', 10000, fishingPlaceSearchParam);

	config.fishingPlaceRegion = fishingPlaceIndicator;

	return throwState;
};
