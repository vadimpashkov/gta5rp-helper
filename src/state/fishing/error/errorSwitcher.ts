import { screen } from '@nut-tree/nut-js';

import { createParam } from '@utils/parameterFactory';
import { createCancelable } from '@utils/rejectablePromiseCreator';

import { startState } from '../start';
import { waitLmdState } from '../waitLmd';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const errorSwitcher: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { errorRegion } = config;
	const errorParam = createParam(errorRegion, 0.93);

	try {
		const error = await screen.find('error.png', errorParam);
		config.errorRegion = error;
		config.messanger(`Ошибка при поимке рыбы`);

		return startState;
	} catch {}

	return waitLmdState;
});
