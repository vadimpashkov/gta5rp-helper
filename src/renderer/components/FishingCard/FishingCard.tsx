import { FC } from 'react';

import { PieChart } from '../../styles';

import { Wrapper, Content, ContentName, ContentCount } from './FishingCard.elements';

type FishingCardProps = {
	className?: string;
	percent: number;
	name: string;
	count: number;
};

export const FishingCard: FC<FishingCardProps> = ({ className, percent, name, count }: FishingCardProps) => {
	percent = Number(parseFloat(percent.toString()).toFixed(1));

	return (
		<Wrapper className={className}>
			<PieChart percent={percent}>{percent}%</PieChart>
			<Content>
				<ContentName>{name}</ContentName>
				<ContentCount>{count} шт.</ContentCount>
			</Content>
		</Wrapper>
	);
};
