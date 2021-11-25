import styled from 'styled-components';

import svgFilter from '../../assets/svg/gooeyEffect.svg';

type MainWrapperProps = {
	opacity?: number;
};

export const MainWrapperContainer = styled.div<MainWrapperProps>`
	position: absolute;
	display: flex;
	column-gap: var(--gap-main);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--time-standard) var(--bezier-rubber);
	filter: url(${svgFilter + '#gooey-rect'});

	&:hover {
		opacity: 1;
	}
`;
