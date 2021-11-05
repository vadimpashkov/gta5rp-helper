import { Region, OptionalSearchParameters, screen } from '@nut-tree/nut-js';
import { mouseMovement } from './mouseMovement';

export async function catchingFish(screenWidth: number, screenHeight: number) {
	console.log('SEARCH | LMB');

	const lmbSearchRegion = new Region(
		screenWidth * 0.5,
		screenHeight * 0.6,
		screenWidth - screenWidth * 0.6,
		screenHeight * 0.3,
	);

	const lmbSearchParam = new OptionalSearchParameters(lmbSearchRegion, 0.93);
	const lmbIndicator = await screen.waitFor('lmb.png', 50000, lmbSearchParam);

	console.log(`FOUND | LMB: ${lmbIndicator}`);

	mouseMovement(screenWidth, screenHeight);
}
