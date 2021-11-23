import { FC, useState } from 'react';

import { Button, ComebackButton, FishingTotalInformation } from '../../components';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';
import { useStatus } from '../../stores';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingPageProps = {
	className?: string;
};

export const FishingPage: FC<FishingPageProps> = ({ className }: FishingPageProps) => {
	const [infoOpen, setInfoOpen] = useState(false);
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
			<MainLayout>
				<Button srcIcon={SvgPower} to="/fishingBotEnabled" onClick={handleStartClick} />
				<Button srcIcon={SvgInfo} isSelect={infoOpen} onClick={handleClick} />
				<ComebackButton to="/" />
			</MainLayout>
			{infoOpen && <FishingTotalInformation />}
		</>
	);
};
