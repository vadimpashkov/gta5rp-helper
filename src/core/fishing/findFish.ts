import { AvailableFish } from './fishes';

export const findFish = (text: string) => {
	console.log(text);

	const found = AvailableFish.filter((fish) => text.includes(fish.name));

	if (found === undefined || found.length > 1) throw Error('Ошибка в поиске рыбы');

	return found[0];
};
