import { start, stop, softStop } from '../../state/fishing';
import { IpcEvent } from '../types';

export const startBotEvent: IpcEvent = {
	name: 'botFishingStarted',
	handle: (_, emit) => {
		start(emit);
	},
};

export const stopBotEvent: IpcEvent = {
	name: 'botFishingStopped',
	handle: () => {
		stop();
	},
};

export const softStopBotEvent: IpcEvent = {
	name: 'botFishingSoftStopped',
	handle: () => {
		softStop();
	},
};
