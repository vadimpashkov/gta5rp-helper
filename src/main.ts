import path from 'path';
import { BrowserWindow, app, screen } from 'electron';

import { getApp } from './store';
import { subscribe } from './events';

const isDev = process.env.NODE_ENV === 'development';

let winMain: BrowserWindow;

export function createMainWindow() {
	const {
		positionAtClosing: { x: appPosX, y: appPosY },
	} = getApp();
	const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;

	winMain = new BrowserWindow({
		title: 'GTA V RP - Helper',
		transparent: true,
		// transparent: false,
		// backgroundColor: '#ff0000',
		x: appPosX || screenWidth / 2,
		y: appPosY || screenHeight / 2,
		frame: false,
		minimizable: false,
		resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, './preload.js'),
		},
	});

	winMain.setAlwaysOnTop(true, 'screen-saver');

	winMain.setIcon(path.join(__dirname, '../assets/favicon512.png'));
	winMain.loadFile(path.join(__dirname, './index.html'));

	if (isDev) winMain.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(async () => {
	createMainWindow();

	subscribe(winMain);
});
