import { mouseClick } from '@utils/mouseClick';

import { FishingIteration } from '../types';

export const clickingIteration: FishingIteration = async (config) => {
	const { clickingDirection: direction } = config;
	try {
		mouseClick(config.startMousePosition.x, config.startMousePosition.y);
	} catch (e) {
		console.log(e);
	}

	config.clickingDirection = !direction;
};
