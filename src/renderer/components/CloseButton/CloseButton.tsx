import { FC } from 'react';

import { MainButton, MainButtonIcon } from '../../styles';

import Svg from '../../assets/svg/close.svg';

type CloseButtonProps = {
	className?: string;
};

export const CloseButton: FC<CloseButtonProps> = ({ className }: CloseButtonProps) => {
	return (
		<MainButton className={className} onClick={() => window.close()}>
			<MainButtonIcon>
				<use href={Svg + '#outline'} />
				<use href={Svg + '#fill'} />
			</MainButtonIcon>
		</MainButton>
	);
};
