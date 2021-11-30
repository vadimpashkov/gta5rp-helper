import { createGlobalStyle } from 'styled-components';

import { fontFace } from './mixins';

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.woff2';
import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2';
import MontserratExtraBold from '../assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

export const GlobalStyles = createGlobalStyle`
	${fontFace({ src: MontserratRegular, family: 'Montserrat', weight: 400 })}
	${fontFace({ src: MontserratSemiBold, family: 'Montserrat', weight: 600 })}
	${fontFace({ src: MontserratExtraBold, family: 'Montserrat', weight: 800 })}

	:root {
		/* z-Index */

		--z-index-drag-panel: 100;
		--z-index-layout: 99;
		--z-index-info-panel: 98;

		/* Padding */

		--padding-main: 16px;
		--padding-secondary: 10px;

		/* Gap */

		--gap-main: 10px;

		/* Size */

		--size-button: 80px;

		/* Height */
		--height-drag-panel: 10px;

		/* Border radius */

		--border-radius-main: 14px;

		/* Color */

		--color-capril: 200 85% 60%;								// #42b6f0
		--color-red-salsa: 0 85% 60%;								// #F04242
		--color-sea-green-crayola: 160 85% 60%;						// #42f0b6
		--color-frostbite: 325 85% 60%;								// #f042a7
		--color-mandarin: 20 85% 60%;								// #f07c42
		--color-green-lizard: 80 85% 60%;							// #b6f041
		--color-purple: 265 85% 60%;								// #8b42f0
		--color-blue-ryb: 235 85% 60%;								// #4251f0
		--color-cultured: 0 0% 95%;									// #f2f2f2
		--color-light-gray: 0 0% 80%;								// #cccccc
		--color-rish-black: 0 0% 5%;								// #0d0d0d
		--color-jet: 0 0% 20%;										// #333333
		/* --color-purple-navy: 200 25% 40%;						// #4d6e80 */
		/* --color-magnolia: 200 100% 98%;							// #f5fcff */

		/* Brand color */

		--color-brand-primary: var(--color-capril);
		--color-brand-secondary: var(--color-red-salsa);

		/* Themes color */

		@media (prefers-color-scheme: light) {
			--color-canvas: var(--color-cultured);
			--color-canvas-inverted: var(--color-rish-black);

			--color-text-primary: var(--color-rish-black);
			--color-text-primary-inverted: var(--color-cultured);
			--color-text-secondary: var(--color-jet);
			--color-text-secondary-inverted: var(--color-light-gray);
		}

		@media (prefers-color-scheme: dark) {
			--color-canvas: var(--color-rish-black);
			--color-canvas-inverted: var(--color-cultured);

			--color-text-primary: var(--color-cultured);
			--color-text-primary-inverted: var(--color-rish-black);
			--color-text-secondary: var(--color-light-gray);
			--color-text-secondary-inverted: var(--color-jet);
		}

		/* Color descriptive */
		--color-light: var(--color-cultured);
		--color-dark: var(--color-rish-black);

		/* Color fish */

		--color-sterlet: hsl(var(--color-sea-green-crayola));
		--color-salmon: hsl(var(--color-red-salsa));
		--color-sturgeon: hsl(var(--color-capril));
		--color-black-cupid: hsl(var(--color-blue-ryb));
		--color-ramp: hsl(var(--color-mandarin));
		--color-tuna: hsl(var(--color-purple));
		--color-malma: hsl(var(--color-frostbite));
		--color-puffer-fish: hsl(var(--color-green-lizard));

		/* Font family */

		--font-family-primary: 'Montserrat', sans-serif;

		/* Font size */

		--font-size-primary: 14px;
		--font-size-secondary: 10px;

		/* Font size */

		--font-weight-primary: 600;
		--font-weight-secondary: 800;
		--font-weight-tertiary: 400;

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
