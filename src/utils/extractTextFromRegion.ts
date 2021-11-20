import { Region, screen } from '@nut-tree/nut-js';
import path from 'path';
import { recognize } from 'tesseract.js';
import { readFile } from 'fs';

export const extractTextFromRegion = async (region: Region, lang: string = 'rus'): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		await screen.captureRegion('temp.png', region);

		readFile(path.join(process.cwd(), 'temp.png'), async (err, data) => {
			if (err) {
				console.log(err);
				reject();
			}
			const result = await recognize(data, lang);

			resolve(result.data.text);
		});
	});
