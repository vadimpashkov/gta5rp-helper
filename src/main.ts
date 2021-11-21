import path from 'path';
import { BrowserWindow, app, session } from 'electron';

import { searchDevtools } from 'electron-search-devtools';

import { subscribe } from './events';

const isDev = process.env.NODE_ENV === 'development';

let winMain: BrowserWindow;

export function createMainWindow() {
	winMain = new BrowserWindow({
		title: 'GTA 5 Helper',
		transparent: true,
		// transparent: false,
		// backgroundColor: '#ff0000',
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
	if (isDev) {
		const devtools = await searchDevtools('REACT');
		if (devtools) {
			await session.defaultSession.loadExtension(devtools, {
				allowFileAccess: true,
			});
		}
	}

	createMainWindow();

	subscribe(winMain);
});
