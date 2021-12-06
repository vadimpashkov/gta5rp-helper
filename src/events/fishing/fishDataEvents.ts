import { Fish, TotalFish } from '../../core';
import { getTotalFish, getSessionFish } from '../../store';
import { IpcEvent } from '../types';

export const giveMeTotalFishEvent: IpcEvent<void, TotalFish<number>> = {
	name: 'giveMeTotalFish',
	handle: (_, emit) => {
		emit('setTotalFish', getTotalFish());
	},
};

export const giveMeSessionFishEvent: IpcEvent<void, Fish[]> = {
	name: 'giveMeSessionFish',
	handle: (_, emit) => {
		emit('setSessionFish', getSessionFish());
	},
};
