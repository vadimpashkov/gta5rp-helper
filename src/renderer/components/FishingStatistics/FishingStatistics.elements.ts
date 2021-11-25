import styled from 'styled-components';

export const Wrapper = styled.div`
	--gap: var(--gap-main);

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--gap);
`;
