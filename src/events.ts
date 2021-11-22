import { BrowserWindow, ipcMain } from 'electron';
import { start, stop } from './state/fishing';
import { getTotalFish, setSettings, getSessionFish } from './store';

export const subscribe = (window: BrowserWindow) => {
	const emit = <T>(event: string, data: T) => {
		window.webContents.send(event, data);
	};

	ipcMain.on('botFishingStarted', () => {
		start(emit);
	});

	ipcMain.on('botFishingStopped', () => {
		stop();
	});

	ipcMain.on('newSettings', (_, args) => {
		setSettings(args);
	});

	ipcMain.on('giveMeTotalFish', () => {
		emit('setTotalFish', getTotalFish());
	});

	ipcMain.on('giveMeSessionFish', () => {
		emit('setSessionFish', getSessionFish());
	});

	ipcMain.on('appSize', (_, size: { width: number; height: number }) => {
		if (!window.isDestroyed()) {
			window.setBounds(size);
		}
	});
};
