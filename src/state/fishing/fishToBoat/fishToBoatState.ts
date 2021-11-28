import { fishToBoatSwitch } from './fishToBoatSwitch';

import { FishingState } from '../types';

export const fishToBoatState: FishingState = {
	name: 'Кладем рыбу в транспорт',
	description: 'Кладем рыбу в транспорт',
	switcher: fishToBoatSwitch,
	stopOnSoftExit: true,
};
