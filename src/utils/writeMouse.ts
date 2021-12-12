import { mouse } from '@nut-tree/nut-js';

let firstTry = [];

export async function writeMouse(arrayToPush: number[][]) {
	const mousePosition = await mouse.getPosition();
	const position = [mousePosition.x, mousePosition.y];

	const emptyArray = arrayToPush.length === 0;
	const prevPosition = !emptyArray ? arrayToPush[arrayToPush.length - 1] : [mousePosition.x, mousePosition.y];
	const anyMovement = emptyArray || (mousePosition.x !== prevPosition[0] && mousePosition.y !== prevPosition[1]);

	if (anyMovement) {
		const x = Math.abs(prevPosition[0]) - position[0];
		const y = Math.abs(prevPosition[1]) - position[1];
		if (emptyArray || x !== 0 || y !== 0) arrayToPush.push([x, y]);
	}
}
