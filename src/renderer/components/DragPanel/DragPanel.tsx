import { FC } from 'react';

import { Wrapper } from './DragPanel.elements';

type DragPanelProps = {
	className?: string;
	dragPanel?: string;
};

export const DragPanel: FC<DragPanelProps> = ({ className, dragPanel }: DragPanelProps) => {
	return <Wrapper className={className} dragPanel={dragPanel} />;
};
