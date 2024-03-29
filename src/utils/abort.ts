import { OptionalSearchParameters } from '@nut-tree/nut-js';

export const abort = (param: OptionalSearchParameters) => {
	if (param.abort?.onabort !== null) {
		param.abort?.onabort({} as any);
	}
};

export const abortMany = (...param: OptionalSearchParameters[]) => {
	param.forEach(abort);
};
