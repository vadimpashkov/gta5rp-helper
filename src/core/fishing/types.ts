export type Fish = {
	name: string;
	storedName: string;
	minPrice: number;
	maxPrice: number;
	weight: number;
};

export type TotalFish = {
	Sterlyad: number;
	Losos: number;
	Osetr: number;
	BlackAmour: number;
	Skat: number;
	Tunets: number;
	Malma: number;
	Fugu: number;
};

export type GroupedFish = {
	name: string;
	count: number;
	weightForOne: number;
	weightTotal: number;
	minPrice: number;
	maxPrice: number;
};
