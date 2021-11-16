import { keyboard, Key } from '@nut-tree/nut-js';

import { createCancelable } from '@utils/rejectablePromiseCreator';

import { waitLmdState } from '@state/fishing/waitLmd';
import { FishingConfig, FishingState, FishingSwitch } from '@state/fishing/types';

export const throwSwitch: FishingSwitch = createCancelable<FishingConfig, FishingState>(async () => {
	await keyboard.type(Key.Backspace);

	return waitLmdState;
});
