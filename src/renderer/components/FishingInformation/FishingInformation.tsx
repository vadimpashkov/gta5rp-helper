import { FC } from 'react';

import { Wrapper, Column } from './FishingInformation.elements';

import { BeforeTheFishPriceUpdate, InfoPanel, FishingTotalDashboard } from '../';

type FishingInformationProps = {
	className?: string;
};

export const FishingInformation: FC<FishingInformationProps> = ({ className }: FishingInformationProps) => {
	return (
		<Wrapper className={className}>
			<FishingTotalDashboard />
			<Column>
				<BeforeTheFishPriceUpdate />
				<InfoPanel title="0" description="рыб поймано" />
				<InfoPanel title="Я есть бот" description="статус" />
			</Column>
		</Wrapper>
	);
};
