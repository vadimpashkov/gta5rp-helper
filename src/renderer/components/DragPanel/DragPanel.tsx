import React, { FC, useState } from 'react';

import { Wrapper } from './DragPanel.elements';

import { sendEvent } from '../../utils';

import { NavigationPanel } from '../NavigationPanel';
import { AdditionalOptions } from '../AdditionalOptions';
import { TrafficLight } from '../TrafficLight';

type DragPanelProps = {
	className?: string;
};

export const DragPanel: FC<DragPanelProps> = ({ className }: DragPanelProps) => {
	let animationId: number;
	let mouseX: number;
	let mouseY: number;

	const handleMouseDown = (event: React.MouseEvent) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		document.addEventListener('mouseup', onMouseUp);
		requestAnimationFrame(moveWindow);
	};

	const onMouseUp = () => {
		sendEvent('windowMoved', { x: mouseX, y: mouseY });

		document.removeEventListener('mouseup', onMouseUp);
		cancelAnimationFrame(animationId);
	};

	function moveWindow() {
		sendEvent('windowMoving', { x: mouseX, y: mouseY });
		animationId = requestAnimationFrame(moveWindow);
	}

	return (
		<Wrapper className={className} onMouseDown={handleMouseDown}>
			<NavigationPanel />
			<AdditionalOptions />
			<TrafficLight />
		</Wrapper>
	);
};
