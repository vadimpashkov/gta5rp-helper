import styled from 'styled-components';

import { Svg, ContainerFlexCenter } from '../../styles';

export const Icon = styled(Svg)`
	--fill: hsl(var(--color-brand-item));
`;

export const Wrapper = styled(ContainerFlexCenter)`
	position: relative;
	left: -8px;
`;
