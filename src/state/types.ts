export type StateIteration<T extends DefaultConfig> = (config: T) => Promise<void>;
export type StateSwitch<T extends DefaultConfig> = (config: T) => Promise<State<T>>;

export type State<T extends DefaultConfig> = {
	name: string;
	description: string;
	iteration?: StateIteration<T>;
	switcher: StateSwitch<T>;
};

export type Messanger = (message: string) => void;

export type DefaultConfig = {
	messanger: Messanger;
};
