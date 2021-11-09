export * from './buttonStateSwitch';
import { ipcRenderer } from 'electron';

ipcRenderer.on('newStatus', (_, newStatus) => {
	const statusField = document.getElementById('status');

	statusField.innerHTML = newStatus;
});
