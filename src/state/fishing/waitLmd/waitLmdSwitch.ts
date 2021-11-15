import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';
import { createCancelable } from '@utils/rejectablePromiseCreator';

import { clickingState } from '@state/fishing/clicking';
import { startState } from '@state/fishing/start';
import { FishingConfig, FishingState } from '@state/fishing/types';

export const waitLmdSwitch = createCancelable<FishingConfig, FishingState>(async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.97);

	try {
		const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);
		config.lmbRegion = lmbIndicator;

		return clickingState;
	} catch {
		return startState;
	}
});
