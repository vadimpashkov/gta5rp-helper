import { Settings, Key } from '../../core';

let settings: Settings = {
	lookingForBackpack: false,
	lookingForBoat: false,
	openInventoryKey: Key.KeyI,
	openTrunkKey: Key.KeyH,
	fishingRodKey: Key.Backspace,
};

export const getSettings = () => settings;

export const setSettings = (newSettings: Settings) => {
	settings = newSettings;
};
