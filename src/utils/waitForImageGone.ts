import { OptionalSearchParameters, Region, screen } from '@nut-tree/nut-js';
import { timeout } from './timeout';

// Ждем  когда картинка пропадет
export const waitForImageGone = (image: string, timeToOut: number, param: OptionalSearchParameters) =>
	timeout<void>(
		100,
		timeToOut,
		async () => {
			try {
				await screen.find(image, param);

				throw 'found';
			} catch (e) {
				if (e === 'found') throw e;
			}
		},
		{ signal: param.abort },
	);
