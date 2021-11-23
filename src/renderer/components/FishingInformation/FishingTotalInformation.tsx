import { FC } from 'react';

import { Wrapper, Panels } from './FishingInformation.elements';

import { BeforeTheFishPriceUpdate, InfoPanel, FishingTotalDashboard } from '..';

type FishingInformationProps = {
	className?: string;
};

export const FishingTotalInformation: FC<FishingInformationProps> = ({ className }: FishingInformationProps) => {
	return (
		<Wrapper className={className}>
			<Panels>
				<BeforeTheFishPriceUpdate />
				<InfoPanel title="Я есть бот" description="статус" />
			</Panels>
			<FishingTotalDashboard />
		</Wrapper>
	);
};