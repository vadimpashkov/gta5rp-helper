import { FC } from 'react';

import { Wrapper } from './FishingStatistics.elements';

import { AvailableFish } from '../../../core';
import { useTotalFish } from '../../stores';

import { Card } from '../Card';
import { FishingCard } from '../FishingCard';
import { FishTotalQuantityDiagram } from '../FishQuantityDiagram';

type FishingTotalStatisticsProps = {
	className?: string;
};

export const FishingTotalStatistics: FC<FishingTotalStatisticsProps> = ({ className }: FishingTotalStatisticsProps) => {
	const fish = useTotalFish();

	const totalFishCount = fish.reduce((acc, item) => (acc += item.count), 0);

	const cards = fish.map((localFish) => {
		const foundFish = AvailableFish.filter((localFish) => localFish.name === localFish.name)[0];
		const count = localFish.count;
		const percent = totalFishCount > 0 ? (count / totalFishCount) * 100 : 0;

		return (
			<FishingCard
				key={localFish.name}
				percent={percent}
				name={foundFish.name}
				count={count}
				color={foundFish.color}
			/>
		);
	});

	return (
		<Wrapper className={className}>
			{cards}
			<Card className={className} title="Всего" description={`${totalFishCount} шт.`}>
				<FishTotalQuantityDiagram size={46} fish={fish} fishCount={totalFishCount} />
			</Card>
		</Wrapper>
	);
};
