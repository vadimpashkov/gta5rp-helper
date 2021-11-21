import { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { MainWrapper } from './components';
import { GlobalStyles } from './styles/GlobalStyles';

import { HomePage, FishingPage, FishingBotEnabled, SettingsPage } from './pages';

export const App: FC = () => (
	<HashRouter>
		<MainWrapper opacity={0.5}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/fishing" element={<FishingPage />} />
				<Route path="/settings" element={<SettingsPage />} />
				<Route path="/fishingBotEnabled" element={<FishingBotEnabled />} />
			</Routes>
		</MainWrapper>
		<GlobalStyles />
	</HashRouter>
);
