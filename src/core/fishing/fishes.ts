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
	color: '#46bfff',
};

export const Losos: Fish = {
	name: 'Лосось',
	storedName: 'Losos',
	minPrice: 49,
	maxPrice: 63,
	weight: 0.3,
	color: '#ff7784',
};

export const Osetr: Fish = {
	name: 'Осётр',
	storedName: 'Osetr',
	minPrice: 88,
	maxPrice: 116,
	weight: 0.3,
	color: '#50d0bc',
};

export const BlackAmour: Fish = {
	name: 'Чёрный Амур',
	storedName: 'BlackAmour',
	minPrice: 176,
	maxPrice: 231,
	weight: 0.4,
	color: '#ff46cb',
};

export const Skat: Fish = {
	name: 'Скат',
	storedName: 'Skat',
	minPrice: 200,
	maxPrice: 263,
	weight: 0.4,
	color: '#ffbb54',
};

export const Tunets: Fish = {
	name: 'Тунец',
	storedName: 'Tunets',
	minPrice: 560,
	maxPrice: 735,
	weight: 0.4,
	color: '#c4ff46',
};

export const Malma: Fish = {
	name: 'Мальма',
	storedName: 'Malma',
	minPrice: 840,
	maxPrice: 1103,
	weight: 0.4,
	color: '#717eee',
};

export const Fugu: Fish = {
	name: 'Фугу',
	storedName: 'Fugu',
	minPrice: 2045,
	maxPrice: 2625,
	weight: 0.5,
	color: '#da46ff',
};

export const AvailableFish = [Sterlyad, Losos, Osetr, BlackAmour, Skat, Tunets, Malma, Fugu];
