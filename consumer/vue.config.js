const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const publicPath = process.env.PUBLIC_PATH || "http://localhost:8081/"
const remotePath = process.env.REMOTE_PATH || "http://localhost:8080/"
console.log(publicPath);
module.exports = defineConfig({
  transpileDependencies: false,
  publicPath,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "consumer",
        filename: "remoteEntry.js",
        remotes: {
          host: `host@${remotePath}remoteEntry.js`,
        },
      }),
    ],
  },
  devServer: {
    port: 8081,
  },
});
