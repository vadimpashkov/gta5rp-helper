import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MainButton, MainButtonIcon } from '../../styles';

import Svg from '../../assets/svg/undo.svg';

type ComebackButtonProps = {
	className?: string;
	to: string;
};

export const ComebackButton: FC<ComebackButtonProps> = ({ className, to }: ComebackButtonProps) => {
	return (
		<MainButton as={Link} to={to} className={className}>
			<MainButtonIcon>
				<use href={Svg + '#outline'} />
				<use href={Svg + '#fill'} />
			</MainButtonIcon>
		</MainButton>
	);
};
