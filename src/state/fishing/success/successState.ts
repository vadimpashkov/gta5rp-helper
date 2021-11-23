import { successSwitcher } from './successSwitcher';

import { FishingState } from '../types';

export const successState: FishingState = {
	name: 'Поймана ли рыба?',
	description: 'Проверяем, успешна ли поимана рыба',
	switcher: successSwitcher,
};
