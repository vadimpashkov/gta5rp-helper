import { startSwitch } from './startSwitch';

import { FishingState } from '../types';

export const startState: FishingState = {
	name: 'Начало бота',
	switcher: startSwitch,
};
