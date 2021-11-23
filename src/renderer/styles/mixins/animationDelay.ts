export const animationDelay = (numberOfElements = 10, delayOffset = 0.05) => {
	let result = '';

	for (let i = 1, delay = 0.0; i <= numberOfElements; i++, delay += delayOffset) {
		result += `&:nth-child(${i}) {
			animation-delay: ${delay}s;
		}`;
	}

	return result;
};
