const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: false,
  publicPath: "http://localhost:8081/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "consumer",
        filename: "remoteEntry.js",
        remotes: {
          host: "host@http://localhost:8080/remoteEntry.js",
        },
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
});
