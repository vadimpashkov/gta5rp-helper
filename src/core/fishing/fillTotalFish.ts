import { TotalFish } from './types';

export const fillTotalFish = <T>(value: T): TotalFish<T> => ({
	Sterlyad: value,
	Skat: value,
	Losos: value,
	Tunets: value,
	Malma: value,
	Fugu: value,
	Osetr: value,
	BlackAmour: value,
});
