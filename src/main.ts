import path from 'path';
import { BrowserWindow, app, screen } from 'electron';

import { registerEvents } from './registerEvents';

const isDev = process.env.NODE_ENV === 'development';

let winMain: BrowserWindow;

export function createMainWindow() {
	winMain = new BrowserWindow({
		title: 'svchost',
		transparent: true,
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

	if (isDev) {
		winMain.webContents.openDevTools({ mode: 'undocked' });
	}
}

app.whenReady().then(async () => {
	createMainWindow();

	registerEvents(winMain);
});
