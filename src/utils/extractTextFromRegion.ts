import { Region, screen } from '@nut-tree/nut-js';
import { FileType } from '@nut-tree/nut-js/dist/lib/file-type.enum';
import path from 'path';
import { recognize } from 'tesseract.js';
import { readFile } from 'fs';
import { Image } from 'image-js';

export const extractTextFromRegion = async (
	region: Region,
	lang: string,
	captureName: string = 'temp',
	thresholdValue: number,
): Promise<string> =>
	new Promise<string>(async (resolve, reject) => {
		const fileName = `${captureName}-${Date.now()}.png`;
		const filePath = path.join(process.cwd(), 'captures/');
		const file = path.join(filePath, fileName);

		await screen.captureRegion(fileName, region, FileType.PNG, filePath);

		let image = await Image.load(file);
		let threshold = image.grey().mask({ threshold: thresholdValue });

		await threshold.save(file);

		readFile(file, async (err, data) => {
			if (err) {
				reject();
			}
			const result = await recognize(data, lang);

			resolve(result.data.text);
		});
	});
