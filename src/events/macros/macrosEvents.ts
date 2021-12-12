import { writeMouse } from '../../utils';

import { IpcEvent } from '../types';

export const macroStartEvent: IpcEvent<number, number[][]> = {
	name: 'writeMacro',
	handle: async (timeToWrite, emit) => {
		const resultArray: number[][] = [];
		const gap = 10;

		const interval = setInterval(() => {
			writeMouse(resultArray);
		}, gap);

		setTimeout(() => {
			clearInterval(interval);

			emit('setMacro', resultArray);
		}, timeToWrite);
	},
};
