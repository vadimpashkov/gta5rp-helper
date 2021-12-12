import { left, mouse, up, right, down } from '@nut-tree/nut-js';

import { FishingConfig, FishingIteration } from '../types';
import { createCancelable } from '../../../utils';

export const clickingIteration: FishingIteration = createCancelable<FishingConfig, void>(async (config) => {
	if (config.mouseCoordinate === null) {
		config.mouseCoordinate = await mouse.getPosition();
	}
	mouse.leftClick();

	const step = config.macrosStep + 1 >= config.macroses.length ? 0 : config.macrosStep + 1;
	const currentStep = config.currentMacros[step];

	const x = currentStep[0];
	const y = currentStep[1];

	if (x > 0) mouse.move(right(x));
	else mouse.move(left(x));

	if (y > 0) mouse.move(up(x));
	else mouse.move(down(x));
});
