var CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  entry: './src/js/main.jsx',

  // TO UPLOAD TO HEROKU.
  /*
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  */

  // TO TEST.
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react','es2015','stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/vendors/phaser.min.js' }
    ]),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ])
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  }
};
