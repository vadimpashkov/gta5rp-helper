import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';
import { useStatus } from '../../stores';

import { Button, FishingDashboard } from '../../components';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingBotEnabledProps = {
	className?: string;
};

export const FishingBotEnabled: FC<FishingBotEnabledProps> = ({ className }: FishingBotEnabledProps) => {
	const [infoOpen, setInfoOpen] = useState(false);
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

	return (
		<>
			<MainLayout>
				<Button
					srcIcon={SvgPower}
					to="/fishing"
					isSelect={true}
					onClick={() => sendEvent('botFishingStopped')}
				/>
				<Button srcIcon={SvgInfo} isSelect={infoOpen} onClick={handleClick} />
			</MainLayout>
			{infoOpen && <FishingDashboard />}
		</>
	);
};
