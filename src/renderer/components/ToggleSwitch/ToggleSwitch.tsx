import { FC } from 'react';

import { Wrapper, Checkbox, Slider } from './ToggleSwitch.elements';

type ToggleSwitchProps = {
	className?: string;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ className }: ToggleSwitchProps) => {
	return (
		<Wrapper className={className}>
			<Checkbox type="checkbox" />
			<Slider />
		</Wrapper>
	);
};
