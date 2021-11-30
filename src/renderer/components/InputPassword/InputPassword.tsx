import { FC, useState } from 'react';

import { Wrapper, Svg, Input, Button } from './InputPassword.elements';

import SvgLock from '../../assets/svg/lock.svg';
import SvgEye from '../../assets/svg/eye.svg';

type InputPasswordProps = {
	className?: string;
};

export const InputPassword: FC<InputPasswordProps> = ({ className }: InputPasswordProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClick = () => {
		setShowPassword((old) => !old);
	};

	return (
		<Wrapper className={className} showPassword={showPassword}>
			<Svg>
				<use href={`${SvgLock}#outline`} />
			</Svg>
			<Input type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
			<Button onClick={handleClick}>
				<Svg>
					<use href={`${SvgEye}#closed`} />
					<use href={`${SvgEye}#open`} />
				</Svg>
			</Button>
		</Wrapper>
	);
};
