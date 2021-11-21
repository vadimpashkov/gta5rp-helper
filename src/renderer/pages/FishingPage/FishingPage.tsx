import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
	Navigation,
	NavigationList,
	NavigationListItem,
	MainButton as Button,
	MainButtonIcon as Icon,
} from '../../styles';

import { ComebackButton } from '../../components';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';

import SvgPower from '../../assets/svg/power.svg';
import SvgHotkeys from '../../assets/svg/keyboard.svg';

type FishingPageProps = {
	className?: string;
};
export const FishingPage: FC<FishingPageProps> = ({ className }: FishingPageProps) => {
	return (
		<MainLayout>
			<Navigation className={className}>
				<NavigationList>
					<NavigationListItem>
						<Button as={Link} to="/fishingBotEnabled" onClick={() => sendEvent('botFishingStarted')}>
							<Icon>
								<use href={SvgPower + '#outline'} />
								<use href={SvgPower + '#fill'} />
							</Icon>
						</Button>
					</NavigationListItem>
					<NavigationListItem>
						<Button>
							<Icon>
								<use href={SvgHotkeys + '#outline'} />
								<use href={SvgHotkeys + '#fill'} />
							</Icon>
						</Button>
					</NavigationListItem>
					<NavigationListItem>
						<ComebackButton to="/" />
					</NavigationListItem>
				</NavigationList>
			</Navigation>
		</MainLayout>
	);
};
