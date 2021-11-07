import { errorSwitcher } from './errorSwitcher';

import { FishingState } from '../types';

export const errorState: FishingState = {
	name: 'Ошибка при поимке рыбы',
	description: 'Отлавливаем ошибку при ловле рыбы',
	switcher: errorSwitcher,
};
