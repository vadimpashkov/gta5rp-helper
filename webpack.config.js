const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
	mode: 'none',
	target: 'node',
	entry: {
		app: path.join(__dirname, '/src/renderer/index.tsx'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: path.join(__dirname, '/node_modules/'),
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new GoogleFontsPlugin({
			fonts: [
				{
					family: 'Oswald',
					variants: ['400', '500'],
					subsets: ['latin'],
				},
			],
			formats: ['woff2', 'woff'],
			noLocalInCss: true,
			filename: 'css/fonts.css',
			path: `../assets/fonts`,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, 'src/assets/img'),
					to: 'assets',
				},
			],
		}),
	],
};
