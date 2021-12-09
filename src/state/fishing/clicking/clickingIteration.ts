import { mouse } from '@nut-tree/nut-js';

import { FishingConfig, FishingIteration } from '../types';
import { createCancelable, getRandomNumberInclusive } from '../../../utils';

export const clickingIteration: FishingIteration = createCancelable<FishingConfig, void>(async (config) => {
	const randomX = getRandomNumberInclusive(-2, 2);
	const randomY = getRandomNumberInclusive(-2, 2);

	mouse.leftClick();

	mouse.move([{ x: config.mouseCoordinate.x + randomX, y: config.mouseCoordinate.y + randomY }]);
});
