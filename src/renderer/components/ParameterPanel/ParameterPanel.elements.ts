import styled from 'styled-components';

export const Description = styled.p`
	margin: 0;
	user-select: none;
`;

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--background-color: var(--button-color);
	--color: var(--font-primary-color);
	--font-family: var(--font-primary-family);
	--font-size: var(--font-primary-size);
	--font-weight: var(--font-primary-weight);

	box-sizing: border-box;
	display: flex;
	gap: var(--gap);
	align-items: center;
	justify-content: space-between;
	padding: var(--padding);
	background-color: var(--background-color);
	color: var(--color);
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	min-width: 340px;
`;
