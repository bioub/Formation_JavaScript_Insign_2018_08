const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, {mode}) => {
  return {
    devtool: false,
    entry: {
      'main-index': './src/js/index.js',
      'main-date': './src/js/index-date.js'
    },
    output: {
      filename: (mode === 'production') ? '[name].[chunkHash].js' : '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main-index'],
      }),
      new HtmlWebpackPlugin({
        template: './src/date.html',
        filename: 'date.html',
        chunks: ['main-date'],
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'all',
            filename:  (mode === 'production') ? 'vendor.[chunkHash].js' : 'vendor.js',
          }
        }
      }
    }
  };
};
