const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const base = {
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

const renderer = {
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

module.exports = [renderer];
