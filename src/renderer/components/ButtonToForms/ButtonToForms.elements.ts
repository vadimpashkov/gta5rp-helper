import styled from 'styled-components';

export const Wrapper = styled.button`
	--padding: var(--padding-main);

	--font-family: var(--font-family-primary);
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-secondary);

	--background-color: hsl(var(--color-canvas-inverted));
	--background-color-hover: hsl(var(--color-brand-primary));
	--color: hsl(var(--color-text-primary-inverted));

	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	padding: var(--padding);
	min-height: 74px;
	border: none;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	background-color: var(--background-color);
	color: var(--color);
	cursor: pointer;
	transition: background-color var(--transition), color var(--transition);

	&:hover,
	&:focus-visible {
		background-color: var(--background-color-hover);
		color: hsl(var(--color-light));
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
