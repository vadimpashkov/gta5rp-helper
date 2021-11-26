import { MainLayout } from '../Layouts';

import { Button, ComebackButton, FishingSettings } from '../../components';

import FishSvg from '../../assets/svg/fish.svg';

// import { useSettings } from '../../stores';

export const SettingsPage = () => {
	// const settings = useSettings();

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	settings.setSettings({
	// 		...settings.data,
	// 		doubleClick: event.target.checked,
	// 	});
	// };

	return (
		<>
			<MainLayout>
				{/* <input checked={settings.data.doubleClick} onChange={handleChange} type="checkbox" /> */}
				<Button srcIcon={FishSvg} />
				<ComebackButton to="/" />
			</MainLayout>
			<FishingSettings />
		</>
	);
};
