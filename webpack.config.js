const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      //babel loader
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015']
        }
      },
      //style loader
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    // refer http://stackoverflow.com/a/38733864/228885
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    }),
    // Injects bundles in your index.html instead of wiring all manually
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ]
};