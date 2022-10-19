const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const publicPath = process.env.PUBLIC_PATH || "http://localhost:8080/"

module.exports = defineConfig({
  publicPath,
  transpileDependencies: false,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld",
        },
      }),
    ],
  },
  devServer: {
    port: 8080,
  },
});
