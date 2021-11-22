import { GroupedFish } from './types';

export const sortFish = (fish: GroupedFish[]): GroupedFish[] => {
	const result = [...fish];

	result.sort((a, b) => b.count - a.count);

	return result;
};
