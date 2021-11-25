import styled from 'styled-components';

export const Navigation = styled.nav`
	display: flex;
	flex-flow: column;
`;

export const Wrapper = styled.div`
	--z-index: var(--z-index-layout);
	--offset: var(--drag-panel-height);

	z-index: var(--z-index);
	margin-top: var(--offset);
`;
