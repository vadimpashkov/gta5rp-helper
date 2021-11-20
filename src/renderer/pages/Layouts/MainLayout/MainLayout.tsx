import { FC } from 'react';

import { sendEvent } from '../../../utils';

import { DragPanel } from '../../../components';

type MainLayoutProps = {
	children: React.ReactNode;
	className?: string;
	dragPanel?: string;
	size: {
		width: number;
		height: number;
	};
};

export const MainLayout: FC<MainLayoutProps> = ({ children, dragPanel, size }: MainLayoutProps) => {
	sendEvent('appSize', size);

	history.pushState(null, '', location.href);

	window.onpopstate = (event) => {
		history.go(1);
	};

	return (
		<>
			<DragPanel dragPanel={dragPanel} />
			{children}
		</>
	);
};
