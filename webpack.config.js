const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
	output: {
		filename: 'bundle.js',
		path: buildPath
	},
	mode: isProd ? 'development' : 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(srcPath, 'index.html'),
			minify: {
				collapseWhitespace: isProd,
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name]-[contenthash].css'
		}),
	],
	module: {
		rules: [
			{
                test: /\.([tj])sx?$/,
                use: 'babel-loader',
            },
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
				test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
					  maxSize: 3 * 1024, // 3kb
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
		port: 8500,
        hot: true,
        historyApiFallback: true,
	}
}
