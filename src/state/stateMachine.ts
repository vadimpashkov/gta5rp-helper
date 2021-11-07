import { State, DefaultConfig } from './types';

export class Machine<T> {
	currentState: State<T>;
	config: DefaultConfig & T;

	constructor(initialState: State<T>, config: DefaultConfig & T) {
		this.currentState = initialState;
		this.config = config;
	}

	switchState = async () => {
		const nextState = await this.currentState.switcher(this.config);
		this.currentState = nextState;
		this.config.messanger(`Новое состояние: ${nextState.name}`);
	};

	iteration = async () => {
		if (this.currentState.iteration !== undefined) await this.currentState.iteration(this.config);
	};
}
