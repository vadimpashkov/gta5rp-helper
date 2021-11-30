import { FC } from 'react';

import { Wrapper, Svg, Input } from './InputLogin.elements';

import SvgLogin from '../../assets/svg/Login.svg';

type InputLoginProps = {
	className?: string;
};

export const InputLogin: FC<InputLoginProps> = ({ className }: InputLoginProps) => {
	return (
		<Wrapper className={className}>
			<Svg>
				<use href={`${SvgLogin}#outline`} />
			</Svg>
			<Input type="text" placeholder="Логин" />
		</Wrapper>
	);
};
