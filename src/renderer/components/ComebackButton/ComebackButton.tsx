import { FC } from 'react';

import { Button } from '../Button';

import Svg from '../../assets/svg/undo.svg';

type ComebackButtonProps = {
	className?: string;
	to: string;
};

export const ComebackButton: FC<ComebackButtonProps> = ({ className, to }: ComebackButtonProps) => {
	return <Button className={className} to={to} srcIcon={Svg} />;
};
