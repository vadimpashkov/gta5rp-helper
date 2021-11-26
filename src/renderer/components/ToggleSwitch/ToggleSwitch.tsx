import { FC } from 'react';

import { Wrapper, Checkbox, Slider } from './ToggleSwitch.elements';

type ToggleSwitchProps = {
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ className, onChange, checked }: ToggleSwitchProps) => {
	return (
		<Wrapper className={className}>
			<Checkbox type="checkbox" onChange={onChange} checked={checked} />
			<Slider />
		</Wrapper>
	);
};
