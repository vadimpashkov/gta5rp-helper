import { FC } from 'react';

import { Wrapper, Title, Description } from './InfoPanel.elements';

type InfoPanelProps = {
	className?: string;
	title: string;
	description: string;
};

export const InfoPanel: FC<InfoPanelProps> = ({ className, title, description }: InfoPanelProps) => {
	return (
		<Wrapper className={className}>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Wrapper>
	);
};
