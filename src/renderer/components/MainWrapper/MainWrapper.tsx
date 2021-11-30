import { FC, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './MainWrapper.elements';

import { sendEvent } from '../../utils';

import { DragPanel } from '../DragPanel';

type MainWrapperProps = {
	children: React.ReactNode;
	className?: string;
	opacity: number;
};

function updateSize(ref: React.RefObject<HTMLDivElement>) {
	if (ref.current) {
		sendEvent('appSize', { width: ref.current.clientWidth, height: ref.current.clientHeight });
	}
}

export const MainWrapper: FC<MainWrapperProps> = ({ children, className, opacity }: MainWrapperProps) => {
	const [forceRerender, setForceRerender] = useState(false);
	const location = useLocation();
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => setForceRerender((old) => !old), [location.pathname]);

	useEffect(() => updateSize(targetRef), [JSON.stringify(children), forceRerender]);

	return (
		<Container
			ref={targetRef}
			className={className}
			opacity={opacity}
			onClick={() => setForceRerender((old) => !old)}
		>
			<DragPanel />
			{children}
		</Container>
	);
};
