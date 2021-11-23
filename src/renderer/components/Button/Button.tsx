import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Svg } from './Button.elements';

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
			as={to !== undefined ? Link : Wrapper}
			to={to}
			className={className}
			isSelect={isSelect}
			onClick={onClick}
		>
			<Svg>
				<use href={srcIcon + '#outline'} />
				<use href={srcIcon + '#fill'} />
			</Svg>
		</Wrapper>
	);
};
