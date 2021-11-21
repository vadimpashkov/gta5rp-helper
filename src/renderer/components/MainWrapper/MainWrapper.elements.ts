import styled from 'styled-components';

type MainWrapperProps = {
	opacity?: number;
};

export const MainWrapperContainer = styled.div<MainWrapperProps>`
	position: absolute;
	display: flex;
	column-gap: var(--gap-main);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--transition-standard);

	&:hover {
		opacity: 1;
	}
`;
