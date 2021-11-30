import styled from 'styled-components';

export const Wrapper = styled.div`
	--z-index: var(--z-index-drag-panel);
	--left: 50%;
	--height: var(--height-drag-panel);
	--width: calc(var(--height) * 2);
	--background-color: hsl(var(--color-canvas));

	z-index: var(--z-index);
	position: absolute;
	width: var(--width);
	height: var(--height);
	background-color: var(--background-color);
	border-radius: 50%;
	top: 0;
	left: var(--left);
	transform: translateX(-50%);
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;
