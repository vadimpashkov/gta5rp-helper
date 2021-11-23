import styled from 'styled-components';

export const Wrapper = styled.div`
	--width: var(--width-main);
	--height: var(--height-drag-panel);

	--background-color: var(--color-light);
	--color-line: var(--color-dark);

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--width);
	height: var(--height);
	background-color: transparent;
	cursor: pointer;
	transition: background-color var(--transition-standard);

	-webkit-app-region: drag;

	&::after {
		--width: var(--size-button-main-icon);
		--height: 2px;

		content: '';
		background-color: var(--color-line);
		height: var(--height);
		width: var(--width);
	}
`;
