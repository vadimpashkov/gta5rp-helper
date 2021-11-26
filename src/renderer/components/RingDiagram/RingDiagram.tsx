import { FC, useEffect, useState } from 'react';

import { Wrapper, Remains, Progress, Text } from './RingDiagram.elements';

type RingDiagramProps = {
	className?: string;
	size: number;
	color: string;
	percent: number;
};

export const RingDiagram: FC<RingDiagramProps> = ({ className, size, percent, color }: RingDiagramProps) => {
	const [currentPercent, setCurrentPercent] = useState(percent);

	const circleCenterXY = size / 2;
	const circleStrokeWidth = size / 11.5;
	const circleRadius = circleCenterXY - circleStrokeWidth / 2;

	const circumferenceLength = 2 * Math.PI * circleRadius;
	const circleOffset =
		percent >= 1 ? circumferenceLength - (percent / 100) * circumferenceLength : circumferenceLength;

	useEffect(() => {
		let timer: NodeJS.Timer | null = null;

		if (Math.round(percent) !== Math.round(currentPercent)) {
			const percentToUpdateTime = percent === 0 ? 1 : percent;
			const currentPercentToUpdateTime = currentPercent === 0 ? 1 : currentPercent;
			const updateTime =
				(percent > currentPercent
					? percentToUpdateTime / currentPercentToUpdateTime
					: currentPercentToUpdateTime / percentToUpdateTime) * 2;
			const stepCount = Math.ceil(650 / updateTime);
			const step = Math.abs(currentPercent - percent) / stepCount;
			let count = 0;

			const clear = () => {
				if (timer !== null) {
					clearInterval(timer!);
				}

				setCurrentPercent(percent);
			};

			timer = setTimeout(function timeout() {
				setCurrentPercent((old) => {
					if (Math.round(old) === Math.round(percent)) {
						clear();
						return old;
					}

					return old + (Math.round(percent) > Math.round(old) ? step : -1 * step);
				});

				count++;

				if (count <= stepCount) {
					timer = setTimeout(timeout, updateTime);
				} else {
					clear();
				}
			}, updateTime);
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [percent]);

	return (
		<Wrapper
			className={className}
			width={size}
			height={size}
			circumferenceLength={circumferenceLength}
			circleOffset={circleOffset}
		>
			<Remains cx={circleCenterXY} cy={circleCenterXY} strokeWidth={circleStrokeWidth} r={circleRadius} />
			<Progress
				cx={circleCenterXY}
				cy={circleCenterXY}
				strokeWidth={circleStrokeWidth}
				r={circleRadius}
				stroke={color}
			/>
			<Text x="50%" y="50%">
				{Number(currentPercent.toFixed(1))}%
			</Text>
		</Wrapper>
	);
};
