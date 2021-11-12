import { waitForImage } from '@utils/waitForImage';
import { createParam } from '@utils/parameterFactory';

import { clickingState } from '@state/fishing/clicking';
import { startState } from '@state/fishing/start';
import { FishingSwitch } from '@state/fishing/types';

export const waitLmdSwitch: FishingSwitch = async (config) => {
	const { lmbRegion } = config;
	const lmbSearchParam = createParam(lmbRegion, 0.97);

	try {
		const lmbIndicator = await waitForImage('lmb.png', 65000, lmbSearchParam);
		config.lmbRegion = lmbIndicator;

		return clickingState;
	} catch {
		return startState;
	}
};
