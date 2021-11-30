import { FC } from 'react';

import { Wrapper } from './ButtonToForms.elements';

type ButtonToFormsProps = {
	className?: string;
	description: string;
	onClick?: () => void;
};

export const ButtonToForms: FC<ButtonToFormsProps> = ({ className, description, onClick }: ButtonToFormsProps) => {
	return (
		<Wrapper className={className} onClick={onClick}>
			{description}
		</Wrapper>
	);
};
