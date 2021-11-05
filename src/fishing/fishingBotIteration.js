const { screen, Region, OptionalSearchParameters, keyboard, Key } = require('@nut-tree/nut-js');
const { catchingFish } = require('./catchingFish');

screen.config.autoHighlight = true;

async function fishingBotIteration() {
	screen.config.resourceDirectory += `/src/img/`;

	try {
		const screenWidth = await screen.width();
		const screenHeight = await screen.height();

		console.log('SEARCH | Fishing place');

		const fishingPlaceSearchRegion = new Region(
			screenWidth * 0.1,
			screenHeight * 0.8,
			screenWidth - screenWidth * 0.7,
			screenHeight * 0.2,
		);
		const fishingPlaceSearchParam = new OptionalSearchParameters(fishingPlaceSearchRegion, 0.93);
		const fishingPlaceIndicator = await screen.waitFor('fishingPlace.png', 10000, fishingPlaceSearchParam);

		console.log(`FOUND | Fishing place: ${fishingPlaceIndicator}`);

		keyboard.type(Key.Backspace);

		// const errorIndicator = await screen.waitFor('./error.png', 500);

		// if (errorIndicator) console.log(`ERROR | ${errorIndicator}`);

		// const moveSize = getRandomIntInclusive(8, 12);

		catchingFish(screenWidth, screenHeight);

		// fishingBotIteration();
	} catch (err) {
		console.error(err);
		console.log('bot false');
	}
}

module.exports = { fishingBotIteration };
