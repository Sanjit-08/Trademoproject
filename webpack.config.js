const path = require("path ");

module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
