import { throwSwitch } from './thowSwitch';

import { FishingState } from '../types';

export const throwState: FishingState = {
	name: 'Закидываем удочку',
	description: 'Нашимаем кнопку, для закидывания удочки',
	switcher: throwSwitch,
	stopOnSoftExit: true,
};
