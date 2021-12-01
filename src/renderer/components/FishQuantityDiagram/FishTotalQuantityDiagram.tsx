import { FC } from 'react';

import { Wrapper, Circle } from './FishQuantityDiagram.elements';

import { AvailableFish } from '../../../core';

import IconNotData from '../../assets/svg/fishNotData.svg';

type FishTotalQuantityDiagramProps = {
	className?: string;
	size: number;
	fishCount: number;
	fish: {};
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

	const circles = Object.keys(fish).map((key) => {
		const foundFish = AvailableFish.filter((localFish) => localFish.storedName === key)[0];
		const count = (fish as { [key: string]: number })[key];
		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;
		const percentageOfDistrict = circumferenceLength * (percent / 100);

		const circle = (
			<Circle
				key={key}
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
