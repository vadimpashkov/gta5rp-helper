import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

const base: Configuration = {
	mode: isDev ? 'development' : 'production',
	node: {
		__dirname: false,
		__filename: false,
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
	},
	output: {
		publicPath: './',
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: 'assets/[name][ext]',
	},
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: [/node_modules/, /state/],
				use: 'ts-loader',
			},
			{
				test: /\.(png|svg|woff2)$/,
				type: 'asset/resource',
			},
		],
	},
	optimization: { minimize: !isDev },
	devtool: isDev ? 'inline-source-map' : undefined,
};

const main: Configuration = {
	...base,
	target: 'electron-main',
	entry: {
		main: './src/main.ts',
	},
};

const preload: Configuration = {
	...base,
	target: 'electron-preload',
	entry: {
		preload: './src/preload.ts',
	},
};

const renderer: Configuration = {
	...base,
	target: 'web',
	entry: {
		index: './src/renderer/index.tsx',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/renderer/index.html',
			filename: 'index.html',
			minify: !isDev,
		}),
	],
};

export default [main, preload, renderer];
