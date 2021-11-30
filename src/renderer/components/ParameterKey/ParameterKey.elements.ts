import styled from 'styled-components';

export const Key = styled.p`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0 var(--padding);
	min-width: 92px;
	height: 100%;
	font-weight: var(--key-font-weight);
	background-color: var(--key-background-color);
	color: var(--key-color);
	text-transform: uppercase;
	user-select: none;
	transition: background-color var(--transition);
`;

export const Description = styled.p`
	box-sizing: border-box;
	margin: 0;
	padding: var(--padding);
	font-weight: var(--font-weight);
	user-select: none;
`;

export const Wrapper = styled.button`
	--padding: var(--padding-main);
	--gap: var(--gap-main);

	--background-color: hsl(var(--color-canvas));
	--color: hsl(var(--color-text-primary));

	--font-family: var(--font-family-primary);

	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-primary);

	--key-background-color: hsl(var(--color-canvas-inverted));
	--key-background-color-hover: hsl(var(--color-brand-primary));
	--key-color: hsl(var(--color-text-primary-inverted));
	--key-font-weight: var(--font-weight-secondary);

	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	padding: 0;
	display: flex;
	gap: var(--gap);
	align-items: center;
	justify-content: space-between;
	font-family: var(--font-family);
	font-size: var(--font-size);
	background-color: var(--background-color);
	color: var(--color);
	outline: none;
	border: none;
	min-width: 340px;
	cursor: pointer;
	overflow: hidden;

	&:hover ${Key}, &:focus-visible ${Key} {
		background-color: var(--key-background-color-hover);
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
