import { findBackpackSwitch } from './findBackpackSwitch';

import { FishingState } from '../types';

export const findBackpackState: FishingState = {
	name: 'Идентификация рюкзака',
	description: 'Поиск рюкзака',
	switcher: findBackpackSwitch,
};
