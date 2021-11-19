import styled from 'styled-components';

type MainButtonProps = {
	state?: string | boolean;
};

export const MainButtonIcon = styled.svg<MainButtonProps>`
	--size: var(--size-button-main-icon);

	display: block;
	width: var(--size);
	height: var(--size);
	object-fit: cover;
	object-position: center;
	fill: currentColor;
	pointer-events: none;
	position: absolute;
	transition: opacity var(--transition-standard);

	& use {
		transition: opacity var(--transition-standard);
	}

	& use:first-of-type {
		${({ state }) => (state ? 'opacity: 0;' : 'opacity: 1;')}
	}

	& use:last-of-type {
		${({ state }) => (state ? 'opacity: 1;' : 'opacity: 0;')}
	}
`;

export const MainButton = styled.button<MainButtonProps>`
	${({ state }) =>
		state === 'select'
			? '--color-button-main: var(--color-dark);'
			: state === 'power' && '--color-button-main: var(--color-primary);'};
	--size: var(--size-button-main);

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	width: var(--size);
	height: var(--size);
	border: none;
	background-color: var(--color-button-main);
	font-family: var(--font-family);
	font-weight: 700;
	font-size: 26px;
	color: ${({ state }) => (state ? 'var(--color-light)' : 'var(--color-font)')};
	cursor: pointer;
	transition: background-color var(--transition-standard), color var(--transition-standard);

	&:hover ${MainButtonIcon} use:first-of-type,
	&:focus-visible ${MainButtonIcon} use:first-of-type {
		${({ state }) => (state ? 'opacity: 1;' : 'opacity: 0;')}
	}

	&:hover ${MainButtonIcon} use:last-of-type,
	&:focus-visible ${MainButtonIcon} use:last-of-type {
		${({ state }) => (state ? 'opacity: 0;' : 'opacity: 1;')}
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
