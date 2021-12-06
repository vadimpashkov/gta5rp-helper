import { FC } from 'react';

import { Wrapper, Svg, Input } from './InputLogin.elements';

import SvgLogin from '../../assets/svg/Login.svg';

type InputLoginProps = {
	className?: string;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const InputLogin: FC<InputLoginProps> = ({ className, inputProps }: InputLoginProps) => {
	return (
		<Wrapper className={className}>
			<Svg>
				<use href={`${SvgLogin}#outline`} />
			</Svg>
			<Input {...inputProps} type="text" placeholder="Логин" />
		</Wrapper>
	);
};
