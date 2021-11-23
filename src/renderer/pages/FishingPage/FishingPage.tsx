import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Navigation,
	NavigationList,
	NavigationListItem,
	MainButton as Button,
	MainButtonIcon as Icon,
} from '../../styles';

import { ComebackButton, FishingTotalInformation } from '../../components';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';
import { useStatus } from '../../stores';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';
import SvgSettings from '../../assets/svg/settings.svg';

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
				<Navigation className={className}>
					<NavigationList>
						<NavigationListItem>
							<Button as={Link} to="/fishingBotEnabled" onClick={handleStartClick}>
								<Icon>
									<use href={SvgPower + '#outline'} />
									<use href={SvgPower + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
						<NavigationListItem>
							<Button state={infoOpen ? 'power' : ''} onClick={handleClick}>
								<Icon state={infoOpen}>
									<use href={SvgInfo + '#outline'} />
									<use href={SvgInfo + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
						<NavigationListItem>
							<Button>
								<Icon>
									<use href={SvgSettings + '#outline'} />
									<use href={SvgSettings + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
						<NavigationListItem>
							<ComebackButton to="/" />
						</NavigationListItem>
					</NavigationList>
				</Navigation>
			</MainLayout>
			{infoOpen && <FishingTotalInformation />}
		</>
	);
};
