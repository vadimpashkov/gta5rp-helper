import { BrowserWindow, ipcMain, app } from 'electron';
import path from 'path';

import { start, stop } from '@state/fishing';

let winMain: BrowserWindow;

ipcMain.on('botFishingStarted', () => {
	start(winMain.webContents.send.bind(winMain.webContents));
});

ipcMain.on('botFishingStopped', () => {
	stop();
});

export function createMainWindow() {
	winMain = new BrowserWindow({
		width: 80,
		height: 256,
		title: 'GTA 5 Helper',
		transparent: true,
		frame: false,
		minimizable: false,
		// resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, '../preload/index.js'),
		},
	});

	winMain.setAlwaysOnTop(true, 'screen-saver');

	winMain.setIcon(path.join(__dirname, '../assets/icon/favicon512.png'));
	winMain.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(() => {
	createMainWindow();
});
