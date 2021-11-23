import { checkMouseSwitch } from './checkMouseSwitch';

import { FishingState } from '../types';

export const checkMouseState: FishingState = {
	name: 'Идентификация индикатора мыши',
	description: 'Поиск мыши на экране',
	switcher: checkMouseSwitch,
};
