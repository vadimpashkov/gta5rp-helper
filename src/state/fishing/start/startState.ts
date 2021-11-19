import { startSwitch } from './startSwitch';

import { FishingState } from '../types';

export const startState: FishingState = {
	name: 'Запуск',
	description: 'Начало бота',
	switcher: startSwitch,
};
