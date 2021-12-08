import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Icon } from './Button.elements';

type ButtonProps = {
	className?: string;
	srcIcon: string;
	isSelect?: boolean;
	onClick?: () => void;
	to?: string;
};

export const Button: FC<ButtonProps> = ({ className, srcIcon, isSelect, onClick, to }: ButtonProps) => {
	return (
		<Wrapper
			className={className}
			as={to !== undefined ? Link : Wrapper}
			to={to}
			isSelect={isSelect}
			onClick={onClick}
		>
			<Icon>
				<use href={srcIcon + '#outline'} />
				<use href={srcIcon + '#fill'} />
			</Icon>
		</Wrapper>
	);
};
