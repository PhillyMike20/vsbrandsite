const path = require("path"); // integrated node package
 
const postCSSPlugins = [        //  array of postcss options
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];
 
module.exports = {
  entry: "./app/assets/scripts/App.js", // starting file
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"), // where bundled.js goes
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000
  },
  mode: "development",
  watch: true, // tell webpack to rebundle on save
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",  // ?url - added from lesson 16 note
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {          // this is the bit that is needed 
                plugins: postCSSPlugins, // still uses same array as taught
              },                         // but latest version of postcss has
            },                           // new config methods
          },
        ],
      },
    ],
  },
};