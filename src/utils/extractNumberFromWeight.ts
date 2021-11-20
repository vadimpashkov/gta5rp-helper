export const extractNumbersFromWeight = (weight: string) => {
	const preparedText = weight.replaceAll(' ', '');

	console.log(preparedText);

	const match = preparedText.match(/(\d.\d+)\/(\d+(.\d+)?)/);

	if (match == null) throw Error('Weight not found');

	const current = Number(match[1]);
	const total = Number(match[2]);

	return {
		current,
		total,
	};
};
