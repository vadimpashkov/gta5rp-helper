import { FC } from 'react';

import { Wrapper } from './Settings.elements';

import { useSettings } from '../../stores';

import { ParameterCheckbox } from '../ParameterCheckbox';
import { ParameterKey } from '../ParameterKey';

type FishingSettingsProps = {
	className?: string;
};

export const FishingSettings: FC<FishingSettingsProps> = ({ className }: FishingSettingsProps) => {
	const settings = useSettings();

	const lookingForBackpackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		settings.setSettings({
			...settings.data,
			lookingForBackpack: event.target.checked,
		});
	};

	const lookingForBoatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		settings.setSettings({
			...settings.data,
			lookingForBoat: event.target.checked,
		});
	};

	return (
		<Wrapper className={className}>
			<ParameterCheckbox
				description="Имеется ли рюкзак"
				onChange={lookingForBackpackChange}
				checked={settings.data.lookingForBackpack}
			/>
			<ParameterCheckbox
				description="Имеется ли лодка"
				onChange={lookingForBoatChange}
				checked={settings.data.lookingForBoat}
			/>
			<ParameterKey description="Достать удочку" settingsProperty="fishingRodKey" />
		</Wrapper>
	);
};
