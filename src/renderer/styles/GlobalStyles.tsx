import { createGlobalStyle } from 'styled-components';

import { fontFace } from './mixins';

import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2';
import MontserratExtraBold from '../assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

export const GlobalStyles = createGlobalStyle`
	${fontFace({ src: MontserratSemiBold, family: 'Montserrat', weight: 600 })}
	${fontFace({ src: MontserratExtraBold, family: 'Montserrat', weight: 800 })}

	:root {
		--z-index-drag-panel: 100;
		--z-index-layout: 99;
		--z-index-info-panel: 98;

		--height-drag-panel: 10px;

		--color-primary: #14cc9e;
		--color-light: #ffffff;
		--color-dark: #222b45;

		--color-font: var(--color-dark);
		--color-font-hover: var(--color-light);

		--color-button-main: var(--color-light);
		--color-button-main-hover: var(--color-dark);
		--color-button-main-select: var(--color-primary);

		--font-primary-family: 'Montserrat', sans-serif;
		--font-primary-size: 14px;
		--font-primary-weight: 600;
		--font-secondary-family: 'Montserrat', sans-serif;
		--font-secondary-size: 10px;
		--font-secondary-weight: 600;
		--font-accent-family: 'Montserrat', sans-serif;
		--font-accent-size: 14px;
		--font-accent-weight: 800;

		--gap-main: 10px;

		--padding-main: 16px;
		--padding-secondary: var(--gap-main);

		--width-main: 80px;

		--size-button-main: var(--width-main);
		--size-button-main-icon: 28px;

		--transition-duration-standard: 0.15s;
		--transition-duration-very-long: 1s;

		--transition-delay-very-long: 1s;

		--transition-bezier-rubber: cubic-bezier(1, 0.17, 0.16, 0.83);

		--animation-duration-standard: 0.5s;

		--animation-bezier-rubber: cubic-bezier(1, 0.17, 0.16, 0.83);
		--animation-bezier-hit: cubic-bezier(0.54, -0.31, 0.51, 0.93);
	}

	html {
		text-rendering: optimizeSpeed;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	body {
		margin: 0;
		background-color: transparent;
		overflow: hidden;
	}
`;
