import { FC } from 'react';

import { Wrapper } from './ButtonToForms.elements';

type ButtonToFormsProps = {
	className?: string;
	description: string;
} & React.InputHTMLAttributes<HTMLButtonElement>;

export const ButtonToForms: FC<ButtonToFormsProps> = ({ className, description, ...rest }: ButtonToFormsProps) => {
	return (
		<Wrapper className={className} {...(rest as any)}>
			{description}
		</Wrapper>
	);
};
