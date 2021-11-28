import { store } from '../innerStore';
import { App } from './types';

export const getApp = (): App =>
	(store.get('app') as App) || {
		positionAtClosing: {
			x: null,
			y: null,
		},
	};

export const setApp = (newApp: App) => store.set('app', newApp);
