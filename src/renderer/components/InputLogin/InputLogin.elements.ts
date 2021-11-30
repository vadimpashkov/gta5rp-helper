import styled from 'styled-components';

export const Input = styled.input`
	z-index: var(--z-index-input);
	padding: calc(var(--padding) / 2) var(--padding);
	outline: none;
	border: none;
	background-color: transparent;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;

	&::placeholder {
		color: inherit;
	}
`;

export const Svg = styled.svg`
	--size: 18px;

	z-index: var(--z-index-svg);
	width: var(--size);
	height: var(--size);
	fill: currentColor;
`;

export const Wrapper = styled.div`
	--z-index-button: 20;
	--z-index-overlay: 7;
	--z-index-svg: 9;
	--z-index-input: 9;

	--padding: var(--padding-main);

	--background-color: hsl(var(--color-canvas-inverted));
	--background-color-eye: hsl(var(--color-canvas));

	--color: hsl(var(--color-text-primary-inverted));
	--color-select: hsl(var(--color-text-primary));

	--font-family: var(--font-family-primary);
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-tertiary);

	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	position: relative;
	padding: var(--padding);
	overflow: hidden;
	display: flex;
	align-items: center;
	min-height: 74px;
	background-color: var(--background-color);
	color: var(--color);
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	transition: color var(---transition);
`;
