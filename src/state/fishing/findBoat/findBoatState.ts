import { findBoatSwitch } from './findBoatSwitch';

import { FishingState } from '../types';

export const findBoatState: FishingState = {
	name: 'Ищем лодку',
	description: 'Поиск лодки для рыбы',
	switcher: findBoatSwitch,
};
