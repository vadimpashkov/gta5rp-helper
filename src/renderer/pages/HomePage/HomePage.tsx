import { FC } from 'react';

import { MainLayout } from '../Layouts';

import { Button } from '../../components';

import { CloseButton } from '../../components';

import SvgFish from '../../assets/svg/fish.svg';
import SvgSettings from '../../assets/svg/settings.svg';

type HomePageProps = {
	className?: string;
};

export const HomePage: FC<HomePageProps> = ({ className }: HomePageProps) => {
	return (
		<MainLayout className={className}>
			<Button srcIcon={SvgFish} to="/fishing" />
			<Button srcIcon={SvgSettings} to="/settings" />
			<CloseButton />
		</MainLayout>
	);
};
