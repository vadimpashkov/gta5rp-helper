import { BrowserWindow } from 'electron';

export type IpcEvent<T = void, TEmit = void> = {
	name: string;
	handle: (data: T, emit: (name: string, data: TEmit) => void, window: BrowserWindow) => void;
};
