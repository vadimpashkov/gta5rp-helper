import { FC } from 'react';

import { Wrapper } from './FishingSettings.elements';

import { useSettings } from '../../stores';

import { ParameterCheckbox } from '../ParameterCheckbox';
import { ParameterKey } from '../ParameterKey';

type FishingSettingsProps = {
	className?: string;
};

export const FishingSettings: FC<FishingSettingsProps> = ({ className }: FishingSettingsProps) => {
	const settings = useSettings();

	const doubleClickChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		settings.setSettings({
			...settings.data,
			doubleClick: event.target.checked,
		});
	};

	return (
		<Wrapper className={className}>
			<ParameterCheckbox
				description="Быстрая ловля (для мощных ПК)"
				onChange={doubleClickChange}
				checked={settings.data.doubleClick}
			/>
			{/* <ParameterKey description="Достать удочку" key={key} onClick={() => void} /> */}
		</Wrapper>
	);
};
