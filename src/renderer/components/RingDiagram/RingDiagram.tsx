import { FC, useEffect, useState } from 'react';

import { Wrapper, Svg, Remains, Progress, Meaning } from './RingDiagram.elements';

type RingDiagramProps = {
	className?: string;
	size: number;
	percent: number;
};

export const RingDiagram: FC<RingDiagramProps> = ({ className, size, percent }: RingDiagramProps) => {
	const [currentPercent, setCurrentPercent] = useState(percent);

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

	const circleCenterXY = size / 2;
	const circleStrokeWidth = size / 11.5;
	const circleRadius = circleCenterXY - circleStrokeWidth / 2;

	const circumferenceLength = 2 * Math.PI * circleRadius;
	const circleOffset = circumferenceLength - (percent / 100) * circumferenceLength;

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
			<Meaning>{Number(currentPercent.toFixed(1))}%</Meaning>
		</Wrapper>
	);
};
