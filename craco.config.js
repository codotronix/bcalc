const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    webpack: {
        configure: {
            output: {
                publicPath: "https://barick.in/bcalc/",
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
                    "./BCalc": "./src/components/calculator/Calc"
                  },
                //   shared: {react: {singleton: true}, "react-dom": {singleton: true}},
                }),
          
                new ExternalTemplateRemotesPlugin(),
            ]
        },
    },
};