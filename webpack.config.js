const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin()

const browserConfig = {
    entry: './client/index.js',
    mode: 'development',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      plugins: [
        new webpack.NormalModuleReplacementPlugin(
          /sync-routes.js/,
          './async-routes.js'
        ),
        new webpack.DefinePlugin({
          __isBrowser__: JSON.stringify("true")
        }),
        new AssetsPlugin({filename: 'assets.json'})

      ],
    devServer: {
      contentBase: './public',
      port: 7755,
      overlay: true
    }
  }

  const serverConfig = {
    entry: './server/index.js',
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
        path: __dirname + '/serverDist',
        publicPath: '/',
        filename: 'backend.js'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          __isBrowser__: JSON.stringify("false")
        })
      ]
  }


module.exports = [browserConfig, serverConfig];