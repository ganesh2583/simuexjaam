const Dotenv = require('dotenv-webpack');


module.exports = {
  // Use the src/index.js file as entry point to bundle it. 
  // If the src/index.js file imports other JavaScript files, bundle them as well.
  entry: './src/index.js',
  // The bundled source code files shall result in a bundle.js file in the /dist folder.
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // The /dist folder will be used to serve our application to the browser.
  devServer: {
    contentBase: './dist'
  },
  plugins: [
  //Support Dot Env to read env variables.
    new Dotenv()
  ],
  // Informing Webpack on which files to use the loader (e.g. .js and jsx files) 
  // and optionally which folders to exclude from the process (e.g. node_modules):
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
		// make use of the previously installed  loader
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js','.jsx']
  },
};