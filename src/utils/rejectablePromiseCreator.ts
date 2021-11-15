export const createCancelable = <TData, TOut>(work: (data: TData) => Promise<TOut>) => {
	let rejectFn;

	const launch = (data: TData) =>
		new Promise<TOut>((resolve, reject) => {
			rejectFn = reject.bind(this);

			work(data).then(resolve).catch(reject);
		});

	const cancel = () => {
		rejectFn({ canceled: true });
	};

	return { launch, cancel };
};
