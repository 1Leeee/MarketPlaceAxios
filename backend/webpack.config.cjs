import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  mode: 'production',
  entry: './server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
