import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Svg } from './Button.elements';

type ButtonProps = {
	className?: string;
	srcIcon: string;
	isSelect?: boolean;
	onClick?: () => void;
	to?: string;
	disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ className, srcIcon, isSelect, onClick, to, disabled }: ButtonProps) => {
	return (
		<Wrapper
			className={className}
			as={(to !== undefined ? Link : Wrapper) as any}
			to={to}
			isSelect={isSelect}
			onClick={onClick}
			disabled={disabled}
		>
			<Svg>
				<use href={srcIcon + '#outline'} />
				<use href={srcIcon + '#fill'} />
			</Svg>
		</Wrapper>
	);
};
