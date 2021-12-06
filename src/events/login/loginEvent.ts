import { IpcEvent } from '../types';
import { AuthInfo } from '../../core';
import { createAxios } from '../../utils';
import { setToken } from '../../store';

export const loginEvent: IpcEvent<AuthInfo, string | void> = {
	name: 'login',
	handle: async (auth, emit) => {
		const axios = createAxios();

		try {
			const loginResponse = await axios.post<{ access_token: string }>('auth/login', {
				username: auth.login,
				password: auth.password,
			});

			setToken(loginResponse.data.access_token);
			emit('loginSuccess');
		} catch {
			emit('loginError', 'Не получается войти');
		}
	},
};
