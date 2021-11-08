import { left, mouse, right } from '@nut-tree/nut-js';
import { mouseClick } from '@utils/mouseClick';

import { getRandomIntInclusive } from '@utils/getRandomIntInclusive';
import { FishingIteration } from '../types';

export const clickingIteration: FishingIteration = async (config) => {
	const { clickingDirection: direction } = config;
	const moveSize = getRandomIntInclusive(100, 200);

	await mouse.move(direction ? left(moveSize) : right(moveSize));

	mouseClick(config.startMousePosition.x, config.startMousePosition.y);

	config.clickingDirection = !direction;
};
