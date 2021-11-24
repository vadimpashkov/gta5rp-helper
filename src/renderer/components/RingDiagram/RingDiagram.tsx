import { FC } from 'react';

import { Wrapper, Svg, Remains, Progress, Meaning } from './RingDiagram.elements';

type RingDiagramProps = {
	className?: string;
	size: number;
	percent: number;
};

export const RingDiagram: FC<RingDiagramProps> = ({ className, size, percent }: RingDiagramProps) => {
	const circleCenterXY = size / 2;
	const circleStrokeWidth = size / 11.5;
	const circleRadius = circleCenterXY - circleStrokeWidth / 2;

	const circumferenceLength = 2 * Math.PI * circleRadius;
	const circleOffset = circumferenceLength - (percent / 100) * circumferenceLength;

	console.log(circumferenceLength);

	return (
		<Wrapper
			className={className}
			size={size}
			circumferenceLength={circumferenceLength}
			circleOffset={circleOffset}
		>
			<Svg>
				<Remains cx={circleCenterXY} cy={circleCenterXY} strokeWidth={circleStrokeWidth} r={circleRadius} />
				<Progress cx={circleCenterXY} cy={circleCenterXY} strokeWidth={circleStrokeWidth} r={circleRadius} />
			</Svg>
			<Meaning>{percent}%</Meaning>
		</Wrapper>
	);
};
