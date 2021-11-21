import { FC } from 'react';

import { Wrapper } from './DragPanel.elements';

type DragPanelProps = {
	className?: string;
	dragPanel?: 'select' | 'power';
};

export const DragPanel: FC<DragPanelProps> = ({ className, dragPanel }: DragPanelProps) => {
	return <Wrapper className={className} dragPanel={dragPanel} />;
};
