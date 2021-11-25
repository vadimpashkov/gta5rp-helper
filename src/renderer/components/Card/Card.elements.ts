import styled from 'styled-components';

const Text = styled.p`
	margin: 0;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
`;

export const Description = styled(Text)`
	--font-family: var(--font-accent-family);
	--font-size: var(--font-accent-size);
	--font-weight: var(--font-accent-weight);
	--color: var(--font-accent-color);
`;

export const Title = styled(Text)`
	--font-family: var(--font-primary-family);
	--font-size: var(--font-primary-size);
	--font-weight: var(--font-primary-weight);
	--color: var(--font-primary-color);
`;

export const Content = styled.div`
	display: flex;
	flex-flow: column;
	column-gap: 3px;
`;

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--background-color: var(--button-color);

	z-index: var(--z-index);
	display: flex;
	flex-flow: column;
	row-gap: var(--gap);
	padding: var(--padding);
	min-width: 140px;
	background-color: var(--background-color);
	box-sizing: border-box;
	user-select: none;
`;
