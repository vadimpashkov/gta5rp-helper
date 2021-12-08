import styled, { createGlobalStyle } from 'styled-components';

import { fontFace } from './mixins';

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.woff2';
import MontserratSemiBold from '../assets/fonts/Montserrat/Montserrat-SemiBold.woff2';
import MontserratExtraBold from '../assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

export const GlobalStyles = createGlobalStyle`
	${fontFace({ src: MontserratRegular, family: 'Montserrat', weight: 400 })}
	${fontFace({ src: MontserratSemiBold, family: 'Montserrat', weight: 600 })}
	${fontFace({ src: MontserratExtraBold, family: 'Montserrat', weight: 800 })}

	:root {
		/* Padding */

		--padding-main: 20px;

		/* Gap */

		--gap-primary: 10px;
		--gap-secondary: 6px;
		--gap-traffic-light: 8px;

		/* Size */

		--size-button: 80px;

		/* Border radius */

		--border-radius-app: 12px;
		--border-radius-main: 10px;

		/* Color name */

		--color-orange-red-crayola: 3 93% 66%;						// #f96057
		--color-maize-crayola: 45 92% 65%;							// #f8ce52
		--color-mantis: 123 54% 59%;								// #5fcF65
		--color-cultured: 0 0% 96%;									// #f5f5f5
		--color-white: 0 0% 100%;									// #ffffff
		--color-charleston-green: 200 4% 14%;						// #232526
		--color-black: 0 0% 0%;										// #000000
		--color-sonic-silver: 0 0% 47%;								// #797979

		/* Traffic light color */

		--color-traffic-light-close: hsl(var(--color-orange-red-crayola));
		--color-traffic-light-minimize: hsl(var(--color-maize-crayola));
		--color-traffic-light-maximize: hsl(var(--color-mantis));

		/* Brand color */

		/* --color-brand-primary: var(--color-capril); */
		/* --color-brand-secondary: var(--color-red-salsa); */
		--color-brand-item: var(--color-sonic-silver);

		/* Themes color */

		@media (prefers-color-scheme: light) {
			--color-canvas-primary: var(--color-cultured);
			--color-canvas-primary-inverted: var(--color-charleston-green);
			--color-canvas-secondary: var(--color-white);

			--color-text-primary: var(--color-cultured);
			--color-text-primary-inverted: var(--color-charleston-green);
			/* --color-text-secondary: var(--color-jet); */
			/* --color-text-secondary-inverted: var(--color-light-gray); */
		}

		@media (prefers-color-scheme: dark) {
			--color-canvas-primary: var(--color-charleston-green);
			--color-canvas-primary-inverted: var(--color-cultured);
			--color-canvas-secondary: var(--color-black);

			--color-text-primary: var(--color-charleston-green);
			--color-text-primary-inverted: var(--color-cultured);
			/* --color-text-secondary: var(--color-jet); */
			/* --color-text-secondary-inverted: var(--color-light-gray); */
		}

		/* Background color */

		--color-background-one: hsl(var(--color-canvas-primary) / 0.8);
		--color-background-two: hsl(var(--color-canvas-primary) / 0.5);
		/* --color-background-three: hsl(var(--color-canvas-primary) / 0.8); */
		--color-background-four: hsl(var(--color-canvas-primary-inverted) / 0.05);
		--color-background-five: hsl(var(--color-canvas-primary-inverted) / 0.1);

		/* Filter */

		--filter-blur-primary: blur(81.55px);

		/* Box shadow */

		--shadow-inset-primary: inset 0px 1px 3px hsl(var(--color-canvas-secondary) / 0.5);

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
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		text-rendering: optimizeSpeed;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	body {
		background-color: transparent;
		overflow: hidden;
	}
`;

export const Svg = styled.svg`
	--size: 24px;

	display: block;
	width: var(--size);
	height: var(--size);
	object-fit: cover;
	object-position: center;
	fill: var(--fill, currentColor);
	pointer-events: none;
`;

export const ContainerFlexCenter = styled.div`
	--gap: var(--gap-secondary);

	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--gap);
	min-width: 54px;
`;
