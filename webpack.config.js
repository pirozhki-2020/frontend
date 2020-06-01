const path = require('path');

const HtmlWepbackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'public');

module.exports = {
  context: srcPath,
  devtool: 'eval-source-map',
  entry: './index.jsx',
  output: {
    filename: 'static/js/bundle.js',
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.s?css$/,
        exclude: /\.modules\.(s?css|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [srcPath],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/static/',
              outputPath: 'static/',
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff2|woff|ttf?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/static/',
              outputPath: 'static/',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(srcPath, 'components'),
      pages: path.join(srcPath, 'pages'),
      config: path.join(srcPath, 'config'),
    },
  },
  plugins: [
    new HtmlWepbackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.css',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    inline: true,
    hot: true,
    https: false,
  },
};
