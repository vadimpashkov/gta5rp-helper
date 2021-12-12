import { FC, useState, useEffect } from 'react';

import { Wrapper } from './Settings.elements';

import { useSettings, useMacros } from '../../stores';

import { ParameterCheckbox } from '../ParameterCheckbox';
import { ParameterKey } from '../ParameterKey';

type FishingSettingsProps = {
	className?: string;
};

const timeToWrite = 5000;

export const FishingSettings: FC<FishingSettingsProps> = ({ className }: FishingSettingsProps) => {
	const settings = useSettings();
	const macros = useMacros();
	const [writeing, setWriteing] = useState(false);

	useEffect(() => {
		if (macros.data.length > 0) {
			setWriteing(false);

			settings.setSettings({ ...settings.data, macroses: [...settings.data.macroses, macros.data] });

			macros.reset();
		}
	}, [macros.data.length]);

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

	const startMacros = () => {
		setTimeout(() => {
			setWriteing(true);
			macros.writeMacros(timeToWrite);
		}, 1000);
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
			<button onClick={startMacros} disabled={writeing}>
				xyu
			</button>
		</Wrapper>
	);
};
