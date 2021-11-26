import { FC } from 'react';

import { Wrapper, Description } from './ParameterPanel.elements';

type ParameterPanelProps = {
	children: React.ReactNode;
	className?: string;
	description: string;
};

export const ParameterPanel: FC<ParameterPanelProps> = ({ children, className, description }: ParameterPanelProps) => {
	return (
		<Wrapper className={className}>
			<Description>{description}</Description>
			{children}
		</Wrapper>
	);
};
