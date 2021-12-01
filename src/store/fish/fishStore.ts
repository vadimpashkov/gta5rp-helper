import { Fish, initTotalFish, TotalFish } from '../../core';
import { store } from '../innerStore';

export const getTotalFish = (): TotalFish<number> => (store.get('totalFish') as TotalFish<number>) || initTotalFish();

export const addFish = (fish: Fish) => {
	const totalFish = getTotalFish() as { [key: string]: number };
	const fishName = fish.storedName;
	store.set('totalFish', { ...totalFish, [fishName]: totalFish[fishName] + 1 });
};
