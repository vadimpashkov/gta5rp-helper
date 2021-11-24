import { FC } from 'react';

import { RingDiagram } from '../RingDiagram';

import { Wrapper, Content, ContentName, ContentCount } from './FishingCard.elements';

type FishingCardProps = {
	className?: string;
	percent: number;
	name: string;
	count: number;
};

export const FishingCard: FC<FishingCardProps> = ({ className, percent, name, count }: FishingCardProps) => {
	return (
		<Wrapper className={className}>
			<RingDiagram size={46} percent={percent} />
			<Content>
				<ContentName>{name}</ContentName>
				<ContentCount>{count} шт.</ContentCount>
			</Content>
		</Wrapper>
	);
};
