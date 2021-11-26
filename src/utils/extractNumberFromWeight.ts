export const extractNumbersFromWeight = (weight: string) => {
	const preparedText = weight.replaceAll(' ', '').replaceAll(':', '.');

	// const match = preparedText.match(/(\d.\d+)\/(\d+(.\d+)?)/);
	const match = preparedText.match(/(\d+\.?\d+?)(\/|\s?u3\s?)(\d+\.?\d?\d?)/);

	if (match == null) throw Error('Weight not found');

	let currentString = match[1];

	if (!currentString.includes('.')) {
		const length = currentString.length;

		if (length >= 3) {
			let resultString = '';
			resultString += currentString.substr(0, length - 2);
			resultString += '.';
			resultString += currentString.substr(length - 2, 2);
			currentString = resultString;
		}
	}

	const current = Number(currentString);
	const total = Number(match[3]);

	console.log({
		current,
		total,
	});

	return {
		current,
		total,
	};
};
