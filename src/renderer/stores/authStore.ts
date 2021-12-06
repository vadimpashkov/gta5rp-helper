import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const store = atom(false);

export const useAuth = () => {
	const auth = useStore(store);

	const setAuth = (value: boolean) => {
		store.set(value);
	};

	return {
		auth,
		setAuth,
	};
};
