const priceUpdateHoursMoscowTime = [1, 4, 7, 10];

export const priceUpdateTime = () => {
	// Get date object in Moscow timezone
	const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
	const todayHourIn2Digit = Number(
		today.toLocaleString('en-US', { hour: 'numeric', hour12: true }).replace(/AM|PM/, ''),
	);
	const { difference: diffInHours } = getNextHour(todayHourIn2Digit, priceUpdateHoursMoscowTime);
	const nextPriceUpdate = new Date(new Date(today).setHours(today.getHours() + diffInHours, 5, 0));
	const diffDates = diffBetweenDatesInMs(today, nextPriceUpdate);

	return msInTime(diffDates);
};

function getNextHour(hour: number, hoursArray: number[]) {
	for (let i = 0; i < hoursArray.length; i++) {
		if (hour < hoursArray[i]) {
			return { result: hoursArray[i], difference: hoursArray[i] - hour };
		}
	}

	return { result: hoursArray[0], difference: 12 + hoursArray[0] - hour };
}

function diffBetweenDatesInMs(dateStart: Date, dateEnd: Date) {
	return dateEnd.getTime() - dateStart.getTime();
}

function msInTime(ms: number) {
	const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
		.toString()
		.padStart(2, '0');
	const minutes = Math.floor((ms / (1000 * 60)) % 60)
		.toString()
		.padStart(2, '0');
	const seconds = Math.floor((ms / 1000) % 60)
		.toString()
		.padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
}
