import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import getIndexHtml from './index.html.js';
import getIframeHtml from './iframe.html.js';
import express from 'express';
import baseConfig from './webpack.config.js';
import loadConfig from './configTest.js';
import path from 'path';
import fs from 'fs';



function getHeadHtml(configDirPath) {
  const headHtmlPath = path.resolve(configDirPath, 'head.html');
  let headHtml = '';
  if (fs.existsSync(headHtmlPath)) {
    headHtml = fs.readFileSync(headHtmlPath, 'utf8');
  }

  return headHtml;
}

const app = express();

// if (program.staticDir) {
//   const staticPath = path.resolve(program.staticDir);
//   if (fs.existsSync(staticPath)) {
//     logger.log(`=> Loading static files from: ${staticPath} .`);
//     app.use(express.static(staticPath, { index: false }));
//   } else {
//     logger.error(`Error: no such directory to load static files: ${staticPath}`);
//     process.exit(-1);
//   }
// }

// Build the webpack configuration using the `baseConfig`
// custom `.babelrc` file and `webpack.config.js` files
// const configDir = program.configDir || './.storybook';
let configDir = './cloneConfig'
const config = await loadConfig(baseConfig, configDir);
const compiler = webpack(config);
const devMiddlewareOptions = {
  publicPath: config.output.publicPath,
};
app.use(webpackDevMiddleware(compiler, devMiddlewareOptions));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.send(getIndexHtml());
});

const headHtml = getHeadHtml(configDir);
app.get('/data', function (req, res) {
  let html = getIframeHtml(headHtml)
  res.json({body:html});
});

app.listen(9000, function (error) {
  if (error) {
    console.log(error)
    throw error;
  } else {
    console.info(`\nReact Storybook started on 
    => http://localhost:${9000}/ \n`)
  }
});