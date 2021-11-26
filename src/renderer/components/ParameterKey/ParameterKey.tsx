import { FC } from 'react';

import { Wrapper, Description, Key } from './ParameterKey.elements';

type ParameterKeyProps = {
	className?: string;
	description: string;
	key: string;
	onClick: () => void;
};

export const ParameterKey: FC<ParameterKeyProps> = ({ className, description, key }: ParameterKeyProps) => {
	return (
		<Wrapper className={className}>
			<Description>{description}</Description>
			<Key>{key}</Key>
		</Wrapper>
	);
};
