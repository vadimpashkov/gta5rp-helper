import { appMinimize } from './dragAndDrop/appMinimize.js';
import { appClose } from './dragAndDrop/appClose';

window.addEventListener('DOMContentLoaded', () => {
	appMinimize();
	appClose();
});
