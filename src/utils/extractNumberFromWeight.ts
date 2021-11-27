export const extractNumbersFromWeight = (weight: string) => {
	const preparedText = weight.replace(/[^0-9.\/\s]/g, '').trim();
	const match = preparedText.match(/(\d+.?\d?\d?)(\/|\s\d+\s)(\d+)/);

	if (match === null) throw Error('Weight not found');

	const total = Number(match[3]);

	let currentString = match[1];
	let currentStringLength = currentString.length;

	if (!currentString.includes('.') && currentStringLength >= 3 && Number(currentString) > total) {
		// 185 из 205 это может быть как 1.85 так и 185 (если багажник)
		let resultString = '';

		resultString += currentString.substring(0, currentStringLength - 2);
		resultString += '.';
		resultString += currentString.substring(currentStringLength - 2, currentStringLength + 1);

		currentString = resultString;
	}

	const current = Number(currentString);

	console.log({
		current,
		total,
	});

	return {
		current,
		total,
	};
};
