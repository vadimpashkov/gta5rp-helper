import { FC, memo, useState } from 'react';

import { RingDiagram } from '../RingDiagram';

import { Wrapper, Content, ContentName, ContentCount } from './FishingCard.elements';

type FishingCardProps = {
	className?: string;
	percent: number;
	name: string;
	count: number;
};

export const FishingCard: FC<FishingCardProps> = memo(({ className, percent, name, count }: FishingCardProps) => {
	percent = Number(parseFloat(percent.toString()).toFixed(1));

	return (
		<Wrapper className={className}>
			<RingDiagram size={46} percent={percent} />
			<Content>
				<ContentName>{name}</ContentName>
				<ContentCount>{count} шт.</ContentCount>
			</Content>
		</Wrapper>
	);
});
