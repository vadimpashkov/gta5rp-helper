import { checkMouseSwitch } from './checkMouseSwitch';

import { FishingState } from '../types';

export const checkMouseState: FishingState = {
	name: 'Проверка на мышку на экране',
	description: 'Проверка на мышку на экране',
	switcher: checkMouseSwitch,
};
