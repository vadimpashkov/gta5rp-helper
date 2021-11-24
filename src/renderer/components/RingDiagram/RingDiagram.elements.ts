import styled from 'styled-components';

type RingDiagramProps = {
	size: number;
	circumferenceLength: number;
	circleOffset: number;
};

export const Meaning = styled.p`
	margin: 0;
`;

export const Circle = styled.circle`
	fill: transparent;
	transform-origin: center;
	transform: rotate(-90deg);
	transition: stroke-dashoffset var(--transition);
`;

export const Remains = styled(Circle)`
	stroke: var(--color-remains);
`;

export const Progress = styled(Circle)`
	stroke: var(--color-progress);
`;

export const Svg = styled.svg`
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const Wrapper = styled.div<RingDiagramProps>`
	--size: ${({ size }) => `${size}px`};
	--font-family: var(--font-secondary-family);
	--font-size: var(--font-secondary-size);
	--font-weight: var(--font-secondary-weight);

	--color: var(--color-font);

	--color-remains: var(--color-font);
	--color-progress: var(--color-primary);

	--transition: var(--transition-duration-very-long) var(--transition-bezier-rubber);

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--size);
	height: var(--size);
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);

	${Remains} {
		stroke-dasharray: ${({ circumferenceLength }) => `${circumferenceLength} ${circumferenceLength}`};
		stroke-dashoffset: ${({ circumferenceLength, circleOffset }) => (circumferenceLength - circleOffset) * -1};
	}

	${Progress} {
		stroke-dasharray: ${({ circumferenceLength }) => `${circumferenceLength} ${circumferenceLength}`};
		stroke-dashoffset: ${({ circleOffset }) => circleOffset};
	}
`;
