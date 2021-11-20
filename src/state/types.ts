export type StateIteration<TConfig extends DefaultConfig> = RejectablePromise<TConfig, void>;
export type StateSwitch<TConfig extends DefaultConfig> = RejectablePromise<TConfig, State<TConfig>>;

export type State<T extends DefaultConfig> = {
	name: string;
	description: string;
	iteration?: StateIteration<T>;
	switcher: StateSwitch<T>;
};

export type Messanger = (message: string) => void;

export type DefaultConfig = {
	messanger: Messanger;
	screenWidth: number;
	screenHeight: number;
};

export type RejectablePromise<TData, TOut> = {
	launch: (data: TData) => Promise<TOut>;
	cancel: () => void;
};
