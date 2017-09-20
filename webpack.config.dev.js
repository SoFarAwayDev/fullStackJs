var webpack = require('webpack');
var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: 'http://0.0.0.0:8000/',
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      'client',
      'node_modules',
    ],
  },

   module: {
    rules: [
      {
        test: /\.css$/,
        use: 
          ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]"
            }
          }
        })
      },
      {
        test: /\.js?$/,
        use:[
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test:  /\.(jpe?g|gif|png|svg)$/i,
        use:[
          {
            loader: "url-loader",
            options: {
              limit:10000
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {loader: "json-loader"}
        ]
      }

    ]
    
  },
  plugins: [
    new ExtractTextPlugin(path.join(__dirname,"styles.css"))
  ]
};
