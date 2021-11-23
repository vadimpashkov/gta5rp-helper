import styled from 'styled-components';

import svgFilter from '../../assets/svg/gooey-effect.svg';

type MainWrapperProps = {
	opacity?: number;
};

export const MainWrapperContainer = styled.div<MainWrapperProps>`
	position: absolute;
	display: flex;
	column-gap: var(--gap-main);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--transition-standard);
	filter: url(${svgFilter + '#gooey-rect'});

	&:hover {
		opacity: 1;
	}
`;
