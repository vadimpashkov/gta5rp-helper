import { BrowserWindow, ipcMain, app } from 'electron';
import path from 'path';

let winMain;

ipcMain.on('appMinimize', () => {
	winMain.minimize();
});

export function createMainWindow() {
	winMain = new BrowserWindow({
		width: 360,
		height: 670,
		title: 'GTA 5 Helper',
		backgroundColor: '#060b27',
		frame: false,
		// resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, './app/preload/index.js'),
		},
	});
	winMain.loadFile('./app/renderer/index.html');
}

app.whenReady().then(() => {
	createMainWindow();
});
