import styled from 'styled-components';

type ButtonProps = {
	isSelect?: boolean;
};

export const Svg = styled.svg`
	display: block;
	place-self: center;
	width: var(--svg-size);
	height: var(--svg-size);
	object-fit: cover;
	object-position: center;
	fill: currentColor;
	pointer-events: none;
	position: absolute;
	transition: opacity var(--transition);
`;

export const Wrapper = styled.button<ButtonProps>`
	--size: var(--button-size);
	--color: var(--button-color);
	--color-select: var(--button-color-select);

	--svg-size: var(--icon-size);
	--svg-color: var(--icon-color);
	--svg-color-select: var(--icon-color-select);

	--transition: var(--time-standard) var(--bezier-rubber);

	position: relative;
	display: grid;
	padding: 0;
	width: var(--size);
	height: var(--size);
	border: none;
	background-color: ${({ isSelect }) => (isSelect ? 'var(--color-select)' : 'var(--color)')};
	color: ${({ isSelect }) => (isSelect ? 'var(--svg-color-select)' : 'var(--svg-color)')};
	cursor: pointer;
	transition: background-color var(--transition), color var(--transition);

	& use {
		transition: opacity var(--transition);
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
