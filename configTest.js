import fs from 'fs';
import path from 'path';
import stories from './cloneConfig/storyConfig.js';


// `baseConfig` is a webpack configuration bundled with storybook.
// React Storybook will look in the `configDir` directory
// (inside working directory) if a config path is not provided.
export default async function (baseConfig, configDir) {
  const config = baseConfig;

  // if user has a .babelrc file in current directory
  // use that to extend webpack configurations
//   if (fs.existsSync('./.babelrc')) {
//     const content = fs.readFileSync('./.babelrc', 'utf-8');
//     try {
//       const babelrc = cjson.parse(content);
//       config.module.loaders[0].query = babelrc;
//     } catch (e) {
//       logger.error(`=> Error parsing .babelrc file: ${e.message}`);
//       throw e;
//     }
//   }


  // Check whether a config.js file exists inside the storybook
  // config directory and throw an error if it's not.
  const storybookConfigPath = path.resolve(configDir, 'storyConfig.js');
  if (!fs.existsSync(storybookConfigPath)) {
    const err = new Error(`=> Create a storybook config file in "${configDir}/config.js".`);
    throw err;
  }
  // let stories = await import(storybookConfigPath);
  // console.log(stories[0])
 
  const data = fs.readdirSync(stories[0], "utf-8")
  let test = `./stories/${data[0]}`
  // async function loadMyModule() {
  //   const myModule = await import(test);
  //   console.log(myModule.default)
  // }
  // await loadMyModule();
  config.entry.testComp = test
  //config.entry.previewSetup = 

  // Check whether user has a custom webpack config file and
  // return the (extended) base configuration if it's not available.
//   const customConfigPath = path.resolve(configDir, 'webpack.config.js');
//   if (!fs.existsSync(customConfigPath)) {
//     return config;
//   }

//   const customConfig = require(customConfigPath);
//   logger.info('=> Loading custom webpack config.');


  return {
    //...customConfig,
    // We'll always load our configurations after the custom config.
    // So, we'll always load the stuff we need.
    ...config,
    // We need to use our and custom plugins.
    plugins: [
      ...config.plugins,
      //...customConfig.plugins || [],
    ],
    module: {
      ...config.module,
      // We need to use our and custom loaders.
      //...customConfig.module || {},
      rules: [
        ...config.module.rules,
        //...customConfig.module.loaders || [],
      ],
    },
  };
}