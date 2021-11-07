import { screen } from '@nut-tree/nut-js';

import { createParam } from '@utils/parameterFactory';

import { startState } from '../start';
import { errorState } from '../error';

import { FishingSwitch } from '../types';

let foundFish = 0;

export const successSwitcher: FishingSwitch = async (config) => {
	const { successRegion } = config;
	const successParam = createParam(successRegion, 0.93);

	try {
		const success = await screen.find('successful.png', successParam);
		config.successRegion = success;
		foundFish++;
		config.messanger(`Поймано рыб: ${foundFish}`);

		return startState;
	} catch {}

	return errorState;
};
