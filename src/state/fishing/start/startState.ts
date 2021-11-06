import { State } from '../../types';
import { startSwitch } from './startSwitch';

export const startState: State = {
	name: 'Начало бота',
	switcher: startSwitch,
};
