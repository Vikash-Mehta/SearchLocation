var path = require('path');
var webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

console.log(path.resolve(__dirname, "dist"));

module.exports = {
  entry: {
    "lib-built": "./js/vendor",
    "main-built": "./js/main",
    "account-built": "./js/account",
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    // polyfill Promise for IE11
    new webpack.ProvidePlugin({
      Promise: "bluebird"
    }),
    new webpack.IgnorePlugin(/unicode\/category\/So/), // make slug smaller
    new CopyPlugin([
      {
        from: 'img',
        to: 'dist/img',
      },
    ]),
  ],
  
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:9000/dist/",
  },

  devServer: {
    noInfo: true,
    publicPath: "http://localhost:9000/dist/",
    quiet: false,
    stats: "minimal",
  },

  watch: true,

  resolve: {
    modules: [
      path.resolve("./node_modules"),
      path.resolve("js"),
      path.resolve("templates"),
      path.resolve("js/components"),
      path.resolve("img"),
    ],
    alias: {
      "eventEmitter/EventEmitter": "wolf98-eventemitter",
      "underscore": "lodash",
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },

  devServer: {
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'tpl-loader',
        }
      }
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "pdfjs-dist": "pdfjsDistWebPdfViewer",
    "pdfjs-dist/lib/web/pdf_link_service": "pdfjsDistWebPdfViewer.PDFJS"
  },
};
