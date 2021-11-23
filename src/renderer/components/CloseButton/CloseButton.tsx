import { FC } from 'react';

import { Button } from '../../components';

import Svg from '../../assets/svg/close.svg';

type CloseButtonProps = {
	className?: string;
};

export const CloseButton: FC<CloseButtonProps> = ({ className }: CloseButtonProps) => {
	return <Button className={className} srcIcon={Svg} onClick={() => window.close()} />;
};
