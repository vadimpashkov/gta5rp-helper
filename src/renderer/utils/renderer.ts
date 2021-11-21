import { Settings, TotalFish } from '../stores';

export const sendEvent = (e: string, data?: any) => {
	// @ts-ignore
	window.api.send(e, data);
};

export const receiveEvent = <T>(e: string, handler: (data: T) => void) => {
	// @ts-ignore
	window.api.receive(e, handler);
};

// @ts-ignore
const initialSettings = window.api.settings;

// @ts-ignore
const initialFish = window.api.fish;

export const getInitialSettings = (): Settings => initialSettings;
export const getInitialFish = (): TotalFish => initialFish;
