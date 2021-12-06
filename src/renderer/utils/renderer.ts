import { Key, Settings } from '../../core';

export const sendEvent = (e: string, data?: any) => {
	// @ts-ignore
	window.api.send(e, data);
};

export const receiveEvent = <T>(e: string, handler: (data: T) => void) => {
	// @ts-ignore
	window.api.receive(e, handler);
};
