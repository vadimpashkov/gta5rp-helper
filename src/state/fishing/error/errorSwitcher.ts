import { screen } from '@nut-tree/nut-js';

import { createParam } from '@utils/parameterFactory';

import { startState } from '../start';
import { waitLmdState } from '../waitLmd';

import { FishingSwitch } from '../types';

export const errorSwitcher: FishingSwitch = async (config) => {
	const { errorRegion } = config;
	const errorParam = createParam(errorRegion, 0.93);

	try {
		const error = await screen.find('error.png', errorParam);
		config.errorRegion = error;
		config.messanger(`Ошибка при поимке рыбы`);

		return startState;
	} catch {}

	return waitLmdState;
};
