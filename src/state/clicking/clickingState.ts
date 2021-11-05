import { State } from '../types';
import { clickingSwitch } from './clickingSwitch';
import { clickingIteration } from './clickingIteration';

export const clickingState: State = {
	name: 'Ловим рыбу',
	switcher: clickingSwitch,
	iteration: clickingIteration,
};
