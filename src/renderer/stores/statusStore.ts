import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

import { receiveEvent } from '../utils';

const store = atom({
	name: 'Запуск бота',
	description: 'Поиск первичных данных',
});

receiveEvent<{ name: string; description: string }>('newState', (data) => {
	store.set(data);
});

export const useStatus = () => {
	const status = useStore(store);
	return {
		status,
		reset: () =>
			store.set({
				name: 'Бот выключен',
				description: 'Нет данных для запуска бота',
			}),
	};
};
