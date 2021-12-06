import { Fish, TotalFish } from '../../core';
import { getSessionFish } from '../../store';
import { createAxios } from '../../utils';
import { IpcEvent } from '../types';

export const giveMeTotalFishEvent: IpcEvent<void, { name: string; count: number }[]> = {
	name: 'giveMeTotalFish',
	handle: async (_, emit) => {
		const axios = createAxios();

		const response = await axios.get<{ name: string; count: number }[]>('fish');
		console.log(response.data);

		emit('setTotalFish', response.data);
	},
};

export const giveMeSessionFishEvent: IpcEvent<void, Fish[]> = {
	name: 'giveMeSessionFish',
	handle: (_, emit) => {
		emit('setSessionFish', getSessionFish());
	},
};
