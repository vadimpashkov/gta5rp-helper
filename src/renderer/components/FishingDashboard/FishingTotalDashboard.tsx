import { FC } from 'react';

import { Wrapper, Panels } from './FishingDashboard.elements';

import { BeforeTheFishPriceUpdate, FishingTotalStatistics } from '..';

type FishingTotalDashboardProps = {
	className?: string;
};

export const FishingTotalDashboard: FC<FishingTotalDashboardProps> = ({ className }: FishingTotalDashboardProps) => {
	return (
		<Wrapper className={className}>
			<Panels>
				<BeforeTheFishPriceUpdate />
			</Panels>
			<FishingTotalStatistics />
		</Wrapper>
	);
};
