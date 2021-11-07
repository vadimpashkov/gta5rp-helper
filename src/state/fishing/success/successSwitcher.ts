import { createParam } from '@utils/parameterFactory';
import { waitForImage } from '@utils/waitForImage';

import { startState } from '../start';
import { errorState } from '../error';

import { FishingSwitch } from '../types';

let foundFish = 0;

export const successSwitcher: FishingSwitch = async (config) => {
	const { successRegion } = config;
	const successParam = createParam(successRegion, 0.83);

	try {
		const success = await waitForImage('successful.png', 1200, successParam);
		config.successRegion = success;
		foundFish++;
		config.messanger(`Поймано рыб: ${foundFish}`);

		return startState;
	} catch {}

	return errorState;
};
