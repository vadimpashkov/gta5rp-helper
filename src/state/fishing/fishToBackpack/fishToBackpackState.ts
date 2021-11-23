import { fishToBackpackSwitch } from './fishToBackpackSwitch';

import { FishingState } from '../types';

export const fishToBackpackState: FishingState = {
	name: 'Кладем рыбу в рюкзак',
	description: 'Кладем последнюю пойманную рыбу в рюкзак',
	switcher: fishToBackpackSwitch,
};
