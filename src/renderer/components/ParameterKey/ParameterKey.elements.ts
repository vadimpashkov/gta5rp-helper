import styled from 'styled-components';

export const Key = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0 var(--padding);
	min-width: 92px;
	height: 100%;
	font-family: var(--key-font-family);
	font-size: var(--key-font-size);
	font-weight: var(--key-font-weight);
	background-color: var(--key-background-color);
	color: var(--key-color);
	text-transform: uppercase;
	user-select: none;
	transition: background-color var(--transition);
`;

export const Description = styled.p`
	margin: 0;
	padding: var(--padding);
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	user-select: none;
`;

export const Wrapper = styled.button`
	--padding: var(--padding-main);
	--gap: var(--gap-main);

	--background-color: var(--button-color);
	--color: var(--font-primary-color);

	--font-family: var(--font-primary-family);
	--font-size: var(--font-primary-size);
	--font-weight: var(--font-primary-weight);

	--key-background-color: var(--button-color-hover);
	--key-background-color-hover: var(--color-primary);
	--key-color: var(--button-color);

	--key-font-family: var(--font-accent-family);
	--key-font-size: var(--font-accent-size);
	--key-font-weight: var(--font-accent-weight);

	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	padding: 0;
	display: flex;
	gap: var(--gap);
	align-items: center;
	justify-content: space-between;
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
