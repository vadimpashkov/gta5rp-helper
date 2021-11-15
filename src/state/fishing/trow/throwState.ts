import { throwSwitch } from './thowSwitch';

import { FishingState } from '@state/fishing/types';

export const throwState: FishingState = {
	name: 'Закидываем удочку',
	description: 'Закидываем удочку',
	switcher: throwSwitch,
};
