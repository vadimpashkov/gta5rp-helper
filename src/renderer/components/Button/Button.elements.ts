import styled from 'styled-components';

import { Svg } from '../../styles';

type ButtonProps = {
	isSelect?: boolean;
};

export const Icon = styled(Svg)`
	place-self: center;
	transition: opacity var(--transition);
`;

export const Wrapper = styled.button<ButtonProps>`
	--size: var(--size-button);
	--size-icon: calc(var(--size) / 2.85);

	--background-color: hsl(var(--color-canvas));
	--background-color-select: hsl(var(--color-brand-primary));

	--color: hsl(var(--color-text-primary));
	--color-select: hsl(var(--color-canvas));

	--transition: var(--time-standard) var(--bezier-rubber);

	position: relative;
	display: grid;
	width: var(--size);
	height: var(--size);
	border: none;
	background-color: ${({ isSelect }) => (isSelect ? 'var(--background-color-select)' : 'var(--background-color)')};
	color: ${({ isSelect }) => (isSelect ? 'var(--color-select)' : 'var(--color)')};
	cursor: pointer;
	transition: background-color var(--transition), color var(--transition);

	& use {
		transition: opacity var(--transition);
	}

	& use:first-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 0 : 1)};
	}

	& use:last-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 1 : 0)};
	}

	&:hover use:first-of-type,
	&:focus-visible use:first-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 1 : 0)};
	}

	&:hover use:last-of-type,
	&:focus-visible use:last-of-type {
		opacity: ${({ isSelect }) => (isSelect ? 0 : 1)};
	}

	&:focus,
	&:focus-visible {
		outline: none;
	}
`;
