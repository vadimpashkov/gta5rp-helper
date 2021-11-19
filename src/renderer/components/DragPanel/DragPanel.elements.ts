import styled from 'styled-components';

type WrapperProps = {
	dragPanel?: string;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ dragPanel }) =>
		dragPanel === 'select'
			? '--color-drag-panel: var(--color-dark);'
			: dragPanel === 'power' && '--color-drag-panel: var(--color-primary);'};

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: var(--height-drag-panel);
	background-color: var(--color-drag-panel);
	border-top-left-radius: var(--border-radius-main);
	border-top-right-radius: var(--border-radius-main);
	cursor: pointer;
	transition: background-color var(--transition-standard);

	-webkit-app-region: drag;

	&::after {
		${({ dragPanel }) => dragPanel && '--color-drag-panel-line: var(--color-light);'};

		--height: 2px;

		content: '';
		background-color: var(--color-drag-panel-line);
		height: var(--height);
		width: var(--size-button-main-icon);
		border-radius: var(--height);
	}
`;
