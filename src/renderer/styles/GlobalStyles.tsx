import { createGlobalStyle } from 'styled-components';

import { fontFace } from './mixins';

import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2';
import MontserratExtraBold from '../assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

export const GlobalStyles = createGlobalStyle`
	${fontFace({ src: MontserratSemiBold, family: 'Montserrat', weight: 600 })}
	${fontFace({ src: MontserratExtraBold, family: 'Montserrat', weight: 800 })}

	:root {
		/* z-Index */

		--z-index-layout: 99;
		--z-index-info-panel: 98;

		/* Padding */

		--padding-main: 16px;
		--padding-secondary: var(--gap-main);

		/* Gap */

		--gap-main: 10px;

		/* Color */

		--color-primary: #46bfff;
		--color-secondary: #353535;
		--color-light: #fbfbfb ;
		--color-dark: #0d0d0d;

		/* --color-primary: #589cff;
		--color-secondary: #959ccb;
		--color-light: #f0f3ff;
		--color-dark: #495077; */

		/* Drag panel */

		--drag-panel-z-index: 100;
		--drag-panel-height: 10px;

		/* Button */

		--button-size: 80px;
		--button-color: var(--color-light);
		--button-color-hover: var(--color-dark);
		--button-color-select: var(--color-primary);

		/* Icon */

		--icon-size: calc(var(--button-size) / 2.85);
		--icon-color: var(--color-dark);
		--icon-color-select: var(--color-light);

		/* Font primary */

		--font-primary-color: var(--color-dark);
		--font-primary-family: 'Montserrat', sans-serif;
		--font-primary-size: 14px;
		--font-primary-weight: 600;

		/* Font secondary */

		--font-secondary-color: var(--color-secondary);
		--font-secondary-family: 'Montserrat', sans-serif;
		--font-secondary-size: 10px;
		--font-secondary-weight: 600;

		/* Font accent */

		--font-accent-color: var(--color-secondary);
		--font-accent-family: 'Montserrat', sans-serif;
		--font-accent-size: 14px;
		--font-accent-weight: 800;

		/* Time */

		--time-standard: 0.15s;
		--time-long: 0.5s;
		--time-very-long: 1s;

		/* Bezier */

		--bezier-rubber: cubic-bezier(1, 0.17, 0.16, 0.83);
		--bezier-hit: cubic-bezier(0.54, -0.31, 0.51, 0.93);
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
