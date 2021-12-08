import styled from 'styled-components';

import { ContainerFlexCenter } from '../../styles';

const TrafficLightItem = styled.button`
	--size: 12px;

	width: var(--size);
	height: var(--size);
	border: 0.5px solid var(--color-background-five);
	border-radius: 50%;
	background-color: var(--background-color);
	cursor: pointer;
	transition: transform var(--transition);

	&:focus {
		outline: none;
	}

	&:focus-visible {
		transform: scale(1.2);
	}
`;

export const Maximize = styled(TrafficLightItem)`
	--background-color: var(--color-traffic-light-maximize);
`;

export const Minimize = styled(TrafficLightItem)`
	--background-color: var(--color-traffic-light-minimize);
`;

export const Close = styled(TrafficLightItem)`
	--background-color: var(--color-traffic-light-close);
`;

export const Wrapper = styled(ContainerFlexCenter)`
	--gap: var(--gap-traffic-light);
	--transition: var(--time-standard) var(--bezier-rubber);
	justify-content: flex-end;
`;
