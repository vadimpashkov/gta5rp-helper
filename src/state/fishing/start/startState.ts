import { startSwitch } from './startSwitch';

import { FishingState } from '@state/fishing/types';

export const startState: FishingState = {
	name: 'Начало бота',
	description: 'Начало бота',
	switcher: startSwitch,
};
