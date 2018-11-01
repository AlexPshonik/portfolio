const webpack = require('webpack');
const path    = require('path');
const util    = require('gulp-util');
const config  = require('./gulp/config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function createConfig(env) {
  let isProduction,
    webpackConfig;

  if (env === undefined) {
    env = process.env.NODE_ENV;
  }

  isProduction = env === 'production';

  webpackConfig = {
    mode: env,
    context: path.join(__dirname, config.src.js),
    entry: {
      app: './app.js',
    },
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, config.dest.js),
      filename: '[name].min.js',
      publicPath: 'js/',
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            formatter: require('eslint-formatter-pretty')
          }
        }
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'eslint-loader',
        options: {
          fix: true,
          cache: true,
          ignorePattern: __dirname + '/src/js/libs/'
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
      }],
    },
  };

  if (isProduction) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            unsafe_comps: true,
            properties: true,
            keep_fargs: false,
            pure_getters: true,
            collapse_vars: true,
            unsafe: true,
            warnings: false,
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          }
        }
      })
    );
  }

  return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
