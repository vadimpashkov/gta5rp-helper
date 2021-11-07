import { waitLmdSwitch } from './waitLmdSwitch';

import { FishingState } from '../types';

export const waitLmdState: FishingState = {
	name: 'Ждем появление левой кнопки мыши',
	switcher: waitLmdSwitch,
};
