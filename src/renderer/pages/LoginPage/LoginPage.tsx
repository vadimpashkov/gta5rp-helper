import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Wrapper } from './LoginPage.elements';

import { InputPassword, InputLogin, ButtonToForms } from '../../components';
import { useLogin } from '../../stores';

type LoginPageProps = {
	className?: string;
};

type Form = {
	login: string;
	password: string;
};

export const LoginPage: FC<LoginPageProps> = ({ className }: LoginPageProps) => {
	const { handleSubmit, register, ...rest } = useForm<Form>();
	const { login } = useLogin();

	return (
		<Wrapper className={className} onSubmit={handleSubmit(login)}>
			<InputLogin
				inputProps={register('login', {
					required: true,
				})}
			/>
			<InputPassword
				inputProps={register('password', {
					required: true,
				})}
			/>
			<ButtonToForms description="Войти" type="submit" />
		</Wrapper>
	);
};

// <ButtonToForms description="Войти" type="submit" onClick={() => console.log(rest.formState.errors)} />
