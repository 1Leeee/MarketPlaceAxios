const path = require('path');

module.exports = {
  target: 'node',  // Asegura que Webpack compile para uso en Node.js y no en un navegador
  entry: './backend/server.js',  // Ajusta al archivo principal de tu backend
  output: {
    filename: 'server.bundle.js',  // Puedes nombrar el archivo de salida como prefieras
    path: path.resolve(__dirname, 'dist'),  // Asegúrate de que el path sea el correcto
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Solo necesario si usas características de JS que Node no soporta
        },
      },
    ],
  },
  externals: {
    // Evita empaquetar todas las dependencias de node_modules
    express: 'commonjs express',
  }
};
