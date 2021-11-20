import { Fish } from '../../core';
import { store } from '../innerStore';

type TotalFish = {
	Sterlyad: number;
	Losos: number;
	Osetr: number;
	BlackAmour: number;
	Skat: number;
	Tunets: number;
	Malma: number;
	Fugu: number;
};

export const getTotalFish = (): TotalFish =>
	(store.get('totalFish') as TotalFish) || {
		Sterlyad: 0,
		Losos: 0,
		Osetr: 0,
		BlackAmour: 0,
		Skat: 0,
		Tunets: 0,
		Malma: 0,
		Fugu: 0,
	};

export const addFish = (fish: Fish) => {
	const totalFish = getTotalFish() as { [key: string]: number };
	const fishName = fish.storedName;
	store.set('totalFish', { ...totalFish, [fishName]: totalFish[fishName]++ });
};
