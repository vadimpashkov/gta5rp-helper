export type Fish = {
	name: string;
	storedName: keyof TotalFish<any>;
	minPrice: number;
	maxPrice: number;
	weight: number;
	color: string;
};

export type TotalFish<T> = {
	Sterlyad: T;
	Losos: T;
	Osetr: T;
	BlackAmour: T;
	Skat: T;
	Tunets: T;
	Malma: T;
	Fugu: T;
};

export type GroupedFish = {
	name: string;
	count: number;
	weightForOne: number;
	weightTotal: number;
	minPrice: number;
	maxPrice: number;
	color: string;
};
