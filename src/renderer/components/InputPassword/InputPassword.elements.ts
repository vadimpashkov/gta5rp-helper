import styled from 'styled-components';

type InputPasswordProps = {
	showPassword: boolean;
};

export const Button = styled.button`
	--size: 42px;

	z-index: var(--z-index);
	box-sizing: border-box;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	width: var(--size);
	height: var(--size);
	color: var(--color-select);
	border-radius: 50%;
	cursor: pointer;
	border: none;
	transition: background-color var(--transition);

	& use {
		transition: opacity var(--transition), fill var(--transition);
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}

	&:hover use {
		fill: var(--color-icon);
	}
`;

export const Input = styled.input`
	z-index: var(--z-index-input);
	padding: calc(var(--padding) / 2) var(--padding);
	outline: none;
	border: none;
	background-color: transparent;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;

	&::placeholder {
		color: inherit;
	}
`;

export const Svg = styled.svg`
	--size: 18px;

	z-index: var(--z-index-svg);
	width: var(--size);
	height: var(--size);
	fill: currentColor;
`;

export const Wrapper = styled.div<InputPasswordProps>`
	--z-index-button: 20;
	--z-index-overlay: 7;
	--z-index-svg: 9;
	--z-index-input: 9;

	--padding: var(--padding-main);

	--background-color: hsl(var(--color-canvas-inverted));
	--background-color-eye: hsl(var(--color-canvas));

	--color: hsl(var(--color-text-primary-inverted));
	--color-select: hsl(var(--color-text-primary));

	--font-family: var(--font-family-primary);
	--font-size: var(--font-size-primary);
	--font-weight: var(--font-weight-tertiary);

	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	position: relative;
	padding: var(--padding);
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: var(--background-color);
	color: ${({ showPassword }) => (showPassword ? 'var(--color-select)' : 'var(--color)')};
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--font-weight);
	transition: color var(---transition);

	${Button} use:first-child {
		opacity: ${({ showPassword }) => (showPassword ? 0 : 1)};
	}

	${Button} use:last-child {
		opacity: ${({ showPassword }) => (showPassword ? 1 : 0)};
	}

	${Button}:hover use:first-child {
		opacity: ${({ showPassword }) => (showPassword ? 1 : 0)};
	}

	${Button}:focus-visible use:first-child {
		opacity: ${({ showPassword }) => (showPassword ? 1 : 0)};
	}

	${Button}:hover use:last-child {
		opacity: ${({ showPassword }) => (showPassword ? 0 : 1)};
	}

	${Button}:focus-visible use:last-child {
		opacity: ${({ showPassword }) => (showPassword ? 0 : 1)};
	}

	${Button}::before {
		z-index: var(--z-index-overlay);
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 50%;
		background-color: var(--background-color-eye);
		transform: ${({ showPassword }) => (showPassword ? 'scale(15)' : 'scale(1)')};
		pointer-events: none;
		transition: transform var(--transition);
	}
`;
