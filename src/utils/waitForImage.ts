import { OptionalSearchParameters, Region, screen } from '@nut-tree/nut-js';
import { timeout } from './timeout';
import { cancelable } from './rejectablePromiseCreator';

export const waitForImage = cancelable((image: string, timeToOut: number, param: OptionalSearchParameters) =>
	timeout<Region>(
		15,
		timeToOut,
		() => {
			const found = screen.find(image, param);
			return found;
		},
		{ signal: param.abort },
	));
