import { mouse, Button } from '@nut-tree/nut-js';
import { gtaProcess } from '../store';

type Coordinate = {
	x: number;
	y: number;
};

export const drag = async (from: Coordinate, to: Coordinate, spped?: number) => {
	await gtaProcess.mouse.moveCurveToAsync(from.x, from.y, spped || 7, 30);

	await mouse.pressButton(Button.LEFT);

	await gtaProcess.mouse.moveCurveToAsync(to.x, to.y, spped || 4, 30);

	await mouse.releaseButton(Button.LEFT);
};
