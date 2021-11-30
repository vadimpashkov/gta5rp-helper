import { Fish } from './types';

export const NotFoundFish: Fish = {
	name: 'Не найдена',
	storedName: 'NotFound',
	minPrice: 0,
	maxPrice: 0,
	weight: 0.5,
	color: 'transparent',
};

export const Sterlyad: Fish = {
	name: 'Стерлядь',
	storedName: 'Sterlyad',
	minPrice: 36,
	maxPrice: 47,
	weight: 0.3,
	color: 'var(--color-sterlet)',
};

export const Losos: Fish = {
	name: 'Лосось',
	storedName: 'Losos',
	minPrice: 49,
	maxPrice: 63,
	weight: 0.3,
	color: 'var(--color-salmon)',
};

export const Osetr: Fish = {
	name: 'Осётр',
	storedName: 'Osetr',
	minPrice: 88,
	maxPrice: 116,
	weight: 0.3,
	color: 'var(--color-sturgeon)',
};

export const BlackAmour: Fish = {
	name: 'Чёрный Амур',
	storedName: 'BlackAmour',
	minPrice: 176,
	maxPrice: 231,
	weight: 0.4,
	color: 'var(--color-black-cupid)',
};

export const Skat: Fish = {
	name: 'Скат',
	storedName: 'Skat',
	minPrice: 200,
	maxPrice: 263,
	weight: 0.4,
	color: 'var(--color-ramp)',
};

export const Tunets: Fish = {
	name: 'Тунец',
	storedName: 'Tunets',
	minPrice: 560,
	maxPrice: 735,
	weight: 0.4,
	color: 'var(--color-tuna)',
};

export const Malma: Fish = {
	name: 'Мальма',
	storedName: 'Malma',
	minPrice: 840,
	maxPrice: 1103,
	weight: 0.4,
	color: 'var(--color-malma)',
};

export const Fugu: Fish = {
	name: 'Фугу',
	storedName: 'Fugu',
	minPrice: 2045,
	maxPrice: 2625,
	weight: 0.5,
	color: 'var(--color-puffer-fish)',
};

export const AvailableFish = [Sterlyad, Losos, Osetr, BlackAmour, Skat, Tunets, Malma, Fugu];
