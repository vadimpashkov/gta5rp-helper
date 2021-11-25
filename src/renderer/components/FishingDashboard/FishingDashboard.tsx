import { FC } from 'react';

import { Wrapper, Panels } from './FishingDashboard.elements';

import { useStatus } from '../../stores';

import { InfoPanel } from '../InfoPanel';
import { BeforeTheFishPriceUpdate } from '../BeforeTheFishPriceUpdate';
import { FishingStatistics } from '../FishingStatistics';

type FishingDashboardProps = {
	className?: string;
};

export const FishingDashboard: FC<FishingDashboardProps> = ({ className }: FishingDashboardProps) => {
	const { status } = useStatus();

	return (
		<Wrapper className={className}>
			<Panels>
				<BeforeTheFishPriceUpdate />
				<InfoPanel title={status.name} description={status.description} />
			</Panels>
			<FishingStatistics />
		</Wrapper>
	);
};
