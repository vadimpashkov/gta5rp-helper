import { Region, screen } from '@nut-tree/nut-js';
import { read } from 'jimp';
import path from 'path';
import { recognize } from 'tesseract.js';
import { readFile } from 'fs';
// @ts-ignore
import replaceColor from 'replace-color';

const filePath = path.join(process.cwd(), 'temp.png');

export const extractTextFromRegion = async (
	region: Region,
	lang: string = 'eng',
	isReplaceColor = false,
): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		await screen.captureRegion('temp.png', region);

		const jimp = await read(filePath);
		jimp.greyscale()
			.contrast(0.3)
			.write(filePath, async () => {
				if (isReplaceColor) {
					const rc = await replaceColor({
						image: filePath,
						colors: {
							type: 'hex',
							targetColor: '#b9b9b9',
							replaceColor: '#393939',
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
				} else {
					readFile(filePath, async (err, data) => {
						if (err) {
							reject();
						}
						const result = await recognize(data, lang);

						resolve(result.data.text);
					});
				}
			});
	});
