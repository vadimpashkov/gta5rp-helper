import { Config, State } from './types';

export class Machine {
	currentState: State;
	config: Config;

	constructor(initialState: State, config: Config) {
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
