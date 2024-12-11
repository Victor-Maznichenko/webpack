import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { Webpack } from "../utils/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

type Plugins = (options: Webpack.ModuleOptions) => Configuration["plugins"];

export const plugins: Plugins = ({ isDevMode, paths, analyzer, platform }) => {
   console.log(platform ?? "desktop");
   const defaultPlugins = [
      new HtmlWebpackPlugin({
         template: paths.html,
         favicon: path.resolve(paths.public, "favicon.ico"),
      }),
      new DefinePlugin({
         __PLATFORM__: JSON.stringify(platform ?? "desktop"),
      }),
      new ForkTsCheckerWebpackPlugin(),
   ];

   if (isDevMode) {
      return [...defaultPlugins, new ProgressPlugin(), new ReactRefreshWebpackPlugin()];
   }

   const miniCssPluginProd = new MiniCssExtractPlugin({
      filename: paths.css,
      chunkFilename: paths.css,
   });

   const bundleAnalyzerPlugin = analyzer ? new BundleAnalyzerPlugin() : undefined;
   const copyPlugin = new CopyPlugin({
      patterns: [{ from: paths.public, to: paths.output }],
   });

   return [...defaultPlugins, miniCssPluginProd, bundleAnalyzerPlugin, ,];
};
