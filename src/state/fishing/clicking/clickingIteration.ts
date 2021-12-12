import { left, mouse, up } from '@nut-tree/nut-js';

import { FishingConfig, FishingIteration } from '../types';
import { createCancelable, getRandomNumberInclusive } from '../../../utils';

export const clickingIteration: FishingIteration = createCancelable<FishingConfig, void>(async (config) => {
	const randomX = getRandomNumberInclusive(-1, 1);
	const randomY = getRandomNumberInclusive(-1, 1);

	mouse.leftClick();

	mouse.move(left(randomX));
	mouse.move(up(randomY));
});
