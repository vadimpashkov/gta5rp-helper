import { FC } from 'react';

import { Wrapper, Circle } from './FishQuantityDiagram.elements';

import { GroupedFish } from '../../../core/fishing/types';

import IconNotData from '../../assets/svg/fishNotData.svg';

type FishQuantityDiagramProps = {
	className?: string;
	size: number;
	fish: GroupedFish[];
	fishCount: number;
};

export const FishQuantityDiagram: FC<FishQuantityDiagramProps> = ({
	className,
	size,
	fish,
	fishCount,
}: FishQuantityDiagramProps) => {
	const circleCenterXY = size / 2;
	const circleStrokeWidth = circleCenterXY;
	const circleRadius = circleCenterXY - circleStrokeWidth / 2;
	const circumferenceLength = 2 * Math.PI * circleRadius;
	let circleOffset = 0;

	const circles = fish.map((localFish) => {
		const count = localFish.count;

		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;
		const percentageOfDistrict = circumferenceLength * (percent / 100);

		const circle = (
			<Circle
				key={localFish.name}
				cx={circleCenterXY}
				cy={circleCenterXY}
				strokeWidth={circleStrokeWidth}
				r={circleRadius}
				circumferenceLength={Math.round(circumferenceLength)}
				percentageOfDistrict={Math.round(percentageOfDistrict)}
				circleOffset={Math.round(circleOffset)}
				color={localFish.color}
			/>
		);

		circleOffset += percentageOfDistrict;

		return circle;
	});

	return (
		<Wrapper width={size} height={size}>
			{fishCount === 0 ? <use href={IconNotData + '#fishNotData'} /> : circles}
		</Wrapper>
	);
};
