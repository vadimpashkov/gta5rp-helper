import { exec } from 'child_process';

let process = 0;

export const getProcess = () => process;
export const initProcess = () => {
	exec('tasklist.exe /v /fi "IMAGENAME eq GTA5.exe" /FO CSV', (_, data) => {
		process = Number(data.split('\n')[1].split(',')[1].replaceAll('"', ''));
	});
};
