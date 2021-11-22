import { GroupedFish } from './types';

export const sortFish = (fish: GroupedFish[]): GroupedFish[] => {
	const result = [...fish];

	result.sort((a, b) => a.count - b.count);

	return result;
};
