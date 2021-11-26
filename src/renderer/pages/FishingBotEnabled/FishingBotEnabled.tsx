import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { sendEvent } from '../../utils';
import { useStatus } from '../../stores';

import { MainLayout } from '../Layouts';

import { Button, FishingDashboard } from '../../components';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingBotEnabledProps = {
	className?: string;
};

export const FishingBotEnabled: FC<FishingBotEnabledProps> = ({ className }: FishingBotEnabledProps) => {
	const [infoOpen, setInfoOpen] = useState(false);
	const [softClose, setSoftClose] = useState(false);
	const { status } = useStatus();
	const redirect = useNavigate();

	useEffect(() => {
		if (status.name === 'Выключен') {
			redirect('/fishing');
		}
	}, [status.name]);

	const handleClick = () => {
		setInfoOpen((old) => !old);
	};

	const handleBackClick = () => {
		setSoftClose((old) => {
			if (old) sendEvent('botFishingStopped');
			else sendEvent('botFishingSoftStopped');
			return !old;
		})
	}

	return (
		<>
			<MainLayout className={className}>
				<Button
					srcIcon={SvgPower}
					to={softClose ? "/fishing" : undefined}
					isSelect={true}
					onClick={handleBackClick}
				/>
				<Button srcIcon={SvgInfo} isSelect={infoOpen} onClick={handleClick} />
			</MainLayout>
			{infoOpen && <FishingDashboard softClose={softClose} />}
		</>
	);
};
