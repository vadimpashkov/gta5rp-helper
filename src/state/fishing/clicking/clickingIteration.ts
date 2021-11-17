import { mouse, up, right, down, left } from '@nut-tree/nut-js';

import { mouseClick } from '@utils/mouseClick';
import { getRandomIntInclusive } from '@utils/getRandomIntInclusive';
import { FishingConfig, FishingIteration } from '@state/fishing/types';
import { createCancelable } from '@utils/rejectablePromiseCreator';

export const clickingIteration: FishingIteration = createCancelable<FishingConfig, void>(async (config) => {
	const { clickingDirection: direction } = config;
	const moveSize = getRandomIntInclusive(30, 50);

	mouse.move(
		direction === 'up'
			? up(moveSize)
			: direction === 'right'
			? right(moveSize)
			: direction === 'down'
			? down(moveSize)
			: left(moveSize),
	);

	await mouse.leftClick();

	// mouseClick(config.startMousePosition.x, config.startMousePosition.y);

	config.clickingDirection =
		direction === 'up' ? 'right' : direction === 'right' ? 'down' : direction === 'down' ? 'left' : 'up';
});
