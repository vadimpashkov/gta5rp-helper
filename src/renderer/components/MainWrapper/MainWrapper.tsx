import { FC, useEffect, useRef, useState } from 'react';

import { MainWrapperContainer } from './MainWrapper.elements';

import { sendEvent } from '../../utils';

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
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => updateSize(targetRef), [children, forceRerender]);

	return (
		<MainWrapperContainer
			ref={targetRef}
			className={className}
			opacity={opacity}
			onClick={() => setForceRerender((old) => !old)}
		>
			{children}
		</MainWrapperContainer>
	);
};
