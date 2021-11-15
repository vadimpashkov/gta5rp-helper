import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Navigation = styled.nav``;

export const List = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: column;
	list-style-type: none;
`;

export const ListItem = styled.li`
	overflow: hidden;

	&:last-of-type {
		border-bottom-left-radius: var(--border-radius-main);
		border-bottom-right-radius: var(--border-radius-main);
	}
`;

export const Icon = styled.svg`
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

	& use:last-of-type {
		opacity: 0;
	}
`;

export const Button = styled.button`
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
	color: var(--color-font);
	cursor: pointer;

	&:hover ${Icon} use:first-of-type,
	&:focus-visible ${Icon} use:first-of-type {
		opacity: 0;
	}

	&:hover ${Icon} use:last-of-type,
	&:focus-visible ${Icon} use:last-of-type {
		opacity: 1;
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
