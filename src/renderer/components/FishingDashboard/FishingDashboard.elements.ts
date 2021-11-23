import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	row-gap: var(--gap-main);
`;

export const Panels = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	column-gap: var(--gap-main);
`;
