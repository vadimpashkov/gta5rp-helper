import styled from 'styled-components';

type PieChartProps = {
	percent: number;
};

export const PieChart = styled.div<PieChartProps>`
	--size: 46px;
	--border-width: 4px;
	--color: var(--color-font);
	--font-family: var(--font-secondary-family);
	--font-size: var(--font-secondary-size);
	--font-weight: var(--font-secondary-weight);

	--chart-background-color: var(--color-button-main);
	--chart-remnant-color: var(--color-button-main-hover);
	--chart-progress-color: var(--color-primary);

	--percent: ${({ percent }) => percent};
	--degree: calc(((18 / 5) * var(--percent) - 90) * 1deg);

	box-sizing: border-box;
	padding: var(--border-width);
	width: var(--size);
	height: var(--size);
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	color: var(--color);
	border-radius: 50%;
	background: linear-gradient(var(--chart-background-color), var(--chart-background-color)) content-box,
		linear-gradient(var(--degree), var(--chart-remnant-color) 50%, transparent 0) 0 /
			min(100%, (50 - var(--percent)) * 100%),
		linear-gradient(var(--degree), transparent 50%, var(--chart-progress-color) 0) 0 /
			min(100%, (var(--percent) - 50) * 100%),
		linear-gradient(to right, var(--chart-remnant-color) 50%, var(--chart-progress-color) 0);
	user-select: none;
`;
