import { BrowserWindow, ipcMain } from 'electron';

import * as events from './events';
import { IpcEvent } from './events/types';

export const registerEvents = (window: BrowserWindow) => {
	const emit = <T>(event: string, data: T) => {
		window.webContents.send(event, data);
	};

	Object.keys(events).forEach((key) => {
		const event = (events as unknown as { [key: string]: IpcEvent })[key];

		ipcMain.on(event.name, (_, data: any) => {
			event.handle(data, emit, window);
		});
	});
};
