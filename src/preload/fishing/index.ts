import { ipcRenderer } from 'electron';

ipcRenderer.on('newStatus', (_, newStatus) => {
	const statusField = document.getElementById('status');

	if (statusField) {
		statusField.innerHTML = newStatus;
	}
});
