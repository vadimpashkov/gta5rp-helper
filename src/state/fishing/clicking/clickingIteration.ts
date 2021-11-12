import { mouse, up, right, down, left } from '@nut-tree/nut-js';

import { mouseClick } from '@utils/mouseClick';
import { getRandomIntInclusive } from '@utils/getRandomIntInclusive';

import { FishingIteration } from '@state/fishing/types';

export const clickingIteration: FishingIteration = async (config) => {
	const { clickingDirection: direction } = config;
	const moveSize = getRandomIntInclusive(80, 140);

	await mouse.move(
		direction === 'up'
			? up(moveSize)
			: direction === 'right'
			? right(moveSize)
			: direction === 'down'
			? down(moveSize)
			: left(moveSize),
	);

	mouseClick(config.startMousePosition.x, config.startMousePosition.y);

	config.clickingDirection =
		direction === 'up' ? 'right' : direction === 'right' ? 'down' : direction === 'down' ? 'left' : 'up';
	// config.clickingDirection = !direction;
};
