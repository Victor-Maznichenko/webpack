import { ModuleOptions } from "webpack";
import { Webpack } from "../utils/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Loaders = (options: Webpack.ModuleOptions) => ModuleOptions["rules"];

export const loaders: Loaders = ({ isDevMode }) => {
   const tsLoader = {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
   };

   const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [!isDevMode ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
   };

   return [tsLoader, styleLoader];
};
