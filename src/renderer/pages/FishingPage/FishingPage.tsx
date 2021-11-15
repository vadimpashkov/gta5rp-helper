import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Navigation, List, ListItem, Button, Icon } from './FishingPage.elements';

import { DragPanel } from '../../components';

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
	return (
		<Wrapper>
			<DragPanel />
			<Navigation className={className}>
				<List>
					<ListItem>
						<Button>
							<Icon>
								<use href={SvgPower + '#outline'} />
								<use href={SvgPower + '#fill'} />
							</Icon>
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
