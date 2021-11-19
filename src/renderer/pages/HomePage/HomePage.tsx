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

import SvgFish from '../../assets/fish.svg';
import SvgSettings from '../../assets/settings.svg';
import SvgClose from '../../assets/close.svg';

type HomePageProps = {
	className?: string;
};

export const HomePage: FC<HomePageProps> = ({ className }: HomePageProps) => {
	return (
		<MainLayout>
			<Navigation className={className}>
				<NavigationList>
					<NavigationListItem>
						<Button as={Link} to="/fishing">
							<Icon>
								<use href={SvgFish + '#outline'} />
								<use href={SvgFish + '#fill'} />
							</Icon>
						</Button>
					</NavigationListItem>
					<NavigationListItem>
						<Button as={Link} to="/settings">
							<Icon>
								<use href={SvgSettings + '#outline'} />
								<use href={SvgSettings + '#fill'} />
							</Icon>
						</Button>
					</NavigationListItem>
					<NavigationListItem>
						<Button onClick={() => window.close()}>
							<Icon>
								<use href={SvgClose + '#outline'} />
								<use href={SvgClose + '#fill'} />
							</Icon>
						</Button>
					</NavigationListItem>
				</NavigationList>
			</Navigation>
		</MainLayout>
	);
};
