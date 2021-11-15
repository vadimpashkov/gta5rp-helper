import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: var(--height-drag-panel);
	background-color: var(--color-drag-panel);
	border-top-left-radius: var(--border-radius-main);
	border-top-right-radius: var(--border-radius-main);
	cursor: pointer;

	-webkit-app-region: drag;

	&::after {
		--height: 2px;

		content: '';
		background-color: var(--color-drag-panel-line);
		height: var(--height);
		width: var(--size-button-main-icon);
		border-radius: var(--height);
	}
`;
