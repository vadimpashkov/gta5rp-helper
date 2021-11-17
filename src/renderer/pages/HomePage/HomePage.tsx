import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Navigation, List, ListItem, Button, Icon } from './HomePage.elements';

import { MainLayout } from '../Layouts';
import { DragPanel } from '../../components';

// @ts-ignore
import SvgFish from '../../../assets/svg/fish.svg';
// @ts-ignore
import SvgSettings from '../../../assets/svg/gearWheel.svg';
// @ts-ignore
import SvgClose from '../../../assets/svg/close.svg';

type HomePageProps = {
	className?: string;
};

export const HomePage: FC<HomePageProps> = ({ className }: HomePageProps) => {
	return (
		<MainLayout>
			<Navigation className={className}>
				<List>
					<ListItem>
						<Button as={Link} to="/fishing">
							<Icon>
								<use href={SvgFish + '#outline'} />
								<use href={SvgFish + '#fill'} />
							</Icon>
						</Button>
					</ListItem>
					<ListItem>
						<Button>
							<Icon>
								<use href={SvgSettings + '#outline'} />
								<use href={SvgSettings + '#fill'} />
							</Icon>
						</Button>
					</ListItem>
					<ListItem>
						<Button>
							<Icon>
								<use href={SvgClose + '#outline'} />
								<use href={SvgClose + '#fill'} />
							</Icon>
						</Button>
					</ListItem>
				</List>
			</Navigation>
		</MainLayout>
	);
};
