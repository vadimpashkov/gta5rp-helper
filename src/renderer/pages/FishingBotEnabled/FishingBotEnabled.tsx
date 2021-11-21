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

import { FishingCard } from '../../components';

import SvgPower from '../../assets/svg/power.svg';
import SvgInfo from '../../assets/svg/info.svg';

type FishingBotEnabledProps = {
	className?: string;
};

export const FishingBotEnabled: FC<FishingBotEnabledProps> = ({ className }: FishingBotEnabledProps) => {
	const [information, setInformation] = useState(false);

	const handleClick = () => {
		setInformation((oldResult) => {
			// if (oldResult) {
			// 	sendEvent('appSize', { width: 430, height: 250 });
			// } else {
			// 	sendEvent('appSize', { width: 80, height: 250 });
			// }
			return !oldResult;
		});
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
							<Button onClick={handleClick}>
								<Icon>
									<use href={SvgInfo + '#outline'} />
									<use href={SvgInfo + '#fill'} />
								</Icon>
							</Button>
						</NavigationListItem>
					</NavigationList>
				</Navigation>
			</MainLayout>
			{information && <FishingCard percent={30} name="Стерлядь" count={0} />}
		</>
	);
};
