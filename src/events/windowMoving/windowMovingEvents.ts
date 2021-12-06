import { screen } from 'electron';
import { IpcEvent } from '../types';
import { setApp } from '../../store';

export const appSizeEvent: IpcEvent<{ width: number; height: number }> = {
	name: 'giveMeTotalFish',
	handle: (size, __, window) => {
		if (!window.isDestroyed()) {
			window.setBounds(size);
		}
	},
};

export const windowMovingEvent: IpcEvent<{ x: number; y: number }> = {
	name: 'windowMoving',
	handle: (mouseCoordinates, __, window) => {
		const { x: mouseX, y: mouseY } = mouseCoordinates;
		const { x, y } = screen.getCursorScreenPoint();

		window.setBounds({ x: x - mouseX, y: y - mouseY });
	},
};

export const windowMovedEvent: IpcEvent<{ x: number; y: number }> = {
	name: 'windowMoving',
	handle: (mouseCoordinates, __, window) => {
		const { x: mouseX, y: mouseY } = mouseCoordinates;
		const { x, y } = screen.getCursorScreenPoint();

		setApp({
			positionAtClosing: {
				x: x - mouseX,
				y: y - mouseY,
			},
		});
	},
};
