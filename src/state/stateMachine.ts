import { State, DefaultConfig } from './types';

export class Machine<T extends DefaultConfig> {
	isWorking = false;
	iterationInterval = 18;

	private iterationTimeout: NodeJS.Timeout | null = null;
	private currentState: State<T>;
	private config: DefaultConfig & T;

	constructor(initialState: State<T>, config: DefaultConfig & T) {
		this.currentState = initialState;
		this.config = config;
	}

	switchState = async () => {
		try {
			if (!this.isWorking) return;
			const nextState = await this.currentState.switcher.launch(this.config);
			if (!this.isWorking) return;

			this.currentState = nextState;
			this.config.emiter('newState', { name: nextState.name, description: nextState.description });

			this.switchState();
		} catch {
			this.config.emiter('newState', { name: 'Выключен', description: '' });
		}
	};

	iteration = async () => {
		if (this.isWorking && this.currentState.iteration !== undefined)
			await this.currentState.iteration.launch(this.config);
	};

	stop = () => {
		this.currentState.iteration?.cancel();
		if (this.iterationTimeout !== null) {
			clearTimeout(this.iterationTimeout);
		}
		this.currentState.switcher.cancel();
		this.isWorking = false;
	};

	start = () => {
		this.isWorking = true;
		this.createTimeout();
		this.switchState();
	};

	private createTimeout = () => {
		this.iteration();

		if (this.isWorking) {
			this.iterationTimeout = setTimeout(this.createTimeout, this.iterationInterval);
		}
	};
}
