const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  // Check whether a config.js file exists inside the storybook
  // config directory and throw an error if it's not.
//   const storybookConfigPath = path.resolve(configDir, 'config.js');
//   if (!fs.existsSync(storybookConfigPath)) {
//     const err = new Error(`=> Create a storybook config file in "${configDir}/config.js".`);
//     throw err;
//   }
//   //config.entry.preview.push(storybookConfigPath);
//   config.entry.push(storybookConfigPath);


module.exports = {
    entry:[],
  //entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
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
    //new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })

  ],
  module: {
    rules: [
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

};