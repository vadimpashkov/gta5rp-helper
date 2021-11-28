function addDot(value: string, total: number, offset = 1): number {
	let valueLength = value.length;

	if (valueLength >= 2) {
		// 185 из 205 это может быть как 1.85 так и 185 (если багажник)
		let result = '';

		result += value.substring(0, valueLength - offset);
		result += '.';
		result += value.substring(valueLength - offset, valueLength + 1);

		return parseFloat(result) > total ? addDot(value, total, ++offset) : Math.ceil(parseFloat(result) * 100) / 100;
	}

	return Number(value);
}

export const extractNumbersFromWeight = (weight: string) => {
	const preparedText = weight
		.replace(/[^0-9.\s]/g, ' ')
		.replace(/ +/g, ' ')
		.trim();
	const match = preparedText.match(/(\d+\.?\d?\d?)( )(\d+)/);

	if (match === null) throw Error('Weight not found');

	const total = Number(match[3]);

	let currentString = match[1];

	const current = !currentString.includes('.') ? addDot(currentString, total) : Number(currentString);

	console.log({
		current,
		total,
	});

	return {
		current,
		total,
	};
};
