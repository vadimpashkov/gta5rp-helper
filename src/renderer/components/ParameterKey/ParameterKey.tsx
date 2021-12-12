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

function getKeyName(value: number) {
	return Key[value];
}

export const ParameterKey: FC<ParameterKeyProps> = ({
	className,
	description,
	settingsProperty,
}: ParameterKeyProps) => {
	const settings = useSettings();
	const [pressedKey, setPressedKey] = useState<{ key: string; code: number }>();
	const [askedKey, setAskedKey] = useState(false);

	const currentKeyCode = (settings.data as { [parameter: string]: boolean | number | number[][][] })[
		settingsProperty
	];
	const currentKey = replaceKeyAliases(
		Object.keys(Key).filter((value) => (Key[value as any] as unknown as number) === currentKeyCode)[0],
	);

	const handleClick = () => {
		setAskedKey(true);
		document.addEventListener('keydown', keyPressed);
	};

	function keyPressed(event: KeyboardEvent) {
		const keyCode = event.code;
		const keyValue = Key[keyCode as any] as unknown as number;

		setPressedKey({
			key: replaceKeyAliases(keyCode),
			code: keyValue,
		});

		document.removeEventListener('keydown', keyPressed);
		setAskedKey(false);
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
			<Description>{askedKey ? 'Нажмите клавишу' : description}</Description>
			<KeyElement>{pressedKey?.key || currentKey}</KeyElement>
		</Wrapper>
	);
};
