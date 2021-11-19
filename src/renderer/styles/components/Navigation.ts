import styled from 'styled-components';

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: column;
	list-style-type: none;
`;

export const NavigationListItem = styled.li`
	overflow: hidden;

	&:last-of-type {
		border-bottom-left-radius: var(--border-radius-main);
		border-bottom-right-radius: var(--border-radius-main);
	}
`;
