import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--height-drag-panel: 10px;

		--color-primary: #14cc9e;
		--color-light: #ffffff;
		--color-dark: #222b45;

		--color-font: var(--color-dark);
		--color-font-hover: var(--color-light);

		--color-button-main: var(--color-light);
		--color-button-main-hover: var(--color-dark);

		--color-drag-panel: var(--color-light);
		--color-drag-panel-line: var(--color-dark);

		--font-family: 'Segoe UI', sans-serif;

		--size-button-main: 80px;
		--size-button-main-icon: 28px;

		--border-radius-main: 14px;

		--transition-time-standard: 0.15s;

		--transition-bezier-rubber: cubic-bezier(1, 0.17, 0.16, 0.83);

		--transition-standard: var(--transition-time-standard) var(--transition-bezier-rubber);
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
	}
`;
