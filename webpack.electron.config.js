const path = require('path');

module.exports = {
	mode: 'development',
	resolve: {
		extensions: ['.ts'],
		plugins: [new TsconfigPathsPlugin()],
	},
	entry: {
		index: path.join(__dirname, '/src/main/index.ts'),
	},
	target: 'electron-main',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: path.join(__dirname, '/node_modules/'),
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
