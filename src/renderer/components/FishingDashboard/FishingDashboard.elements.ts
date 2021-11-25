import styled from 'styled-components';

export const Panels = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	column-gap: var(--gap);
`;

export const Wrapper = styled.div`
	--gap: var(--gap-main);

	display: flex;
	flex-flow: column;
	row-gap: var(--gap);
	margin-bottom: 10px;
`;
