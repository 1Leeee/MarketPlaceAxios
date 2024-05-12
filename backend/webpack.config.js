const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Establece el entorno de ejecución en Node
  target: 'node',

  // Define el modo de Webpack (development o production)
  mode: 'production',

  // Establece el punto de entrada de tu aplicación
  entry: './backend/server.js',  // Ajusta según la ubicación de tu archivo principal

  // Configura la salida de los archivos resultantes
  output: {
    filename: 'server.bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'backend/dist'), // Directorio de salida
    clean: true, // Limpia el directorio de salida antes de generar nuevo contenido
  },

  // Excluye los módulos de node (no incluir en el bundle)
  externals: [nodeExternals()],

  // Configura cómo los módulos son resueltos
  resolve: {
    extensions: ['.js'], // Añade las extensiones de archivo que Webpack procesará
  },

  // Configuración de los módulos que Webpack debe procesar
  module: {
    rules: [
      {
        test: /\.js$/, // Procesa los archivos .js
        exclude: /node_modules/, // Ignora los módulos de node
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar el código
          options: {
            presets: ['@babel/preset-env'], // Usa el preset env para transpilar a código compatible con versiones anteriores de Node.js
          },
        },
      },
    ],
  },
};
