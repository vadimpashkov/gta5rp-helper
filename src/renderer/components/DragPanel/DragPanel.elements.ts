import styled from 'styled-components';

export const Wrapper = styled.nav`
	--padding: 0 20px;
	--height: 52px;
	--background-color: var(--color-background-one);
	--backdrop-filter: var(--filter-blur-primary);
	--box-shadow: var(--shadow-inset-primary);

	box-sizing: border-box;
	padding: var(--padding);
	display: flex;
	align-content: center;
	justify-content: space-between;
	width: 100%;
	height: var(--height);
	background-color: var(--background-color);
	backdrop-filter: var(--backdrop-filter);
	box-shadow: var(--box-shadow);
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;
