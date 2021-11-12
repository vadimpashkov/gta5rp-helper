import { ipcRenderer } from 'electron';

export const powerOn = () => {
	const powerButton = document.querySelector('.power-on-button');

	console.log(powerButton);

	if (powerButton !== null) {
		powerButton.addEventListener('click', () => {
			ipcRenderer.send('showFishingWindow');
			ipcRenderer.send('botFishingStarted');
		});
	}
};
