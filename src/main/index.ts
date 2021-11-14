import { BrowserWindow, ipcMain, app } from 'electron';
import path from 'path';

import { start, stop } from '@state/fishing';

let winMain: BrowserWindow;
let winFishingPower: BrowserWindow;

ipcMain.on('showFishingWindow', () => {
	winMain.hide();
	winFishingPower.show();
});

ipcMain.on('hideFishingWindow', () => {
	winFishingPower.hide();
	winMain.show();
});

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
		alwaysOnTop: true,
		minimizable: false,
		// resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, '@dist/preload/index.js'),
		},
	});
	winMain.setIcon(path.join(__dirname, 'assets/icons/app.png'));
	winMain.loadFile(path.join(__dirname, '@dist/renderer/index.html'));
}

app.whenReady().then(() => {
	createMainWindow();
});
