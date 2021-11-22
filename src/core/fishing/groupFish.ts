import { Fish, GroupedFish } from './types';

export const groupFish = (fish: Fish[]): GroupedFish[] => {
	const result: GroupedFish[] = [];

	fish.forEach((localFish) => {
		const foundFish = result.filter((f) => f.name === localFish.name);

		if (foundFish.length > 0) {
			foundFish[0].count += 1;
			foundFish[0].maxPrice += localFish.maxPrice;
			foundFish[0].minPrice += localFish.minPrice;
			foundFish[0].weightTotal += localFish.weight;
		} else {
			result.push({
				name: localFish.name,
				count: 1,
				weightTotal: localFish.weight,
				weightForOne: localFish.weight,
				minPrice: localFish.minPrice,
				maxPrice: localFish.maxPrice,
			});
		}
	});

	return result;
};
