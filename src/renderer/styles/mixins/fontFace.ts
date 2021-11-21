type fontFaceTypes = {
	src: string;
	family: string;
	display?: string;
	style?: string;
	weight?: number;
};

export const fontFace = (option: fontFaceTypes) => {
	const { src, family, display = 'swap', style = 'normal', weight = 400 } = option;

	return `
		@font-face {
			font-family: ${family};
			font-display: ${display};
			font-style: ${style};
			font-weight: ${weight};
			src: url(${src}) format('woff2');
		}
  `;
};
