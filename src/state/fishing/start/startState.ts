import { startSwitch } from './startSwitch';

import { FishingState } from '@state/fishing/types';

export const startState: FishingState = {
	name: 'Запуск',
	description: 'Начало бота',
	switcher: startSwitch,
};
