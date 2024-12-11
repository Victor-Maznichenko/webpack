import path from "path";
import { buildConfig } from "./config/webpack/buildConfig";
import { Webpack } from "./config/webpack/utils/types";

const paths = {
   src: path.resolve(__dirname, "src"),
   output: path.resolve(__dirname, "build"),
   public: path.resolve(__dirname, "public"),
   entry: path.resolve(__dirname, "src", "index.tsx"),
   html: path.resolve(__dirname, "public", "index.html"),
   css: path.join("public", "css", "[name].[contenthash:8].css"),
};

export default (env: Webpack.Enviroment) =>
   buildConfig({
      ...env,
      paths,
   });
