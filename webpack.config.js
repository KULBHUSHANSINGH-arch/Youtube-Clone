const path = require('path');

module.exports = {
  // other webpack configurations
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // specify the output directory for images
            },
          },
        ],
      }, 
    ],
  },
};
