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

import { Stats } from '../../components';

import SvgPower from '../../assets/svg/power.svg';

type FishingBotEnabledProps = {
	className?: string;
};

export const FishingBotEnabled: FC<FishingBotEnabledProps> = ({ className }: FishingBotEnabledProps) => {
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
							<Stats />
						</NavigationListItem>
					</NavigationList>
				</Navigation>
			</MainLayout>
		</>
	);
};
