import { FC } from 'react';

import { Wrapper } from './Settings.elements';

import { ParameterCheckbox } from '../ParameterCheckbox';
import { ParameterKey } from '../ParameterKey';

type MainSettingsProps = {
	className?: string;
};

export const MainSettings: FC<MainSettingsProps> = ({ className }: MainSettingsProps) => {
	return <Wrapper className={className}></Wrapper>;
};
