import styled, { keyframes } from 'styled-components';

export const moveLeft = keyframes`
	from {
		transform: translateX(160%);
	}
	to {
		transform: translateX(0);
	}
`;

export const moveRight = keyframes`
	from {
		transform: translateX(-160%);
	}
	to {
		transform: translateX(0);
	}
`;

export const Wrapper = styled.div`
	z-index: var(--z-index-info-panel);
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: var(--padding-main);
	min-width: 160px;
	text-align: center;
	line-height: 1;
	background-color: var(--color-button-main);
	user-select: none;

	&:nth-child(odd) {
		animation: ${moveRight} var(--animation-standard);
	}

	&:nth-child(even) {
		animation: ${moveLeft} var(--animation-standard);
	}
`;

export const Title = styled.h2`
	margin: 0;
	font-family: var(--font-accent-family);
	font-size: var(--font-accent-size);
	font-weight: var(--font-accent-weight);
	margin-bottom: 3px;
`;

export const Description = styled.p`
	margin: 0;
	font-family: var(--font-secondary-family);
	font-size: var(--font-secondary-size);
	font-weight: var(--font-secondary-weight);
`;
