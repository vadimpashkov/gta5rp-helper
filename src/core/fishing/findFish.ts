import { AvailableFish } from './fishes';

export const findFish = (text: string) => {
	const lowerText = text.toLowerCase();
	let found = AvailableFish.filter((fish) => lowerText.includes(fish.name.toLowerCase()));

	if (found.length === 0) {
		found = AvailableFish.filter((fish) => lowerText.includes(fish.name.toLowerCase().replaceAll('ё', 'е')));
	}

	if (found === undefined || found.length > 1) throw Error('Ошибка в поиске рыбы');

	return found[0];
};
