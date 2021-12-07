import { FC } from 'react';

import { Wrapper, Circle } from './FishQuantityDiagram.elements';

import { AvailableFish } from '../../../core';

import IconNotData from '../../assets/svg/fishNotData.svg';

type FishTotalQuantityDiagramProps = {
	className?: string;
	size: number;
	fishCount: number;
	fish: { name: string; count: number }[];
};

export const FishTotalQuantityDiagram: FC<FishTotalQuantityDiagramProps> = ({
	className,
	size,
	fishCount,
	fish,
}: FishTotalQuantityDiagramProps) => {
	const circleCenterXY = size / 2;
	const circleStrokeWidth = circleCenterXY;
	const circleRadius = circleCenterXY - circleStrokeWidth / 2;
	const circumferenceLength = 2 * Math.PI * circleRadius;
	let circleOffset = 0;

	const circles = fish.map((localFish) => {
		const foundFish = AvailableFish.filter((filterFish) => filterFish.name === localFish.name)[0];
		const count = localFish.count;
		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;
		const percentageOfDistrict = circumferenceLength * (percent / 100);

		const circle = (
			<Circle
				key={localFish.count + 'circle'}
				cx={circleCenterXY}
				cy={circleCenterXY}
				strokeWidth={circleStrokeWidth}
				r={circleRadius}
				circumferenceLength={Math.round(circumferenceLength)}
				percentageOfDistrict={Math.round(percentageOfDistrict)}
				circleOffset={Math.round(circleOffset)}
				color={foundFish.color}
			/>
		);

		circleOffset += percentageOfDistrict;

		return circle;
	});

	return (
		<Wrapper className={className} width={size} height={size}>
			{fishCount === 0 ? <use href={IconNotData + '#fishNotData'} /> : circles}
		</Wrapper>
	);
};
