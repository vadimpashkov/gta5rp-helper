import { FC } from 'react';

import { DragPanel } from '../../../components';

type MainLayoutProps = {
	children: React.ReactNode;
	className?: string;
	dragPanel?: string;
};

export const MainLayout: FC<MainLayoutProps> = ({ children, dragPanel }: MainLayoutProps) => (
	<>
		<DragPanel dragPanel={dragPanel} />
		{children}
	</>
);
