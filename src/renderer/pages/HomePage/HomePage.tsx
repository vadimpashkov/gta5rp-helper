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

import { CloseButton } from '../../components';

import SvgFish from '../../assets/svg/fish.svg';
import SvgSettings from '../../assets/svg/settings.svg';

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
						<CloseButton />
					</NavigationListItem>
				</NavigationList>
			</Navigation>
		</MainLayout>
	);
};
