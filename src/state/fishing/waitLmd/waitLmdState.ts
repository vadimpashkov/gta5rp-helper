import { waitLmdSwitch } from './waitLmdSwitch';

import { FishingState } from '@state/fishing/types';

export const waitLmdState: FishingState = {
	name: 'Ждем левой кнопки мыши',
	description: 'Ждем пока на экране появится красная кнопка мыши',
	switcher: waitLmdSwitch,
};
