import { FC, useState } from 'react';

import { sendEvent } from '../../utils';
import { useStatus, useSettings } from '../../stores';

import { MainLayout } from '../Layouts';

import { Button, ComebackButton, FishingTotalDashboard } from '../../components';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingPageProps = {
	className?: string;
};

export const FishingPage: FC<FishingPageProps> = ({ className }: FishingPageProps) => {
	const [infoOpen, setInfoOpen] = useState(false);
	const settings = useSettings();
	const { reset } = useStatus();

	const handleClick = () => {
		setInfoOpen((old) => !old);
	};

	const handleStartClick = () => {
		reset();
		sendEvent('botFishingStarted');
	};

	return (
		<>
			<MainLayout className={className}>
				<Button
					disabled={settings.data.macroses.length === 0}
					srcIcon={SvgPower}
					to="/fishingBotEnabled"
					onClick={handleStartClick}
				/>
				<Button srcIcon={SvgInfo} isSelect={infoOpen} onClick={handleClick} />
				<ComebackButton to="/" />
			</MainLayout>
			{infoOpen && <FishingTotalDashboard />}
		</>
	);
};
