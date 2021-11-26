import { findBoatSwitch } from './findBoatSwitch';

import { FishingState } from '../types';

export const findBoatState: FishingState = {
	name: 'Идентификация лодки',
	description: 'Поиск багажника лодки',
	switcher: findBoatSwitch,
	stopOnSoftExit: true,
};
