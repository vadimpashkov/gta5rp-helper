import { FC } from 'react';

import { Wrapper, Minimize, Close } from './TrafficLight.elements';

type TrafficLightProps = {
	className?: string;
};

export const TrafficLight: FC<TrafficLightProps> = ({ className }: TrafficLightProps) => {
	return (
		<Wrapper className={className}>
			<Minimize title="Свернуть" aria-label="Свернуть" />
			<Close title="Закрыть" aria-label="Закрыть" onClick={() => window.close()} />
		</Wrapper>
	);
};
