import { findFishSwitch } from './findFishSwitch';

import { FishingState } from '../types';

export const findFishState: FishingState = {
	name: 'Поиск пойманой рыбы',
	description: 'Ищем на экране текст о поимке рыбы',
	switcher: findFishSwitch,
};
