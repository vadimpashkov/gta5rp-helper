import { mouse, right, left, Point } from '@nut-tree/nut-js';

import { FishingConfig, FishingIteration } from '../types';
import { createCancelable } from '../../../utils';

export const clickingIteration: FishingIteration = createCancelable<FishingConfig, void>(async (config) => {
	const { mouseDirection } = config;

	mouse.leftClick();

	// mouse.setPosition(mouseDirection ? new Point(960, 540) : new Point(961, 540));
	mouse.move(mouseDirection ? left(1) : right(1));
	// mouse.setPosition(mouseDirection ? new Point(540, 960) : new Point(541, 960));

	config.mouseDirection = !mouseDirection;
});
