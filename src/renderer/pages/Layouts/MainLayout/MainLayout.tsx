import { FC } from 'react';

import { Wrapper } from './MainLayout.elements';

import { DragPanel } from '../../../components';

type MainLayoutProps = {
	children: React.ReactNode;
	className?: string;
	dragPanel?: 'select' | 'power';
};

export const MainLayout: FC<MainLayoutProps> = ({ children, dragPanel }: MainLayoutProps) => {
	history.pushState(null, '', location.href);

	window.onpopstate = (event) => {
		history.go(1);
	};

	return (
		<Wrapper>
			<DragPanel dragPanel={dragPanel} />
			{children}
		</Wrapper>
	);
};
