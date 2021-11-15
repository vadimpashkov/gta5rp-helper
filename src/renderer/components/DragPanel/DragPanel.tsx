import { FC } from 'react';

import { Wrapper } from './DragPanel.elements';

type DragPanelProps = {
	className?: string;
};

export const DragPanel: FC<DragPanelProps> = ({ className }: DragPanelProps) => {
	return <Wrapper className={className} />;
};
