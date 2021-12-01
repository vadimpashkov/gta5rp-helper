import { OptionalSearchParameters, Region } from '@nut-tree/nut-js';

import { waitForImage } from './waitForImage';

export const findRegion = async (
	imageName: string,
	param: OptionalSearchParameters,
	retryCount: number,
	wait: number,
) => {
	let result: Region | null = null;
	let retryAttempts = 0;
	do {
		try {
			result = await waitForImage(imageName, wait, param);
		} catch {
			// ищем два раза
			if (retryAttempts < retryCount) {
				retryAttempts++;
			} else {
				return null;
			}
		}
	} while (result === null);

	return result;
};
