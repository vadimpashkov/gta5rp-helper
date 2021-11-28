import { storeFishSwitch } from './storeFishSwitch';

import { FishingState } from '../types';

export const storeFishState: FishingState = {
	name: 'Складируем рыбу',
	description: 'Решаем куда положить рыбу',
	switcher: storeFishSwitch,
	stopOnSoftExit: true,
};
