import { FC } from 'react';

import { MainWrapperContainer } from './MainWrapper.elements';

type MainWrapperProps = {
	children: React.ReactNode;
	className?: string;
	opacity: number;
};

export const MainWrapper: FC<MainWrapperProps> = ({ children, className, opacity }: MainWrapperProps) => {
	return (
		<MainWrapperContainer className={className} opacity={opacity}>
			{children}
		</MainWrapperContainer>
	);
};
