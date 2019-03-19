var path = require("path");
 
module.exports = {
  entry: "./js/app.jsx",
  output: { filename: "out.js", path: path.resolve(__dirname, "js") },
  devtool: 'source-map',
  mode: "development", watch: true,
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-2", "react"]
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, 
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }]
    },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }]
  }
}