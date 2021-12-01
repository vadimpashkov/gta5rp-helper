import styled from 'styled-components';

const Text = styled.p`
	box-sizing: border-box;
	margin: 0;
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
`;

export const Description = styled(Text)`
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-secondary);
	--color: hsl(var(--color-text-secondary));
`;

export const Title = styled(Text)`
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-primary);
	--color: hsl(var(--color-text-primary));
`;

export const Content = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	gap: 2px;
`;

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--background-color: hsl(var(--color-canvas));
	--font-family: var(--font-family-primary);

	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	gap: var(--gap);
	padding: var(--padding);
	min-width: 140px;
	background-color: var(--background-color);
	font-family: var(--font-family);
	user-select: none;
`;
