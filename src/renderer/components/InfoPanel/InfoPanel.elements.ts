import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	padding: var(--padding-main);
	min-width: 270px;
	border-radius: var(--border-radius-main);
	background-color: var(--color-button-main);
`;

export const Title = styled.h2`
	margin: 0;
	font-family: var(--font-accent-family);
	font-size: var(--font-accent-size);
	font-weight: var(--font-accent-weight);
`;

export const Description = styled.p`
	margin: 0;
	font-family: var(--font-secondary-family);
	font-size: var(--font-secondary-size);
	font-weight: var(--font-secondary-weight);
`;
