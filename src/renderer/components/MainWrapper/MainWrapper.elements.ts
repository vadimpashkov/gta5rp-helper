import styled from 'styled-components';

import svgFilter from '../../assets/svg/gooeyEffect.svg';

type ContainerProps = {
	opacity?: number;
};

export const Container = styled.div<ContainerProps>`
	--gap: var(--gap-main);
	--transition: var(--time-standard) var(--bezier-rubber);
	--offset: var(--height-drag-panel);

	box-sizing: border-box;
	position: absolute;
	display: flex;
	padding-top: var(--offset);
	gap: var(--gap);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--transition);
	filter: url(${svgFilter + '#rect'});

	&:hover {
		opacity: 1;
	}
`;
