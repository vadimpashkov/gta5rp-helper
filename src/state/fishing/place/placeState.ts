import { placeSwitch } from './placeSwitch';

import { FishingState } from '../types';

export const placeState: FishingState = {
	name: 'Идентификация "крючка"',
	description: 'Поиск места для рыбалки',
	switcher: placeSwitch,
	stopOnSoftExit: true,
};
