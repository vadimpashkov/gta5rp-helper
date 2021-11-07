import { left, mouse, right } from '@nut-tree/nut-js';
import { getRandomIntInclusive } from '@utils/getRandomIntInclusive';
import { FishingIteration } from '../types';

export const clickingIteration: FishingIteration = async (config) => {
	const { clickingDirection: direction } = config;
	const moveSize = getRandomIntInclusive(100, 200);

	await mouse.move(direction ? left(moveSize) : right(moveSize));

	await mouse.leftClick();

	config.clickingDirection = !direction;
};
