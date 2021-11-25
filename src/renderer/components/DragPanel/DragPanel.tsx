import React, { FC, useState } from 'react';

import { Wrapper } from './DragPanel.elements';

import { sendEvent } from '../../utils';

type DragPanelProps = {
	className?: string;
};

export const DragPanel: FC<DragPanelProps> = ({ className }: DragPanelProps) => {
	const screenWidth = window.screen.width;
	const screenHeight = window.screen.height;

	let animationId: number;
	let mouseX: number;
	let mouseY: number;

	const handleMouseDown = (event: React.MouseEvent) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		console.log(screenWidth, screenHeight);

		document.addEventListener('mouseup', onMouseUp);
		requestAnimationFrame(moveWindow);
	};

	const onMouseUp = () => {
		sendEvent('windowMoved');

		document.removeEventListener('mouseup', onMouseUp);
		cancelAnimationFrame(animationId);
	};

	function moveWindow() {
		sendEvent('windowMoving', { x: mouseX, y: mouseY });
		animationId = requestAnimationFrame(moveWindow);
	}

	return <Wrapper className={className} onMouseDown={handleMouseDown} />;
};
