import { State } from '../types';
import { waitLmdSwitch } from './waitLmdSwitch';

export const waitLmdState: State = {
	name: 'Ждем появление левой книпки мыши',
	switcher: waitLmdSwitch,
};
