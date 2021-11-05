const { Region, OptionalSearchParameters, screen } = require('@nut-tree/nut-js');
const { mouseMovement } = require('./mouseMovement');

async function catchingFish(screenWidth, screenHeight) {
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

module.exports = { catchingFish };
