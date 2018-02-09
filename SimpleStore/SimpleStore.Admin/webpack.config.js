const path = require('path');

module.exports = {
    entry: './ClientApp/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'wwwroot', 'dist')
    },
    
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react'],
                plugins: [["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]]
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
  };