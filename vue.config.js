const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "views": resolve("src/views"),
        "components": resolve("src/components"),
        "assets": resolve("src/assets"),
        "images": resolve("src/assets/images"),
        "libs": resolve("src/libs"),
        "api": resolve("src/libs/axios/api")
      }
    }
  }
};