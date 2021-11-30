import styled from 'styled-components';

export const Slider = styled.span`
	box-sizing: border-box;
	padding: var(--padding);
	display: flex;
	width: var(--width);
	height: var(--height);
	border-radius: var(--border-radius);
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

export const Wrapper = styled.label`
	--width: 32px;
	--height: calc(var(--width) / 2);

	--padding: calc(var(--height) / 8);

	--border-radius: var(--border-radius-main);

	--color-enabled: hsl(var(--color-brand-primary));
	--color-disabled: hsl(var(--color-canvas-inverted));

	--transition: var(--time-standard) var(--bezier-rubber);

	--toggle-size: calc(var(--height) - var(--padding) * 2);
	--toggle-color: hsl(var(--color-canvas));

	cursor: pointer;
`;
