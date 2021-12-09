import { Hardware } from 'keysender';
import { exec } from 'child_process';

let gtaProcess: Hardware;

export const getGtaProcess = () => {
	if (gtaProcess) return gtaProcess;

	initGtaProcess();

	return gtaProcess;
};

export const initGtaProcess = () => {
	exec('tasklist.exe /v /fi "IMAGENAME eq GTA5.exe" /FO CSV', (_, data) => {
		const splited = data
			.split('\n')[1]
			.split(',')
			.map((el) => el.replaceAll('"', ''));

		gtaProcess = new Hardware(splited[splited.length - 1]);
	});
};
