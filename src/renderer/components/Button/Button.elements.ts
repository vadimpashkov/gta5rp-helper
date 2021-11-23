import styled from 'styled-components';

type ButtonProps = {
	isSelect?: boolean;
};

export const Svg = styled.svg`
	--size-icon: calc(var(--size-button) / 2.8);

	display: block;
	place-self: center;
	width: var(--size-icon);
	height: var(--size-icon);
	object-fit: cover;
	object-position: center;
	fill: currentColor;
	pointer-events: none;
	position: absolute;
	transition: opacity var(--transition);
`;

export const Wrapper = styled.button<ButtonProps>`
	--offset: var(--height-drag-panel);
	--size-button: var(--size-button-main);
	--background-color: var(--color-button-main);
	--background-color-select: var(--color-button-main-select);
	--color: var(--color-button-main-hover);
	--color-select: var(--color-button-main);
	--transition: var(--transition-standard);

	position: relative;
	display: grid;
	padding: 0;
	width: var(--size-button);
	height: var(--size-button);
	border: none;
	background-color: ${({ isSelect }) => (isSelect ? 'var(--background-color-select)' : 'var(--background-color)')};
	color: ${({ isSelect }) => (isSelect ? 'var(--color-select)' : 'var(--color)')};
	cursor: pointer;
	transition: background-color var(--transition), color var(--transition);

	&:first-child {
		grid-template-rows: var(--offset) 1fr;
		height: calc(var(--size-button) + var(--offset));
	}

	&:first-child ${Svg} {
		grid-row-start: 2;
	}

	& use {
		transition: opacity var(--transition-standard);
	}

	& use:first-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 0 : 1)};
	}

	& use:last-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 1 : 0)};
	}

	&:hover use:first-of-type,
	&:focus-visible use:first-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 1 : 0)};
	}

	&:hover use:last-of-type,
	&:focus-visible use:last-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 0 : 1)};
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
