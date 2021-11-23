import styled from 'styled-components';

export const Wrapper = styled.label`
	--width: 30px;
	--height: calc(var(--width) / 2);

	--padding: calc(var(--height) / 8);

	--color-enabled: var(--color-primary);
	--color-disabled: var(--color-button-main-hover);

	--transition: var(--transition-standard);

	--toggle-size: calc(var(--height) - var(--padding) * 2);
	--toggle-color: var(--color-font-hover);

	cursor: pointer;
`;

export const Slider = styled.span`
	box-sizing: border-box;
	padding: var(--padding);
	display: flex;
	width: var(--width);
	height: var(--height);
	background-color: var(--color-disabled);
	transition: background-color var(--transition);

	&::after {
		--size: var(--toggle-size);

		content: '';
		width: var(--size);
		height: var(--size);
		background-color: var(--toggle-color);
		border-radius: 50%;
		transition: transform var(--transition);
	}
`;

export const Checkbox = styled.input`
	display: none;

	&:checked + ${Slider} {
		background-color: var(--color-enabled);
	}

	&:checked + ${Slider}::after {
		transform: translateX(calc(var(--width) / 2));
	}
`;
