import { ipcRenderer } from 'electron';

export const buttonStateSwitch = () => {
	const button = document.querySelector('.bot-state-switch');

	if (button !== null) {
		button.addEventListener('click', () => {
			ipcRenderer.send('botFishingStarted');
		});
	}
};
