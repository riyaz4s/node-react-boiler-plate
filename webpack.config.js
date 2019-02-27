const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./app/config');

const PUBLIC_PATH = 'public' + config.appRoute;


module.exports = [{
  entry: {
    bundle: ['./client/javascripts/index.js'],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'lodash', 'humps']
  },
  output: {
    filename: '[name].[hash:10].js',
    chunkFilename: 'js/[name]-[chunkhash].app.js',
    publicPath: config.appRoute + '/',
    path: path.resolve(process.cwd(), PUBLIC_PATH)
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      client: path.resolve(__dirname, 'client'),
      config: path.resolve(__dirname, 'config'),
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [ path.resolve(__dirname, 'client', 'javascripts')],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'client')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.woff2$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.otf$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: 'style.[hash:10].css'
    }),
    new StatsWriterPlugin({
      fields: ['assets'],
      filename: 'assets.js',
      transform(stats) {
        const manifest = {};
        stats.assets
          .map(asset => asset.name)
          .sort()
          .forEach(file => {
            file = file.replace('images/', '');
            manifest[file.replace(/\.[a-f0-9]{10}\./, '.')] = file;
          });
        return 'window.assets = ' + JSON.stringify(manifest, null, 2) + ';\n';
      }
    })
  ]
}];
