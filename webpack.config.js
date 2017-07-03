const path = require('path');

module.exports = {
  entry: {
    main: [
      './src/entry.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'target'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              entryFileIsJs: true,
            }
          },
        ],
      },
    ]
  },
};

