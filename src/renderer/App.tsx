import { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import { HomePage, FishingPage, BotEnabled } from './pages';

export const App: FC = () => (
	<HashRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/fishing" element={<FishingPage />} />
			<Route path="/botEnabled" element={<BotEnabled />} />
		</Routes>
		<GlobalStyles />
	</HashRouter>
);
