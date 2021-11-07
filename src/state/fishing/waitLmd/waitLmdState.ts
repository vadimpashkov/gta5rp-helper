import { waitLmdSwitch } from './waitLmdSwitch';

import { FishingState } from '../types';

export const waitLmdState: FishingState = {
	name: 'Ждем левой кнопки мыши',
	description: 'Ждем пока на экране появится красная кнопка мыши',
	switcher: waitLmdSwitch,
};
