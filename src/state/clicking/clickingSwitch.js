const { screen: userScreen, OptionalSearchParameters } = require('@nut-tree/nut-js');

const { waitLmdState } = require('../waitLmd');
const { throwState } = require('../trow');

const clickingSwitch = async (config) => {
	const { lmbRegion, successRegion, errorRegion } = config;

	const lmbSearchParam = new OptionalSearchParameters(lmbRegion, 0.93);
	const successSearchParam = new OptionalSearchParameters(successRegion, 0.93);
	const errorSearchParam = new OptionalSearchParameters(errorRegion, 0.93);

	const works = [
		new Promise(async (resolve) => {
			try {
				const lmbIndicator = await userScreen.waitFor('hook.png', 50000, lmbSearchParam);

				config.lmbRegion = lmbIndicator;

				resolve('hook');
			} catch {}
		}),
		new Promise(async (resolve) => {
			try {
				const successInditacor = await userScreen.waitFor('success.png', 50000, successSearchParam);

				config.successRegion = successInditacor;

				resolve('success');
			} catch {}
		}),
		new Promise(async (resolve) => {
			try {
				const errorIndicator = await userScreen.waitFor('error.png', 50000, errorSearchParam);

				config.errorRegion = errorIndicator;

				resolve('error');
			} catch {}
		}),
	];

	const resolvedPromise = await Promise.any(works);

	switch (resolvedPromise) {
		case 'hook':
			return waitLmdState;

		default:
			return throwState;
	}
};

module.exports = { clickingSwitch };
