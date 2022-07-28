const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'build')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		filename: 'bundle.js',
		path: buildPath
	},
	mode: isProd ? 'development' : 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(srcPath, 'index.html')
		})
	],
	module: {
		rules: [
			{
                test: /\.([tj])sx?$/,
                use: 'babel-loader'
            },
		]
	}
}
