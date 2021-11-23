import { findFishSwitch } from './findFishSwitch';

import { FishingState } from '../types';

export const findFishState: FishingState = {
	name: 'Идентификация рыбы',
	description: 'Смотрим, какая рыба поймана',
	switcher: findFishSwitch,
};
