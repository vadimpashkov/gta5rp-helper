import { startSwitch } from './startSwitch';

import { FishingState } from '../types';

export const startState: FishingState = {
	name: 'Конфигурация',
	description: 'Проходит конфигурация бота',
	switcher: startSwitch,
};
