import styled from 'styled-components';

export const Description = styled.p`
	box-sizing: border-box;
	margin: 0;
	user-select: none;
`;

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--background-color: hsl(var(--color-canvas));
	--color: hsl(var(--color-text-primary));
	--font-family: var(--font-family-primary);
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-primary);

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
