// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const modifyVars = require('./antd.custom.js');
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);
console.log(`🏗️ Building Ropo Front`);

module.exports = withTM(withAntdLess({
  images: {
    loader: 'akamai',
    path: '',
  },
  // optional
  modifyVars: modifyVars,
  // optional
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
}));