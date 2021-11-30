import { FC } from 'react';

import { Wrapper } from './LoginPage.elements';

import { InputPassword, InputLogin, ButtonToForms } from '../../components';

type LoginPageProps = {
	className?: string;
};

export const LoginPage: FC<LoginPageProps> = ({ className }: LoginPageProps) => {
	return (
		<Wrapper className={className}>
			<InputLogin />
			<InputPassword />
			<ButtonToForms description="Войти" />
		</Wrapper>
	);
};
