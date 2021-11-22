import { AvailableFish, NotFoundFish } from './fishes';
import { Fish } from './types';

import { inaccurateStringComparison } from '../../utils/inaccurateStringComparison';

export const findFish = (text: string) => {
	const result = AvailableFish.reduce(
		(acum, fish) => {
			const stringComparison = inaccurateStringComparison(fish.name, text.split(':')[1]);

			if (stringComparison.distance < acum.mostAccurateDistance) {
				return {
					fish,
					mostAccurateDistance: stringComparison.distance,
				};
			}

			return acum;
		},
		{ fish: NotFoundFish, mostAccurateDistance: Number.MAX_VALUE },
	);

	if (result.mostAccurateDistance >= 10) throw Error('Ошибка распозновании рыбы');

	return result.fish;
};
