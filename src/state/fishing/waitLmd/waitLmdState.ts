import { waitLmdSwitch } from './waitLmdSwitch';

import { FishingState } from '../types';

export const waitLmdState: FishingState = {
	name: 'Ожидание ЛКМ',
	description: 'Поиск левой (красной) кнопки мыши',
	switcher: waitLmdSwitch,
};
