import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
	Navigation,
	NavigationList,
	NavigationListItem,
	MainButton as Button,
	MainButtonIcon as Icon,
} from '../../styles';

import { Comeback } from '../../components';

import { MainLayout } from '../Layouts';

import { sendEvent } from '../../utils';

import SvgPower from '../../assets/power.svg';
import SvgHotkeys from '../../assets/keyboard.svg';

type FishingPageProps = {
	className?: string;
};

export const FishingPage: FC<FishingPageProps> = ({ className }: FishingPageProps) => (
	<MainLayout size={{ width: 80, height: 250 }}>
		<Navigation className={className}>
			<NavigationList>
				<NavigationListItem>
					<Button as={Link} to="/botEnabled" onClick={() => sendEvent('botFishingStarted')}>
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
					<Button as={Link} to="/">
						<Comeback />
					</Button>
				</NavigationListItem>
			</NavigationList>
		</Navigation>
	</MainLayout>
);
