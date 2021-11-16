export const sendEvent = (e: string, data?: any) => {
	// @ts-ignore
	window.api.send(e, data);
};
