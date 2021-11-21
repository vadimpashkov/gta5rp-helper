import { FC } from 'react';

import { Wrapper } from './FishingDashboard.elements';

type FishingDashboardProps = {
	children: React.ReactNode;
	className?: string;
};

export const FishingDashboard: FC<FishingDashboardProps> = ({ children, className }: FishingDashboardProps) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};
