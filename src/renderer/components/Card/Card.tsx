import { FC } from 'react';

import { Wrapper, Content, Title, Description } from './Card.elements';

type CardProps = {
	children: React.ReactNode;
	className?: string;
	title: string;
	description: string;
};

export const Card: FC<CardProps> = ({ children, className, title, description }: CardProps) => {
	return (
		<Wrapper className={className}>
			{children}
			<Content>
				<Title as="h3">{title}</Title>
				<Description>{description}</Description>
			</Content>
		</Wrapper>
	);
};
