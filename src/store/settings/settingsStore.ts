import { store } from '../innerStore';
import { Settings } from './types';

export const getSettings = (): Settings => store.get('settings') as Settings;

export const setSettings = (newSettings: Settings) => store.set('settings', newSettings);
