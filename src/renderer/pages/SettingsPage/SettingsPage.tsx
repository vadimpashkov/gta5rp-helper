import React from 'react';

import { MainLayout } from '../Layouts';

import { ComebackButton } from '../../components';

import { useSettings } from '../../stores';

export const SettingsPage = () => {
	const settings = useSettings();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		settings.setSettings({
			...settings.data,
			doubleClick: e.target.checked,
		});
	};

	return (
		<MainLayout>
			{/* <input checked={settings.data.doubleClick} onChange={handleChange} type="checkbox" /> */}
			<ComebackButton to="/" />
		</MainLayout>
	);
};
