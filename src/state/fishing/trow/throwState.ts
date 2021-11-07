import { throwSwitch } from './thowSwitch';

import { FishingState } from '../types';

export const throwState: FishingState = {
	name: 'Закидываем удочку',
	switcher: throwSwitch,
};
