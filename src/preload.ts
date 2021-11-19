import { contextBridge, ipcRenderer } from 'electron';
import { getSettings } from './store';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
	send: (channel: string, data: any) => {
		ipcRenderer.send(channel, data);
	},
	receive: (channel: string, func: (...data: any) => void) => {
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	},
	settings: getSettings(),
});
