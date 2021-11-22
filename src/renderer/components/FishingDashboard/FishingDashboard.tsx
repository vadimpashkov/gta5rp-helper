import { FC } from 'react';

import { Wrapper } from './FishingDashboard.elements';

import { useSessionFish } from '../../stores';

import { FishingCard } from '../FishingCard';

type FishingDashboardProps = {
	className?: string;
};

export const FishingDashboard: FC<FishingDashboardProps> = ({ className }: FishingDashboardProps) => {
	const fish = useSessionFish();

	const totalFishCount = fish.reduce((acc, item) => (acc += item.count), 0);

	const cards = fish.map((localFish) => {
		const count = localFish.count;
		const percent = totalFishCount > 0 ? (count / totalFishCount) * 100 : 0;

		return <FishingCard key={localFish.name} percent={percent} name={localFish.name} count={count} />;
	});

	return <Wrapper className={className}>{cards}</Wrapper>;
};
