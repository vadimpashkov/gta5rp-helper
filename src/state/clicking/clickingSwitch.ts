import { waitLmdState } from '../waitLmd';
import { Config, StateSwitch } from '../types';
import { waitForImageGone } from '@utils/waitForImageGone';
import { createParam } from '@utils/parameterFactory';

export const clickingSwitch: StateSwitch = async (config: Config) => {
	const { lmbRegion } = config;

	const lmbSearchParam = createParam(lmbRegion, 0.99);

	await waitForImageGone('lmb.png', 30000, lmbSearchParam);

	lmbSearchParam.abort.onabort({} as any);

	return waitLmdState;
};
