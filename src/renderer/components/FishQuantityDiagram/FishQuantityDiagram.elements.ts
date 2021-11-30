import styled from 'styled-components';

type CircleProps = {
	circumferenceLength: number;
	percentageOfDistrict: number;
	circleOffset: number;
	color: string;
};

export const Circle = styled.circle<CircleProps>`
	fill: transparent;
	transform-origin: center;
	transform: rotate(-90deg);
	stroke: ${({ color }) => color};
	stroke-dasharray: ${({ percentageOfDistrict, circumferenceLength }) =>
		`${percentageOfDistrict} ${circumferenceLength - percentageOfDistrict}`};
	stroke-dashoffset: ${({ circleOffset }) => circleOffset * -1};
	transition: stroke-dashoffset var(--transition);
`;

export const Wrapper = styled.svg`
	--color: hsl(var(--color-text-primary));
	--transition: var(--time-very-long) var(--bezier-rubber);

	& use {
		fill: var(--color);
	}
`;
