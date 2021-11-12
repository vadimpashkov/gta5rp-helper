import { ipcRenderer } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
	const powerButton = document.querySelector('.power-off-button');

	powerButton.addEventListener('click', () => {
		ipcRenderer.send('hideFishingWindow');
		ipcRenderer.send('botFishingStopped');
	});
});
