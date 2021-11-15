import React, { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import { HomePage, FishingPage } from './pages';

export const App: FC = () => (
	<HashRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/fishing" element={<FishingPage />} />
		</Routes>
		<GlobalStyles />
	</HashRouter>
);
