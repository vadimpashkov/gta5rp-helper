import { FC } from 'react';

import { DragPanel } from '../../../components';

type MainLayoutProps = {
	children: React.ReactNode;
	className?: string;
	dragPanel?: string;
};

export const MainLayout: FC<MainLayoutProps> = ({ children, dragPanel }: MainLayoutProps) => {
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
