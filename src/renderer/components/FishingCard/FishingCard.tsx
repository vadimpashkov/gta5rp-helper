import { FC } from 'react';

import { Card } from '../Card';
import { RingDiagram } from '../RingDiagram';

type FishingCardProps = {
	className?: string;
	percent: number;
	name: string;
	count: number;
	color: string;
};

export const FishingCard: FC<FishingCardProps> = ({ className, percent, name, count, color }: FishingCardProps) => {
	return (
		<Card className={className} title={name} description={`${count} шт.`}>
			<RingDiagram size={46} color={color} percent={percent} />
		</Card>
	);
};
