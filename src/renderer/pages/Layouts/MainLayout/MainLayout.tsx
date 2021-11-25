import { FC } from 'react';

import { Wrapper, Navigation } from './MainLayout.elements';

type MainLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
	// history.pushState(null, '', location.href);

	// window.onpopstate = (event) => {
	// 	history.go(1);
	// };

	return (
		<Wrapper>
			<Navigation>{children}</Navigation>
		</Wrapper>
	);
};
