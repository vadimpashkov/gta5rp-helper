import { State } from '../../types';
import { throwSwitch } from './thowSwitch';

export const throwState: State = {
	name: 'Закидываем удочку',
	switcher: throwSwitch,
};
