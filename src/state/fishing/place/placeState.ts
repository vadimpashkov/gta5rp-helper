import { placeSwitch } from './placeSwitch';

import { FishingState } from '../types';

export const placeState: FishingState = {
	name: 'Поиск места для рыбалки',
	description: 'Ищем на экране место для рыбалки',
	switcher: placeSwitch,
};
