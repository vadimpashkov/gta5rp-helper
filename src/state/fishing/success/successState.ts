import { successSwitcher } from './successSwitcher';

import { FishingState } from '../types';

export const successState: FishingState = {
	name: 'Проверка на успешную поимку рыбы',
	switcher: successSwitcher,
};
