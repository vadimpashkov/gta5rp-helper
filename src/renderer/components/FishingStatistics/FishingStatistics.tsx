import { FC } from 'react';

import { Wrapper, FishCountPanel } from './FishingStatistics.elements';

import { useSessionFish } from '../../stores';

import { FishingCard, InfoPanel } from '..';

type FishingStatisticsProps = {
	className?: string;
};

export const FishingStatistics: FC<FishingStatisticsProps> = ({ className }: FishingStatisticsProps) => {
	const fish = useSessionFish();

	const fishCount = fish.reduce((acc, item) => (acc += item.count), 0);

	const cards = fish.map((localFish) => {
		const count = localFish.count;
		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;

		return <FishingCard key={localFish.name} percent={percent} name={localFish.name} count={count} />;
	});

	return (
		<Wrapper className={className}>
			<FishCountPanel as={InfoPanel} title={fishCount.toString()} description="рыб поймано" />
			{cards}
		</Wrapper>
	);
};
