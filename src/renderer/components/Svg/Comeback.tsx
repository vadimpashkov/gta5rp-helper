import { MainButtonIcon as Icon } from '../../styles';

import SvgComeback from '../../assets/svg/undo.svg';

export const Comeback = () => (
	<Icon>
		<use href={SvgComeback + '#outline'} />
		<use href={SvgComeback + '#fill'} />
	</Icon>
);
