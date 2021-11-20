import { findBackpackSwitch } from './findBackpackSwitch';

import { FishingState } from '../types';

export const findBackpackState: FishingState = {
	name: 'Поиск рюкзака',
	description: 'Поиск рюкзака и определение его размера',
	switcher: findBackpackSwitch,
};
