import { ipcRenderer } from 'electron';

export const appMinimize = () => {
	const minimizeButton = document.querySelector('.drag-panel__minimize');

	minimizeButton.addEventListener('click', () => {
		ipcRenderer.send('appMinimize');
	});
};
