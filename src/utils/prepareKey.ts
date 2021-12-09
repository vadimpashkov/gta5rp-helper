import { Key } from '../core';

export const prepareKey = (key: number): any => {
	return Key[key].replaceAll('Key', '').toLocaleLowerCase();
};
