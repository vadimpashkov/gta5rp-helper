import styled from 'styled-components';

export const Wrapper = styled.div`
	--z-index: var(--drag-panel-z-index);
	--left: calc(var(--button-size) / 2);
	--height: var(--drag-panel-height);
	--width: calc(var(--height) * 2);
	--background-color: var(--button-color);

	z-index: var(--z-index);
	position: absolute;
	width: var(--width);
	height: var(--height);
	background-color: var(--background-color);
	border-radius: 50%;
	top: 0;
	left: var(--left);
	transform: translateX(-50%);
	cursor: pointer;
`;
