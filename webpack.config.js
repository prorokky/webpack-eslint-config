const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin')

const srcPath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'build')
const isProd = process.env.NODE_ENV === 'production'

const getSettingsForStyles = (withModules = false) => {
    return [MiniCssExtractPlugin.loader, !withModules ? 'css-loader' : {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: !isProd ? '[path][name]__[local]' : '[hash:base64]'
            }
        }
    }, {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['autoprefixer']
            }
        }
    },
        'less-loader'
    ]
}


module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	target: !isProd ? 'web' : 'browserslist',
	output: {
		filename: 'bundle.js',
		path: buildPath
	},
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(srcPath, 'index.html'),
			minify: {
				collapseWhitespace: isProd,
			}
		}),
		!isProd && new ReactRefreshWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]-[contenthash].css'
		}),
		new TsCheckerPlugin(),
	].filter(Boolean),
	module: {
		rules: [
			{
                test: /\.module\.(le|c)?ss$/,
                use: getSettingsForStyles(true)
            },
            {
                test: /\.(le|c)?ss$/,
                exclude: /\.module\.(le|c)?ss$/,
                use: getSettingsForStyles()
            },
			{
                test: /\.([tj])sx?$/,
                use: 'babel-loader',
            },
			{
				test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
				type: 'assets',
				parser: {
					dataUrlCondition: {
					  maxSize: 10 * 1024, // 3kb
					},
				},
			},
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
        alias: {
            '@components': path.resolve(srcPath, 'components'),
        },
	},
	devServer: {
		host: 'localhost',
		port: 8500,
        hot: true,
        historyApiFallback: true,
	}
}
