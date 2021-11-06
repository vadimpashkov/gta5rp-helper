import { OptionalSearchParameters, Region, screen } from '@nut-tree/nut-js';
import { timeout } from './timeout';

export const waitForImage = (image: string, timeToOut: number, param: OptionalSearchParameters) =>
	timeout<Region>(
		40,
		timeToOut,
		() => {
			const found = screen.find(image, param);
			return found;
		},
		{ signal: param.abort },
	);
