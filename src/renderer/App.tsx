import { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { MainWrapper } from './components';
import { GlobalStyles } from './styles/GlobalStyles';

import { LoginPage, HomePage, FishingPage, FishingBotEnabled, SettingsPage } from './pages';
import { useAuth } from './stores';

export const App: FC = () => {
	const { auth } = useAuth();
	return (
		<HashRouter>
			<MainWrapper opacity={1.0}>
				<Routes>
					{auth ? (
						<>
							<Route path="/" element={<HomePage />} />
							<Route path="/fishing" element={<FishingPage />} />
							<Route path="/settings" element={<SettingsPage />} />
							<Route path="/fishingBotEnabled" element={<FishingBotEnabled />} />
						</>
					) : (
						<>
							<Route path="/" element={<LoginPage />} />
						</>
					)}
				</Routes>
			</MainWrapper>
			<GlobalStyles />
		</HashRouter>
	);
};
