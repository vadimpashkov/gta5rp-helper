import { FC } from 'react';

import { Wrapper, FishCountPanel } from './FishingDashboard.elements';

import { useSessionFish, useStatus } from '../../stores';

import { FishingCard, InfoPanel } from '../';

type FishingDashboardProps = {
	className?: string;
};

export const FishingDashboard: FC<FishingDashboardProps> = ({ className }: FishingDashboardProps) => {
	const fish = useSessionFish();
	const status = useStatus();

	const fishCount = fish.reduce((acc, item) => (acc += item.count), 0);

	const cards = fish.map((localFish) => {
		const count = localFish.count;
		const percent = fishCount > 0 ? (count / fishCount) * 100 : 0;

		return <FishingCard key={localFish.name} percent={percent} name={localFish.name} count={count} />;
	});

	return (
		<Wrapper className={className}>
			<InfoPanel title={status.name} description={status.description} />
			<FishCountPanel as={InfoPanel} title={fishCount.toString()} description="рыб поймано" />
			{cards}
		</Wrapper>
	);
};
