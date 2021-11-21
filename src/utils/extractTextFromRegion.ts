import { Region, screen } from '@nut-tree/nut-js';
import { read } from 'jimp';
import path from 'path';
import { recognize } from 'tesseract.js';
import { readFile } from 'fs';

const filePath = path.join(process.cwd(), 'temp.png');

export const extractTextFromRegion = async (region: Region, lang: string = 'rus'): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		await screen.captureRegion('temp.png', region);

		const jimp = await read(filePath);
		jimp.greyscale()
			.contrast(0.2)
			.write(filePath, () => {
				readFile(filePath, async (err, data) => {
					if (err) {
						reject();
					}
					const result = await recognize(data, lang);

					resolve(result.data.text);
				});
			});
	});
