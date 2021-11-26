import styled from 'styled-components';

type RingDiagramProps = {
	circumferenceLength: number;
	circleOffset: number;
};

export const Text = styled.text`
	fill: currentColor;
	text-anchor: middle;
	transform: translateY(calc(var(--font-size) / 2.5));
`;

const Circle = styled.circle`
	fill: transparent;
	transform-origin: center;
	transform: rotate(-90deg);
	transition: stroke-dashoffset var(--transition);
`;

export const Remains = styled(Circle)`
	stroke: var(--color-remains);
`;

export const Progress = styled(Circle)``;

export const Wrapper = styled.svg<RingDiagramProps>`
	--font-family: var(--font-secondary-family);
	--font-size: var(--font-secondary-size);
	--font-weight: var(--font-secondary-weight);
	--color: var(--font-primary-color);

	--color-remains: var(--color);

	--transition: var(--time-very-long) var(--bezier-rubber);

	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
	line-height: 1;

	${Remains} {
		stroke-dasharray: ${({ circumferenceLength }) => `${circumferenceLength} ${circumferenceLength}`};
		stroke-dashoffset: ${({ circumferenceLength, circleOffset }) => (circumferenceLength - circleOffset) * -1};
	}

	${Progress} {
		stroke-dasharray: ${({ circumferenceLength }) => `${circumferenceLength} ${circumferenceLength}`};
		stroke-dashoffset: ${({ circleOffset }) => circleOffset};
	}
`;
