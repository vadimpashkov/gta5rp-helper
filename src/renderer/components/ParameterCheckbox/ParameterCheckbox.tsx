import { FC } from 'react';

import { ParameterPanel } from '../ParameterPanel';
import { ToggleSwitch } from '../ToggleSwitch';

type ParameterCheckboxProps = {
	className?: string;
	description: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
};

export const ParameterCheckbox: FC<ParameterCheckboxProps> = ({
	className,
	description,
	onChange,
	checked,
}: ParameterCheckboxProps) => {
	return (
		<ParameterPanel className={className} description={description}>
			<ToggleSwitch onChange={onChange} checked={checked} />
		</ParameterPanel>
	);
};
