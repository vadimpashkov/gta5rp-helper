import { AvailableFish } from './fishes';
import { GroupedFish } from './types';

export const addDefaultFish = (fish: GroupedFish[]): GroupedFish[] => {
	const fishNames = fish.map((x) => x.name);
	const result = [...fish];

	AvailableFish.forEach((item) => {
		if (!fishNames.includes(item.name)) {
			result.push({
				name: item.name,
				maxPrice: 0,
				minPrice: 0,
				weightForOne: item.weight,
				weightTotal: 0,
				count: 0,
				color: 'var(--color-primary)',
			});
		}
	});

	return result;
};
