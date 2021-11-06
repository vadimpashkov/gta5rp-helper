import { keyboard, Key, mouse, left, right, down, up } from '@nut-tree/nut-js';

import { StateSwitch } from '../../types';
import { waitLmdState } from '../waitLmd';

export const throwSwitch: StateSwitch = () =>
	new Promise(async (resolve) => {
		await mouse.move(left(100));
		await mouse.move(up(100));
		await mouse.move(down(100));
		await mouse.move(right(100));
		await keyboard.pressKey(Key.Backspace);

		setTimeout(async () => {
			await keyboard.pressKey(Key.Backspace);

			resolve(waitLmdState);
		}, 1500);
	});
