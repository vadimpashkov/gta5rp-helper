import { FC, useState } from 'react';

import { Wrapper, Navigation, List, ListItem, Button, Icon } from './FishingPage.elements';

import { DragPanel } from '../../components';

import { sendEvent } from '../../utils';

// @ts-ignore
import SvgPower from '../../../assets/svg/power.svg';
// @ts-ignore
import SvgHotkeys from '../../../assets/svg/gamepad.svg';
// @ts-ignore
import SvgComeback from '../../../assets/svg/comeback.svg';

type FishingPageProps = {
	className?: string;
};
export const FishingPage: FC<FishingPageProps> = ({ className }: FishingPageProps) => {
	const [started, setStarted] = useState(false);

	const handleClick = () => {
		setStarted((old) => {
			sendEvent(old ? 'botFishingStopped' : 'botFishingStarted');

			return !old;
		});
	};

	return (
		<Wrapper>
			<DragPanel />
			<Navigation className={className}>
				<List>
					<ListItem>
						<Button onClick={handleClick}>
							<Icon>
								<use href={SvgPower + '#outline'} />
								<use href={SvgPower + '#fill'} />
							</Icon>
							{started ? 'Yes' : 'No'}
						</Button>
					</ListItem>
					<ListItem>
						<Button>
							<Icon>
								<use href={SvgHotkeys + '#outline'} />
								<use href={SvgHotkeys + '#fill'} />
							</Icon>
						</Button>
					</ListItem>
					<ListItem>
						<Button>
							<Icon>
								<use href={SvgComeback + '#outline'} />
								<use href={SvgComeback + '#fill'} />
							</Icon>
						</Button>
					</ListItem>
				</List>
			</Navigation>
		</Wrapper>
	);
};
