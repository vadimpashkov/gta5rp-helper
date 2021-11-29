import { FC, useEffect, useState } from 'react';
import { useSettings } from '../../stores';
import { Key } from '../../../core';

import { Wrapper, Description, Key as KeyElement } from './ParameterKey.elements';

type ParameterKeyProps = {
	className?: string;
	description: string;
	settingsProperty: string;
};

function replaceKeyAliases(key: string) {
	return key.replace('Digit', '').replace('Key', '');
}

export const ParameterKey: FC<ParameterKeyProps> = ({
	className,
	description,
	settingsProperty,
}: ParameterKeyProps) => {
	const settings = useSettings();
	const [pressedKey, setPressedKey] = useState<{ key: string; code: number }>();

	const currentKeyCode = (settings.data as { [parameter: string]: boolean | number })[settingsProperty];
	const currentKey = replaceKeyAliases(
		Object.keys(Key).filter((value) => (Key as { [key: string]: number })[value] === currentKeyCode)[0],
	);

	const handleClick = () => {
		document.addEventListener('keydown', keyPressed);
	};

	function keyPressed(event: KeyboardEvent) {
		const keyCode = event.code;
		const keyValue = (Key as { [key: string]: number })[keyCode];

		setPressedKey({
			key: replaceKeyAliases(keyCode),
			code: keyValue,
		});

		document.removeEventListener('keydown', keyPressed);
	}

	useEffect(() => {
		if (pressedKey !== undefined) {
			settings.setSettings({
				...settings.data,
				[settingsProperty]: pressedKey!.code,
			});
		}
	}, [pressedKey]);

	useEffect(() => {
		document.removeEventListener('keydown', keyPressed);
	}, []);

	return (
		<Wrapper className={className} onClick={handleClick}>
			<Description>{description}</Description>
			<KeyElement>{pressedKey?.key || currentKey}</KeyElement>
		</Wrapper>
	);
};
