import styled from 'styled-components';

export const Navigation = styled.nav`
	display: flex;
	flex-flow: column;
`;

export const Wrapper = styled.div`
	--z-index: var(--z-index-layout);

	z-index: var(--z-index);
`;
