const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
      },
    ],
  },
  optimization: {
    // minimize: false,
    splitChunks: {
      chunks: 'all', // 对同步 & 异步代码都分割
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public/index.html'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: 'dist',
  },
};
