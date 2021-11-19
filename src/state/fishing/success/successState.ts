import { successSwitcher } from './successSwitcher';

import { FishingState } from '../types';

export const successState: FishingState = {
	name: 'Проверка на успешную поимку рыбы',
	description: 'Проверяем на экране картинку успешной поимки рыбы',
	switcher: successSwitcher,
};
