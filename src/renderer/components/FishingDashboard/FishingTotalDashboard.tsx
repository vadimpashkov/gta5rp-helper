import { FC } from 'react';

import { Wrapper } from './FishingDashboard.elements';

import { AvailableFish } from '../../../core';
import { useTotalFish } from '../../stores';

import { FishingCard } from '../FishingCard';

type FishingDashboardProps = {
	className?: string;
};

export const FishingTotalDashboard: FC<FishingDashboardProps> = ({ className }: FishingDashboardProps) => {
	const fish = useTotalFish();

	const totalFishCount = Object.keys(fish).reduce(
		(acc, item) => (acc += (fish as { [key: string]: number })[item]),
		0,
	);

	const cards = Object.keys(fish).map((key) => {
		const foundFish = AvailableFish.filter((localFish) => localFish.storedName === key)[0];
		const count = (fish as { [key: string]: number })[key];
		const percent = totalFishCount > 0 ? (count / totalFishCount) * 100 : 0;

		return <FishingCard key={key} percent={percent} name={foundFish.name} count={count} />;
	});

	return <Wrapper className={className}>{cards}</Wrapper>;
};
