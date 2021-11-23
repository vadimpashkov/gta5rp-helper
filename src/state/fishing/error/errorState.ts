import { errorSwitcher } from './errorSwitcher';

import { FishingState } from '../types';

export const errorState: FishingState = {
	name: 'Произошла ошибка',
	description: 'Произошла ошибка при поимке рыбы',
	switcher: errorSwitcher,
};
