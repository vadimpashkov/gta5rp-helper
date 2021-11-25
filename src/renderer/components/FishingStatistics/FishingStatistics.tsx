import { FC } from 'react';

import { Wrapper } from './FishingStatistics.elements';

import { useSessionFish } from '../../stores';

import { FishingCard } from '../FishingCard';
import { Card } from '../Card';
import { FishQuantityDiagram } from '../FishQuantityDiagram';

type FishingStatisticsProps = {
	className?: string;
};

export const FishingStatistics: FC<FishingStatisticsProps> = ({ className }: FishingStatisticsProps) => {
	const fish = useSessionFish();

	const fishCount = fish.reduce((acc, item) => (acc += item.count), 0);

	const cards = fish.map((localFish) => {
		const count = localFish.count;
		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;

		return (
			<FishingCard
				key={localFish.name}
				percent={percent}
				name={localFish.name}
				count={count}
				color={localFish.color}
			/>
		);
	});

	return (
		<Wrapper className={className}>
			{cards}
			<Card className={className} title="Всего" description={`${fishCount} шт.`}>
				<FishQuantityDiagram size={46} fish={fish} fishCount={fishCount} />
			</Card>
		</Wrapper>
	);
};
