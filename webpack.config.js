const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const VENDOR = [
	"lodash"
]

const config = {
	// mode: "development",
	// devtool: "eval-source-map",
	entry: {
		bundle: "./src/scripts/index.js"
		// vendors: VENDOR
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
		publicPath: "build/"
	},
	// optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_module/
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "/build"
						}
					},
					"css-loader",
					"less-loader"
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {limit: 40000}
					},
					"image-webpack-loader"
				]
			}
		]
	}
}
module.exports = config;