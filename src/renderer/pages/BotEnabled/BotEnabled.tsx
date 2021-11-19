import { FC } from 'react';
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

import SvgPower from '../../assets/power.svg';
import SvgInfo from '../../assets/info.svg';

type BotEnabledProps = {
	className?: string;
};

export const BotEnabled: FC<BotEnabledProps> = ({ className }: BotEnabledProps) => {
	return (
		<MainLayout dragPanel="power">
			<Navigation className={className}>
				<NavigationList>
					<NavigationListItem>
						<Button as={Link} to="/fishing" onClick={() => sendEvent('botFishingStopped')} state="power">
							<Icon state="power">
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
				</NavigationList>
			</Navigation>
		</MainLayout>
	);
};
