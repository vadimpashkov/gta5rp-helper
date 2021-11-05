const { Region, OptionalSearchParameters, screen, mouse, left, right } = require('@nut-tree/nut-js');
const { getRandomIntInclusive } = require('../utils/getRandomIntInclusive');

async function mouseMovement(screenWidth, screenHeight, direction = true, timeout = 50000, region = false) {
	mouse.config.autoDelayMs = 1;
	mouse.config.mouseSpeed = 20000;

	try {
		console.log('SEARCH | LMB');

		console.log(region);

		let lmbSearchRegion;

		if (region !== false) {
			lmbSearchRegion = region;
		} else {
			lmbSearchRegion = new Region(
				screenWidth * 0.5,
				screenHeight * 0.6,
				screenWidth - screenWidth * 0.6,
				screenHeight * 0.3,
			);
		}

		const lmbSearchParam = new OptionalSearchParameters(lmbSearchRegion, 0.9);
		const lmbIndicator = await screen.waitFor('lmb.png', timeout, lmbSearchParam);

		console.log(`FOUND | LMB: ${lmbIndicator}`);

		const moveSize = getRandomIntInclusive(100, 200);

		if (direction) await mouse.move(left(moveSize));
		else await mouse.move(right(moveSize));

		// await mouse.leftClick();

		direction = !direction;

		mouseMovement(screenWidth, screenHeight, direction, 3000, lmbSearchParam.searchRegion);

		// const successfulIndicator = await screen.waitFor('successful.png', 1000);

		// if (successfulIndicator) return;
	} catch (err) {
		console.log(err);
		return;
		// direction = !direction;
		// mouseMovement(screenWidth, screenHeight, direction);
	}
}

module.exports = { mouseMovement };
