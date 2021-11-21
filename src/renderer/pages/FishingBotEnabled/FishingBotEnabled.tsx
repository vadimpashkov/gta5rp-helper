import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Navigation,
	NavigationList,
	NavigationListItem,
	MainButton as Button,
	MainButtonIcon as Icon,
} from '../../styles';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';

import { FishingDashboard } from '../../components';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingBotEnabledProps = {
	className?: string;
};

export const FishingBotEnabled: FC<FishingBotEnabledProps> = ({ className }: FishingBotEnabledProps) => {
	const [infoOpen, setInfoOpen] = useState(false);

	const handleClick = () => {
		setInfoOpen((old) => !old);
	};

	return (
		<>
			<MainLayout dragPanel="power">
				<Navigation className={className}>
					<NavigationList>
						<NavigationListItem>
							<Button
								as={Link}
								to="/fishing"
								onClick={() => sendEvent('botFishingStopped')}
								state="power"
							>
								<Icon state="power">
									<use href={SvgPower + '#outline'} />
									<use href={SvgPower + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
						<NavigationListItem>
							<Button state={infoOpen ? 'power' : ''} onClick={handleClick}>
								<Icon state={infoOpen ? 'power' : ''}>
									<use href={SvgInfo + '#outline'} />
									<use href={SvgInfo + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
					</NavigationList>
				</Navigation>
			</MainLayout>
			{infoOpen && <FishingDashboard />}
		</>
	);
};