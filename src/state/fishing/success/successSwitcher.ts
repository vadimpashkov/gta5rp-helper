import { createParam } from '@utils/parameterFactory';
import { waitForImage } from '@utils/waitForImage';
import { createCancelable } from '@utils/rejectablePromiseCreator';

import { startState } from '@state/fishing/start';
import { errorState } from '@state/fishing/error';
import { FishingConfig, FishingState, FishingSwitch } from '@state/fishing/types';

let foundFish = 0;

export const successSwitcher: FishingSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { successRegion } = config;
	const successParam = createParam(successRegion, 0.8);

	try {
		const success = await waitForImage('successful.png', 1200, successParam);
		config.successRegion = success;
		foundFish++;
		config.messanger(`Поймано рыб: ${foundFish}`);

		return startState;
	} catch {}

	return errorState;
});
