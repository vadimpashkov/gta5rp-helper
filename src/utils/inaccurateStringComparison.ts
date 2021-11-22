import { LevenshteinDistance } from './LevenshteinDistance';

export const inaccurateStringComparison = (
	stringA: string,
	stringB: string,
	options?: {
		ignoreCase: true;
	},
) => {
	if (options?.ignoreCase) {
		stringA.toLowerCase();
		stringB.toLowerCase();
	}

	const distance = LevenshteinDistance(stringA, stringB);

	return {
		entry: {
			stringA,
			stringB,
		},
		distance,
	};
};
