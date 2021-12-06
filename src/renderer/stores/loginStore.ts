import { useEffect } from 'react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { useAuth } from './authStore';

import { sendEvent, receiveEvent } from '../utils';

import { AuthInfo } from '../../core';

const store = atom({
	loading: false,
	success: false,
	error: '',
});

receiveEvent('loginError', (error: string) => {
	store.set({
		loading: false,
		success: false,
		error,
	});
});

receiveEvent('loginSuccess', () => {
	store.set({
		loading: false,
		success: true,
		error: '',
	});
});

export const useLogin = () => {
	const authState = useStore(store);
	const { setAuth } = useAuth();

	useEffect(() => {
		if (!authState.loading && authState.success) {
			setAuth(true);
			store.set({
				loading: false,
				success: false,
				error: '',
			});
		}
	}, [authState]);

	const login = (authInfo: AuthInfo) => {
		sendEvent('login', authInfo);
		store.set({
			error: '',
			loading: true,
			success: false,
		});
	};

	return {
		authState,
		login,
	};
};
