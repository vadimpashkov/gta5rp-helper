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
import SvgInfo from '../../assets/svg/info.svg';
import SvgSettings from '../../assets/svg/settings.svg';

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
	);
};
