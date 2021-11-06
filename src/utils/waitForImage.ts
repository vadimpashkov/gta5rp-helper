import { OptionalSearchParameters, Region, screen } from '@nut-tree/nut-js';
import { timeout } from './timeout';

export const waitForImage = (image: string, timeToOut: number, param: OptionalSearchParameters) =>
	timeout<Region>(
		100,
		timeToOut,
		() => {
			return screen.find(image, param);
		},
		{ signal: param.abort },
	);
