import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
	from {
		transform: translateX(160%);
	}
	to {
		transform: translateX(0);
	}
`;

const moveRight = keyframes`
	from {
		transform: translateX(-160%);
	}
	to {
		transform: translateX(0);
	}
`;

const Text = styled.p`
	--font-family: var(--font-secondary-family);
	--font-size: var(--font-secondary-size);
	--font-weight: var(--font-secondary-weight);
	--color: var(--font-secondary-color);

	margin: 0;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
`;

export const Description = styled(Text)`
	text-transform: lowercase;
`;

export const Title = styled(Text)`
	--font-family: var(--font-accent-family);
	--font-size: var(--font-accent-size);
	--font-weight: var(--font-accent-weight);
	--color: var(--font-primary-color);

	margin-bottom: 3px;
`;

export const Wrapper = styled.div`
	--z-index: var(--z-index-info-panel);
	--padding: var(--padding-main);
	--background-color: var(--button-color);
	--animation: var(--time-long) var(--bezier-hit);

	z-index: var(--z-index);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: var(--padding);
	min-height: 80px;
	text-align: center;
	line-height: 1;
	background-color: var(--background-color);
	box-sizing: border-box;
	user-select: none;

	&:nth-child(odd) {
		animation: ${moveRight} var(--animation);
	}

	&:nth-child(even) {
		animation: ${moveLeft} var(--animation);
	}
`;
