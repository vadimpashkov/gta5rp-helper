import { FC } from 'react';

import { Wrapper, Icon } from './NavigationPanel.elements';

import arrowsSvg from '../../assets/svg/arrows.svg';

type NavigationPanelProps = {
	className?: string;
};

export const NavigationPanel: FC<NavigationPanelProps> = ({ className }: NavigationPanelProps) => {
	return (
		<Wrapper className={className}>
			<Icon>
				<use href={arrowsSvg + '#left'} />
			</Icon>
			<Icon>
				<use href={arrowsSvg + '#right'} />
			</Icon>
		</Wrapper>
	);
};
