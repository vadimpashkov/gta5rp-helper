import { BrowserWindow, ipcMain } from 'electron';
import { start, stop } from './state/fishing';
import { setSettings } from './store';

export const subscribe = (window: BrowserWindow) => {
	ipcMain.on('botFishingStarted', () => {
		start(window.webContents.send.bind(window.webContents));
	});

	ipcMain.on('botFishingStopped', () => {
		stop();
	});

	ipcMain.on('newSettings', (_, args) => {
		setSettings(args);
	});

	ipcMain.on('appSize', (_, args) => {
		const { width, height } = args;

		window.setSize(width, height);
		window.setBounds(args);
	});
};
