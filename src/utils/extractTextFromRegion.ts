import { Region } from '@nut-tree/nut-js';
import screenshotDesktop from 'screenshot-desktop';
import { recognize, ImageLike } from 'tesseract.js';
import { Image } from 'image-js';

export const extractTextFromRegion = async (nutRegion: Region, lang: string, thresholdValue: number): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		const region = { x: nutRegion.left, y: nutRegion.top, width: nutRegion.width, height: nutRegion.height };
		const screenshot = await screenshotDesktop();
		const image = await Image.load(screenshot);
		const threshold = image.crop(region).grey().mask({ threshold: thresholdValue });

		const {
			data: { text },
		} = await recognize(threshold.toBuffer() as unknown as ImageLike, lang);

		resolve(text);
	});
