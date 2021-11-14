import React, { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages';

export const App: FC = () => (
	<HashRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	</HashRouter>
);
