import { Fish, initTotalFish } from '../../core';
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

export const getTotalFish = (): TotalFish => (store.get('totalFish') as TotalFish) || initTotalFish();

export const addFish = (fish: Fish) => {
	const totalFish = getTotalFish() as { [key: string]: number };
	const fishName = fish.storedName;
	store.set('totalFish', { ...totalFish, [fishName]: totalFish[fishName] + 1 });
};
