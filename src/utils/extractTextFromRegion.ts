import { Region, screen } from '@nut-tree/nut-js';
import { read } from 'jimp';
import path from 'path';
import { recognize } from 'tesseract.js';
import { readFile } from 'fs';
// @ts-ignore
import replaceColor from 'replace-color';

const filePath = path.join(process.cwd(), 'temp.png');

export const extractTextFromRegion = async (region: Region, lang: string = 'rus'): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		await screen.captureRegion('temp.png', region);

		const jimp = await read(filePath);
		jimp.greyscale()
			.contrast(0.1)
			.write(filePath, async () => {
				const rc = await replaceColor({
					image: filePath,
					colors: {
						type: 'hex',
						targetColor: '#7f7f7f',
						replaceColor: '#000000',
					},
				});

				rc.write(filePath, async (err: Error) => {
					if (err) return console.log(err);

					readFile(filePath, async (err, data) => {
						if (err) {
							reject();
						}
						const result = await recognize(data, lang);

						resolve(result.data.text);
					});
				});
			});
	});
