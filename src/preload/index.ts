import { appClose } from './appClose';
import { powerOn as fishingBotPowerOn } from './fishing';

window.addEventListener('DOMContentLoaded', () => {
	appClose();
	fishingBotPowerOn();
});
