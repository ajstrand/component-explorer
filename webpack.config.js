import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let __dirname = "./"
const config = {
  entry:{
    main:'./src/index.js',
    testComp:"",
    previewSetup:"./previewSetup.js"
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Storybook clone demo',
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })

  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          jsxFactory: 'h',
          target: 'es2015'
        }
      },
    ]
  }
}

export default config