import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template: auto 1fr / 1fr 1fr 1fr;
	gap: var(--gap-main);
	padding-bottom: 20px;
`;

export const FishCountPanel = styled.div`
	grid-column: 1 / -1;
`;
