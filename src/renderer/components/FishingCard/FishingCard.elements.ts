import styled from 'styled-components';

export const Wrapper = styled.div`
	--padding: var(--padding-main);
	--gap: var(--gap-main);
	--border-radius: var(--border-radius-main);
	--background-color: var(--color-button-main);

	display: flex;
	flex-flow: column;
	row-gap: var(--gap);
	padding: var(--padding);
	min-width: 140px;
	border-radius: var(--border-radius);
	background-color: var(--background-color);
	box-sizing: border-box;
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
	user-select: none;
`;

export const ContentCount = styled(ContentName)`
	--font-size: var(--font-accent-size);
	--font-weight: var(--font-accent-weight);
`;