
require('dotenv').config();




// if (typeof require !== "undefined") {
//   require.extensions[".css"] = (file) => {};
//  }



// const transpileModules = ['@zeit/next-css']

// const includes = transpileModules.map(
//   module => new RegExp(`${module}(?!.*node_modules)`)
// )

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       config.externals = config.externals.map(external => {
//         if (typeof external !== 'function') return external
//         return (ctx, req, cb) =>
//           Boolean(includes.find(include => include.test(req)))
//             ? cb()
//             : external(ctx, req, cb)
//       })
//     }

//     return config
//   }
// }

const nextConfiguration = {
  webpack: config => {
    config.node = {
            fs: 'empty',
          },
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    );
    return config;
  },
};
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})


// const withPlugins = require('next-compose-plugins');
// const webpack = require('webpack');

// const sassConfig = {
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[name]___[hash:base64:5]'
//   }
// };

// const cssConfig = {
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]"
//   }
// }


// function cssModulesOnSass(nextConfig = {}) {
//   return Object.assign({}, nextConfig, {
//   cssModules: true
//   })
//  }
//  module.exports = withSass(cssModulesOnSass(withCss()))


// module.exports = withPlugins([
//   [withCss, cssConfig],
//   [withSass, sassConfig],
// ], nextConfiguration);

