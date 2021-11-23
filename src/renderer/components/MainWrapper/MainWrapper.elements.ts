import styled from 'styled-components';

import svgFilter from '../../assets/svg/gooey-effect.svg';

type MainWrapperProps = {
	opacity?: number;
};

export const MainWrapperContainer = styled.div<MainWrapperProps>`
	position: absolute;
	display: flex;
	column-gap: var(--gap-main);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--transition-standard);
	filter: url(${svgFilter + '#gooey-rect'});

	&:hover {
		opacity: 1;
	}
`;

export const DragPanel = styled.div`
	--height: var(--height-drag-panel);
	--width: calc(var(--height) * 2);

	--background-color: var(--color-light);

	z-index: var(--z-index-drag-panel);
	position: absolute;
	width: var(--width);
	height: var(--height);
	background-color: var(--background-color);
	border-radius: 50%;
	top: 0;
	left: calc(var(--size-button-main) / 2);
	transform: translateX(-50%);
	-webkit-app-region: drag;
`;
