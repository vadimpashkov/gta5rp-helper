import { Link } from 'react-router-dom';

import { Navigation, NavigationList, NavigationListItem, MainButton as Button } from '../../styles';

import { MainLayout } from '../Layouts';

import { Comeback } from '../../components';
import { useSettings } from '../../stores';
import React from 'react';

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
			<div style={{ background: 'white' }}>
				doble click
				<input checked={settings.data.doubleClick} onChange={handleChange} type="checkbox" />
			</div>
			<Navigation>
				<NavigationList>
					<NavigationListItem>
						<Button as={Link} to="/">
							<Comeback />
						</Button>
					</NavigationListItem>
				</NavigationList>
			</Navigation>
		</MainLayout>
	);
};
