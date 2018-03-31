const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
  const plugins = [
    // new ExtractTextPlugin("css/app.css")
  ]
  
  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['public'], {root: __dirname})
    )
  }

  return {

    entry: {
      home: path.resolve(__dirname, 'cliente/src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
      publicPath: path.resolve(__dirname, 'public')+"/",
      chunkFilename: 'app.js',
    },
    // devServer: {
    //   port: 9000,
    // },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}