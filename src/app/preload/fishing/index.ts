export * from './powerOn';
import { ipcRenderer } from 'electron';

ipcRenderer.on('newStatus', (_, newStatus) => {
	const statusField = document.getElementById('status');

	statusField.innerHTML = newStatus;
});
