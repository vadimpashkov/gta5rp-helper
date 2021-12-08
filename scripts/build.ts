import { build } from 'electron-builder';

build({
	config: {
		productName: 'GTA 5 Helper',
		copyright: '© 2021 vadimpashkov, Yaniddze and other contributors.',
		files: ['build/**/*'],
		directories: {
			output: 'prod',
		},
		win: {
			target: 'portable',
			icon: 'assets/favicon512.png',
			publisherName: 'vadimpashkov',
			fileAssociations: [
				{
					ext: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'ico', 'svg', 'webp'],
					description: 'Image files',
				},
			],
		},
	},
})
	.then(() => console.log('Successfully completed.'))
	.catch((err) => console.log(err));
