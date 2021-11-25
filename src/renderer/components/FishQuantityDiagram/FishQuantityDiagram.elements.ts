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

export const Svg = styled.svg``;

export const Wrapper = styled.div`
	--color: var(--button-color-hover);
	--transition: var(--time-very-long) var(--bezier-rubber);

	& use {
		fill: var(--color);
	}
`;
