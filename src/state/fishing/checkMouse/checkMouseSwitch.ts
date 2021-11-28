import { waitForImage } from '../../../utils/waitForImage';
import { createParam } from '../../../utils/parameterFactory';
import { createCancelable } from '../../../utils/rejectablePromiseCreator';

import { waitLmdState } from '../waitLmd';
import { successState } from '../success';

import { FishingConfig, FishingState, FishingSwitch } from '../types';

export const checkMouseSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(
	(config) =>
		new Promise((resolve) => {
			// Изображение ошибки появляется слишком быстро
			setTimeout(async () => {
				const { mouseRegion } = config;
				const lmbSearchParam = createParam(mouseRegion, 0.8);

				try {
					const region = await waitForImage('mouse.png', 1000, lmbSearchParam);
					config.mouseRegion = region;
					resolve(waitLmdState);
				} catch {
					resolve(successState);
				}
			}, 300);
		}),
);
