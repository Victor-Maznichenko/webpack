import { Configuration, ProgressPlugin } from "webpack";
import { Webpack } from "../utils/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Plugins = (options: Webpack.ModuleOptions) => Configuration["plugins"];

export const plugins: Plugins = ({ isDevMode, paths }) => {
   const defaultPlugins = [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
   ];

   if (isDevMode) {
      return [...defaultPlugins, new ProgressPlugin()];
   }

   return [
      ...defaultPlugins,
      new MiniCssExtractPlugin({
         filename: paths.css,
         chunkFilename: paths.css,
      }),
   ];
};
