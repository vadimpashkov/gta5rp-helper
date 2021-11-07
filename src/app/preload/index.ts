import { appClose, appMinimize } from './dragAndDrop';
import { buttonStateSwitch } from './fishing';

window.addEventListener('DOMContentLoaded', () => {
	appMinimize();
	appClose();
	buttonStateSwitch();
});
