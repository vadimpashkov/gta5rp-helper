import { clickingSwitch } from './clickingSwitch';
import { clickingIteration } from './clickingIteration';

import { FishingState } from '../types';

export const clickingState: FishingState = {
	name: 'Ловим рыбу',
	description: 'Клик ЛКМ, пока есть индикатор',
	switcher: clickingSwitch,
	iteration: clickingIteration,
};
