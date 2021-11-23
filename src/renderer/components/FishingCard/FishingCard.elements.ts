import styled, { keyframes } from 'styled-components';

import { animationDelay } from '../../styles/mixins';

export const moveTop = keyframes`
	to {
		transform: translateY(0);
	}
`;

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--border-radius: var(--border-radius-main);
	--background-color: var(--color-button-main);
	--animation: var(--animation-standard);

	z-index: var(--z-index);
	display: flex;
	flex-flow: column;
	row-gap: var(--gap);
	padding: var(--padding);
	min-width: 140px;
	/* border-radius: var(--border-radius); */
	background-color: var(--background-color);
	box-sizing: border-box;
	user-select: none;
	transform: translateY(360%);
	animation: ${moveTop} var(--animation) forwards;

	${animationDelay()}
`;

export const Content = styled.div`
	display: flex;
	flex-flow: column;
	column-gap: 2px;
`;

export const ContentName = styled.p`
	--font-family: var(--font-primary-family);
	--font-size: var(--font-primary-size);
	--font-weight: var(--font-primary-weight);

	margin: 0;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
`;

export const ContentCount = styled(ContentName)`
	--font-size: var(--font-accent-size);
	--font-weight: var(--font-accent-weight);
`;
