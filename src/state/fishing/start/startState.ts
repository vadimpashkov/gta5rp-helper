import { startSwitch } from './startSwitch';

import { FishingState } from '../types';

export const startState: FishingState = {
	name: 'Конфигурация бота',
	description: 'Конфигурация бота',
	switcher: startSwitch,
};
