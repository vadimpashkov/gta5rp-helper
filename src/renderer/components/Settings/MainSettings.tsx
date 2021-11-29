import { FC } from 'react';

import { Wrapper } from './Settings.elements';

import { ParameterCheckbox } from '../ParameterCheckbox';
import { ParameterKey } from '../ParameterKey';

type MainSettingsProps = {
	className?: string;
};

export const MainSettings: FC<MainSettingsProps> = ({ className }: MainSettingsProps) => {
	return (
		<Wrapper className={className}>
			<ParameterKey description="Открыть инвентарь" settingsProperty="openInventoryKey" />
			<ParameterKey description="Открыть багажник" settingsProperty="openTrunkKey" />
		</Wrapper>
	);
};
