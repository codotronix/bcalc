const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
// console.log(process.env.NODE_ENV)
// debugger
module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: process.env.NODE_ENV === 'development' ? '/' : "https://codotronix.github.io/bcalc/",
        // publicPath: "http://localhost:3001/",
      },
      entry: './src/index.js',
      plugins: [
        new ModuleFederationPlugin({
          name: "bcalc",
          filename: "remoteEntry.js",
          //   remotes: {
          //     test: "test@https://codotronix.github.io/test/remoteEntry.js",
          //   },
          exposes: {
            "./BCalc": "./src/components/calculator/BCalc"
          },
          shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true },
          },
        }),

        new ExternalTemplateRemotesPlugin(),
      ]
    },
  },
};