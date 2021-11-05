import { Config, State } from './types';

export class Machine {
	currentState: State;
	config: Config;
	output: (message: string) => void;

	constructor(initialState: State, config: Config, output: (message: string) => void) {
		this.currentState = initialState;
		this.config = config;
		this.output = output;
	}

	switchState = async () => {
		const nextState = await this.currentState.switcher(this.config);
		this.currentState = nextState;
		this.output(`Новое состояние: ${nextState.name}`);
	};

	iteration = async () => {
		if (this.currentState.iteration !== undefined) await this.currentState.iteration(this.config);
	};
}
