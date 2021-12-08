import { FC, useState } from 'react';

import { MainLayout } from '../Layouts';

import { Button, MainSettings, FishingSettings } from '../../components';

import FishSvg from '../../assets/svg/settingsFishing.svg';
import SettingsSvg from '../../assets/svg/sliders.svg';

type SettingsPageProps = {
	className?: string;
};

export const SettingsPage: FC<SettingsPageProps> = ({ className }: SettingsPageProps) => {
	const [mainSettings, setMainSettings] = useState(true);
	const [fishingSettings, setFishingSettings] = useState(false);

	const mainSettingsClick = () => {
		setMainSettings(true);
		setFishingSettings(false);
	};

	const fishingSettingsClick = () => {
		setFishingSettings(true);
		setMainSettings(false);
	};

	return (
		<>
			<MainLayout className={className}>
				<Button srcIcon={SettingsSvg} isSelect={mainSettings} onClick={mainSettingsClick} />
				<Button srcIcon={FishSvg} isSelect={fishingSettings} onClick={fishingSettingsClick} />
			</MainLayout>
			{mainSettings && <MainSettings />}
			{fishingSettings && <FishingSettings />}
		</>
	);
};
