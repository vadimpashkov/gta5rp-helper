const rejectionArray: (() => void)[] = [];

export const createDeferredCanceled = <TData, TOut>(work: (data: TData) => Promise<TOut>) => {
	const launch = cancelable((data: TData) => work(data));

	const cancel = () => {
		rejectionArray.forEach(abort => {
			if (abort) abort();
		})
	};

	return { launch, cancel };
};

export function cancelable<A, T>   					(fnToFetch: (a: A) => Promise<T>): 									(a: A) => Promise<T>;
export function cancelable<A, B, T>   				(fnToFetch: (a: A, b: B) => Promise<T>): 							(a: A, b: B) => Promise<T>;
export function cancelable<A, B, C, T>				(fnToFetch: (a: A, b: B, c: C) => Promise<T>): 						(a: A, b: B, c: C) => Promise<T>;
export function cancelable<A, B, C, D, T>			(fnToFetch: (a: A, b: B, c: C, d: D) => Promise<T>): 				(a: A, b: B, c: C, d: D) => Promise<T>;
export function cancelable<A, B, C, D, E, T>		(fnToFetch: (a: A, b: B, c: C, d: D, e: E) => Promise<T>): 			(a: A, b: B, c: C, d: D, e: E) => Promise<T>;
export function cancelable<A, B, C, D, E, F, T>		(fnToFetch: (a: A, b: B, c: C, d: D, e: E, f: F) => Promise<T>): 	(a: A, b: B, c: C, d: D, e: E, f: F) => Promise<T>;
// Private signature
export function cancelable<T>(fnToFetch: (...args: any[]) => Promise<T>): any{ 
    return (...params: any) => {
		return new Promise<T>((resolve, reject) => {
			rejectionArray.push(reject);
	
			fnToFetch(...params).then(resolve).catch(reject);
		});
	}
}

