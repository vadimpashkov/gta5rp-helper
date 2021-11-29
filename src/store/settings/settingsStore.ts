import { store } from '../innerStore';
import { Settings, Key } from '../../core';

export function getSettings(): Settings {
	return (
		(store.get('settings') as Settings) || {
			doubleClick: false,
			openInventoryKey: Key.KeyI,
			openTrunkKey: Key.KeyH,
			fishingRodKey: Key.Backspace,
		}
	);
}

export const setSettings = (newSettings: Settings) => store.set('settings', newSettings);
