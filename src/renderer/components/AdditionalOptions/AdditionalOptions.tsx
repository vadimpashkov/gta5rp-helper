import { FC } from 'react';

import { Wrapper, Icon } from './AdditionalOptions.elements';

import ThemesSvg from '../../assets/svg/themes.svg';
import SettingsSvg from '../../assets/svg/settings.svg';

type AdditionalOptionsProps = {
	className?: string;
};

export const AdditionalOptions: FC<AdditionalOptionsProps> = ({ className }: AdditionalOptionsProps) => {
	return (
		<Wrapper className={className}>
			<Icon>
				<use href={ThemesSvg + '#toggle'} />
			</Icon>
			<Icon>
				<use href={SettingsSvg + '#settings'} />
			</Icon>
		</Wrapper>
	);
};
