import styled from 'styled-components';

const Text = styled.p`
	box-sizing: border-box;
	margin: 0;
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
`;

export const Description = styled(Text)`
	font-size: var(--font-size-secondary);
	font-weight: var(--font-weight-primary);
	color: hsl(var(--color-text-secondary));
	text-transform: lowercase;
`;

export const Title = styled(Text)`
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-secondary);
	--color: hsl(var(--color-text-primary));

	margin-bottom: 3px;
`;

export const Wrapper = styled.div`
	--z-index: var(--z-index-info-panel);
	--padding: var(--padding-main);
	--font-family: var(--font-family-primary);
	--background-color: hsl(var(--color-canvas));
	--color: hsl(var(--color-text-primary));
	--animation: var(--time-long) var(--bezier-hit);

	box-sizing: border-box;
	z-index: var(--z-index);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: var(--padding);
	min-height: 80px;
	font-family: var(--font-family);
	text-align: center;
	line-height: 1;
	background-color: var(--background-color);
	user-select: none;
`;
