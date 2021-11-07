import { clickingSwitch } from './clickingSwitch';
import { clickingIteration } from './clickingIteration';

import { FishingState } from '../types';

export const clickingState: FishingState = {
	name: 'Ловим рыбу',
	description: 'Тыкаем на ЛКМ пока на экране есть мышка',
	switcher: clickingSwitch,
	iteration: clickingIteration,
};
