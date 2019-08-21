module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'dom-decorators.min.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
