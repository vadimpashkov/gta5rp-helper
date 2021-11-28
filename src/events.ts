import { BrowserWindow, ipcMain, screen } from 'electron';
import { start, stop, softStop } from './state/fishing';
import { getTotalFish, setSettings, getSessionFish, setApp } from './store';

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

	ipcMain.on('botFishingSoftStopped', () => {
		softStop();
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

	ipcMain.on('windowMoving', (_, mouseCoordinates: { x: number; y: number }) => {
		const { x: mouseX, y: mouseY } = mouseCoordinates;
		const { x, y } = screen.getCursorScreenPoint();

		window.setBounds({ x: x - mouseX, y: y - mouseY });
	});

	ipcMain.on('windowMoved', (_, mouseCoordinates: { x: number; y: number }) => {
		const { x: mouseX, y: mouseY } = mouseCoordinates;
		const { x, y } = screen.getCursorScreenPoint();

		setApp({
			positionAtClosing: {
				x: x - mouseX,
				y: y - mouseY,
			},
		});
	});
};
